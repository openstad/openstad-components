'use strict';

import FingerprintJS from '@fingerprintjs/fingerprintjs';
import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentChoices from './choices.jsx';
import OpenStadComponentForms from '../../forms/index.jsx';
import OpenStadComponentPreviousNextButtonBlock from '../../previous-next-button-block/index.jsx';
import fetchChoicesGuide from '../lib/fetch.js'

export default class OpenStadComponentChoicesGuideResult extends OpenStadComponent {

  constructor(props) {

    super(props, {
      type: 'default',
      submission: {
        type: 'none',
        requireLoginSettings: {
          title: "Stemcode",
          description: "Om te kunnen stemmen vult u de stemcode in die u per post hebt ontvangen. Wij controleren uw stemcode op geldigheid. Als dat gelukt is kunt u stemmen.",
          buttonTextLogin: "Vul uw stemcode in",
          buttonTextLoggedIn: "Geldige stemcode",
          buttonTextAlreadySubmitted: "Ongeldige stemcode",
          changeLoginLinkText: "Vul een andere stemcode in",
          loggedInMessage: "Het controleren van uw stemcode is gelukt! Klik op onderstaande knop om uw keuze in te sturen.",
          notYetLoggedInError: "Klik hierboven om uw stem te valideren.",
          alreadySubmittedMessage: "Deze stemcode is al gebruikt om te stemmen. Een stemcode kan maar één keer gebruikt worden.",
        },
      },
      choices: {
        title: {
          noPreferenceYet: 'U hebt nog geen keuze gemaakt',
          preference: 'Uw voorkeur is {preferredChoice}',
          inBetween: 'U staat precies tussen meerdere voorkeuren in'
        },
        withPercentage: true,
        minLabel: null,
        maxLabel: null,
      },
    });

    this.config.loginUrl = this.config.loginUrl || '/oauth/login?returnTo=' + encodeURIComponent(document.location.href);
    this.config.logoutUrl = this.config.logoutUrl || '/oauth/logout?returnTo=' + encodeURIComponent(document.location.href);

    let allValues = OpenStadComponentLibs.localStorage.get('osc-choices-guide.values') || {};
    allValues = allValues[ this.config.choicesGuideId ] || {};
    let allScores = OpenStadComponentLibs.localStorage.get('osc-choices-guide.scores') || {};
    allScores = allScores[ this.config.choicesGuideId ] || {};
    let allFormvalues = OpenStadComponentLibs.localStorage.get('osc-choices-guide.formvalues') || {};
    allFormvalues = allFormvalues[ this.config.choicesGuideId ] || {};
    let scrollToLogin;

    // TODO: bouw dit om naar iets dat de resultaten al opslaat in de API en dan na login bevestigd
    let match = window.location.search.match(/(\?|\&)resultdata=([^\?\&]+)/);
    if (match) {
      let resultdata = window.atob(match[2]);
      try {
        resultdata = JSON.parse(resultdata);
      } catch (err) {}
      scrollToLogin = resultdata.scrollToLogin;
      allFormvalues = resultdata.formValues;
      allValues = resultdata.result.answers;
      allScores = resultdata.result.scores;
    }
    
    if (this.config.submission.type == 'form') {
      this.onFormChange = this.onFormChange.bind(this);
      let formvalues = allFormvalues || {};
      this.config.submission.form.fields.forEach(field => {
        let name = field.name || field.title.toLowerCase();
        if (typeof allFormvalues[name] != 'undefined') { field.value = allFormvalues[name]; }
      });
    }

    this.state = {
      title: '',
      answers: allValues,
      scores: allScores,
      scrollToLogin,
      questionGroupId: this.config.questionGroupId,
    };

  }

  componentDidMount(prevProps, prevState) {
    this.fetchData();
  }

  fetchData() {

    let self = this;
    fetchChoicesGuide({ config: self.config })
      .then((data) => {
        // mutiple questionGroups is not quite ready and is therefore turned of in the interface
        let questionGroupId = data.questionGroups && data.questionGroups[0] && data.questionGroups[0].id;
        self.setState({ ...data, questionGroupId }, () => {
          // override config settings
          self.config.submission.type = data.choicesGuideConfig.submissionType || self.config.submission.type;
          self.startGuide();
        });
      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });

  }

  startGuide() {

    let self = this;
    let scores, planePos;

    ( {scores, planePos} = self.choicesElement && self.choicesElement.calculateScores(self.state.answers) );

    let choicesTitle = '';
    let name;
    let preferredChoiceId = -1;
    if ( self.choicesElement ) {

      let choiceElement = self.choicesElement.getPreferedChoice({scores, planePos});

      if ( choiceElement ) {
        choicesTitle = self.config.choices.title.preference.replace('\{preferredChoice\}', choiceElement && choiceElement.getTitle(self.state.scores[choiceElement.config.divId]) || choicesTitle);
      } else {
        choicesTitle = self.config.choices.title.inBetween;
      }
      
      self.setState({ title: choicesTitle })

		  var event = new window.CustomEvent('osc-choices-guide-result-is-ready', {
        detail: {
          preferredChoice: {
            name,
            title: choicesTitle,
            preferredChoiceId
          },
          answers: self.state.answers,
          scores: self.state.scores,
        }
      });
		  document.dispatchEvent(event);
      
      if (self.state.scrollToLogin) {
        let element = document.querySelector('.osc-require-login');
        if (element) element.scrollIntoView({behavior: 'smooth'});
      }

      if (self.config.submission.type == 'auto') {
        self.submitResult()
      }

    }
    
  }

  submitResult() {

    let self = this;

    let formValues;

    let errorState1;
    let requireLogin = !!(self.state.choicesGuideConfig && self.state.choicesGuideConfig.requiredUserRole);
    if ( requireLogin && !self.isUserLoggedIn() ) {
      let element = document.querySelector('.osc-require-login');
      if (element) element.scrollIntoView({behavior: 'smooth'});
      errorState1 = {
        submissionError: {
          message: self.config.submission.requireLoginSettings.notYetLoggedInError,
          type: 'unknown'
        }
      };
    }

    let errorState2;
    if (self.config.submission.type == 'form') {
      formValues = self.form.getValues();
      let isValid = self.form.validate({ showErrors: true, scrollTo: true });
      if (!isValid) errorState2 = true;
    }

    if (errorState1 || errorState2) {
      self.setState(errorState1, () => {
        // TODO: de error wordt overschreven; dat moet nog opgelost. Tot dan staat dit hier extra
        self.form.validate({ showErrors: true, scrollTo: true });
      })
      return;
    };
    
    FingerprintJS.load().then(fp => {
      fp.get().then(result => {
        const visitorId = result.visitorId;

        let url = `${self.config.api && self.config.api.url }/api/site/${  self.config.siteId  }/choicesguide/${  self.config.choicesGuideId  }/result`;
        let headers = OpenStadComponentLibs.api.getHeaders(self.config);
        let body = {
          result: {
            answers: self.state.answers,
            scores: self.state.scores,
          },
          extraData: formValues,
          userFingerprint: visitorId,
        };

        fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify(body),
        })
          .then( function(response) {
            if (response.ok) {
              return response.json();
            }
            throw response.text();
          })
          .then(function(json) {
            if (self.config.submission.type == 'form') {
              OpenStadComponentLibs.localStorage.remove('osc-choices-guide.values');
              OpenStadComponentLibs.localStorage.remove('osc-choices-guide.scores');
              OpenStadComponentLibs.localStorage.remove('osc-choices-guide.formvalues');
              if (requireLogin) {
                return self.logout({ afterUrl: self.config.afterUrl })
              }
              return document.location.href = self.config.afterUrl
            }
          })
          .catch(function(error) {
            if (error.then) {
              error.then(function(messages) {
                try {
                  messages = JSON.parse(messages)
                } catch (err) {}
                let message = ( Array.isArray(messages) && messages[0] && messages[0].message || messages[0] ) || ( messages.message || messages );
                self.setState({
                  submissionError: {
                    message: message.toString(),
                    type: message == 'U heeft uw mening al ingestuurd' ? 'alreadySubmitted' : 'unknown'
                  }
                }, () => {
                  return console.log(messages);
                });
              });
            } else {
              return console.log(error);
            }
          });
      });
    });

  }

  isUserLoggedIn() {
    return this.config.user && this.config.user.role && this.config.user.role != 'anonymous';
  }

  gotoLoginUrl() {

    let url = this.config.loginUrl;
    let data = {
      scrollToLogin: true,
      formValues: this.form.getValues(),
      result: {
        answers: this.state.answers,
        scores: this.state.scores,
      }
    };

    let match = url.match(/returnTo=([^\?\&]+)/);
    if (match) {
      let returnTo = decodeURIComponent(match[1]);
      returnTo += returnTo.match(/\?/) ? '&' : '?';
      returnTo += 'resultdata=' + window.btoa( JSON.stringify(data).replace(/=+$/, '') );
      returnTo = encodeURIComponent(returnTo);
      url = url.replace(/returnTo=[^\?\&]+/, 'returnTo=' + returnTo)
    } else {
      url += url.match(/\?/) ? '&' : '?';
      url += 'resultdata=' + window.btoa( JSON.stringify(data) ).replace(/=+$/, '');
    }

    document.location.href = url;

  }
  
  logout({ afterUrl }) {

    let self = this;
    let logoutUrl = self.config.logoutUrl || '/oauth/logout';
    
    fetch(logoutUrl, {
	    headers: { "Content-type": "application/json" },
	    method: 'GET',
    })
	    .then((response) => {
        return document.location.href = afterUrl;
	    })
	    .catch((err) => {
        return document.location.href = afterUrl;
	    });
  }
  
  onFormChange() {

    let self = this;

    let allFormvalues = OpenStadComponentLibs.localStorage.get('osc-choices-guide.formvalues') || {};
    allFormvalues[self.config.choicesGuideId] = self.form.getValues();
    OpenStadComponentLibs.localStorage.set('osc-choices-guide.formvalues', allFormvalues);

    self.setState({ random: Math.random() }) // force state update

  }
  
  render() {

    let self = this;
    let data = self.props && self.props.data || {};

    let choices = self.state.choices;
    let questionGroup;
    if (self.state.questionGroups) {
      questionGroup = self.state.questionGroups.find( group => group.id == self.state.questionGroupId );
      if (questionGroup) {
        questionGroup.values = self.state.values || {};
        if (questionGroup && questionGroup.choices) {
          choices = questionGroup.choices;
        }
      }
    }

    let requireLogin = !!(self.state.choicesGuideConfig && self.state.choicesGuideConfig.requiredUserRole);

    let choicesHTML = null;
    if (choices) {
      choicesHTML = <OpenStadComponentChoices config={{ ...self.config.choices, startWithAllQuestionsAnswered: self.config.startWithAllQuestionsAnswered }} scores={{...self.state.scores}} choices={[...choices]} firstAnswerGiven={true} ref={function(el) { self.choicesElement = el; }} key='choices'/>;
    }

    let moreInfoHTML = null;
    if (self.config.moreInfoUrl && self.config.moreInfoLabel) {
      moreInfoHTML =
        <div className="osc-more-info-link">
          <a href={self.config.moreInfoUrl}>{self.config.moreInfoLabel}</a>
        </div>
    }

    let formHTML = null;
    let requireLoginHTML = null;
    let previousNextButtonsHTML = null;
    if (self.config.submission.type == 'form') {
      formHTML = (
        <OpenStadComponentForms.Form config={ self.config.submission.form } onChange={self.onFormChange} ref={function(el) { self.form = el; }}/>
      );

      if (requireLogin) {
        if (self.isUserLoggedIn()) {
          let className = 'osc-success';
          let buttonText = self.config.submission.requireLoginSettings.buttonTextLoggedIn;
          let message = self.config.submission.requireLoginSettings.loggedInMessage;
          if (self.state.submissionError) {
            className = 'osc-error';
            if (self.state.submissionError.type == 'alreadySubmitted') {
              buttonText = self.config.submission.requireLoginSettings.buttonTextAlreadySubmitted;
              message  = self.config.submission.requireLoginSettings.alreadySubmittedMessage;
            } else {
              message = self.state.submissionError.message;
            }
          }
          requireLoginHTML = (
            <div className={`osc-require-login osc-logged-in osc-logged-in ${className}`}>
              <h2>{self.config.submission.requireLoginSettings.title}</h2>
              <div className="osc-gray-block">
                <button onClick={e => self.gotoLoginUrl()} className="osc-button osc-button-white">{buttonText}</button>
                <div className="change-login-link-text">
                  <a onClick={e => self.gotoLoginUrl()}>{self.config.submission.requireLoginSettings.changeLoginLinkText}</a>
                </div>
                <div className="osc-message">
                  {message}
                </div>
              </div>
            </div>
          )
        } else {
          let className = '';
          let message = '';
          if (self.state.submissionError) {
            className = 'osc-error';
            message = self.state.submissionError.message;
          }
          requireLoginHTML = (
            <div className={`osc-require-login osc-not-yet-logged-in ${className}`}>
              <h2>{self.config.submission.requireLoginSettings.title}</h2>
              <div className="osc-gray-block">
                {self.config.submission.requireLoginSettings.description}<br/><br/>
                <button onClick={e => self.gotoLoginUrl()} className="osc-button osc-button-white">{self.config.submission.requireLoginSettings.buttonTextLogin}</button>
                <div className="osc-message">
                  {message}
                </div>
              </div>
            </div>
          )
        }
      }

      let previousUrl = null; let previousAction = null; let previousLabel = null;

      if (self.config.beforeUrl) {
        previousUrl = self.config.beforeUrl;
        previousLabel = self.config.beforeLabel || 'Vorige'
      }

      let nextUrl = null;
      let nextAction = () => { self.submitResult(); }
      let nextLabel = self.config.afterLabel || 'Opslaan'

      let nextIsDisabled = ( self.config.submission.type == 'form' && self.form && !self.form.validate({}) ) || ( requireLogin && !self.isUserLoggedIn() );
      
      if ( previousLabel || nextLabel ) {
        previousNextButtonsHTML = <OpenStadComponentPreviousNextButtonBlock previousAction={previousAction} previousUrl={previousUrl} previousLabel={previousLabel} nextAction={nextAction} nextUrl={nextUrl} nextLabel={nextLabel} nextIsDisabled={nextIsDisabled}/>
      }

    }

    let errorMessageHTML = null;
    if (self.state.submissionError && !requireLogin) {
      errorMessageHTML = (
        <div className="osc-message osc-error">
          {self.state.submissionError.message}
        </div>);
    }
    
    return (
      <div className="osc-choices-guide">
        <div className="osc-result">
          <div className="osc-result-content">
            <div className={`osc-choices-container ${'osc-type-' + self.config.choices.type}`}>
              <h3 dangerouslySetInnerHTML={{ __html: self.state.title }}></h3>
              {choicesHTML}
            </div>
            {moreInfoHTML}
            {formHTML}
            {requireLoginHTML}
            {errorMessageHTML}
          </div>
        </div>
       {previousNextButtonsHTML}
      </div>
    );

  }

}
