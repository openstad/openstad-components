'use strict';

import merge from 'merge';
import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentQuestionGroup from './question-group.jsx';
import OpenStadComponentChoices from './choices.jsx';
import OpenStadComponentChoicesGuideForm from './edit/form.jsx';
import { Image as OpenStadComponentImage } from '../../image/index.jsx';
import OpenStadComponentLightbox from '../../lightbox/index.jsx';
import OpenStadComponentPreviousNextButtonBlock from '../../previous-next-button-block/index.jsx';
// import OpenStadComponentChoicesGuideResult from './result.jsx';

import fetchChoicesGuide from '../lib/fetch.js'

export default class OpenStadComponentChoicesGuide extends OpenStadComponent {

  constructor(props) {

    super(props, {
      siteId: null,
      loginUrl: null,
      noOfQuestionsToShow: 100,
      api: {
        url: null
      },
      choices: {
        title: {
          noPreferenceYet: 'Hoe belangrijk vind jij de ambities?',
          preference: '<b>Jouw ambitie:</b>{preferredChoice}',
          inBetween: 'Je staat precies tussen meerdere ambities in'
        },
        withPercentage: false,
        minLabel: null,
        maxLabel: null,
      },
    });

    let self = this;

    // tmp backwards compatibility
    if ( !self.config.aspectRatio && self.config.choices && self.config.choices.type && self.config.choices.type == 'plane' ) {
      self.config.aspectRatio = '10x7'
    }

    let allValues = OpenStadComponentLibs.localStorage.get('osc-choices-guide.values') || {};
    let allScores = OpenStadComponentLibs.localStorage.get('osc-choices-guide.scores') || {};
    self.state = {
      title: 'Loading....',
      questionGroups: [],
      choices: [],
      currentQuestionGroupIndex: undefined,
      currentQuestion: undefined,
      status: 'init',
      values: allValues[ self.config.choicesGuideId ],
      scores: allScores[ self.config.choicesGuideId ],
    };

    self.liveUpdates = self.liveUpdates.bind(this);
    self.hideEditForm = self.hideEditForm.bind(this);
    
  }

  componentDidMount(prevProps, prevState) {

    let self = this;

    self.liveUpdateListener = function(event) {
      self.liveUpdates(event.detail);
    }
		document.addEventListener('osc-choices-guide-live-updates', self.liveUpdateListener);

    self.fetchData();

  }

  componentWillUnmount() {
		document.removeEventListener('osc-choices-guide-live-updates', self.liveUpdateListener);
  }

  fetchData() {

    let self = this;
    fetchChoicesGuide({ config: self.config })
      .then((data) => {
        if (!data.choicesGuideId) {
          return self.setState({ status: 'panic', message: "Er is geen keuzewijzer gevonden. Maak er één aan in het admin deel van deze site, en koppel deze dan hier in 'Bewerk keuzewijzer'." });
        }
        self.setState(data, () => {
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
    let state = {};
    
    state.currentQuestionGroupIndex = 0;
    self.setState(state, () => {
      self.liveUpdates();
		  var event = new window.CustomEvent('osc-choices-guide-is-ready');
		  document.dispatchEvent(event);

      // TMP
      // self.showEditForm()
    });

  }

  showEditForm() {
    this.setState({ status: 'edit' });
  }

  hideEditForm() {
    let allValues = OpenStadComponentLibs.localStorage.get('osc-choices-guide.values') || {};
    let allScores = OpenStadComponentLibs.localStorage.get('osc-choices-guide.scores') || {};
    this.setState({
      title: 'Loading....',
      questionGroups: [],
      choices: [],
      currentQuestionGroupIndex: undefined,
      status: 'init',
      values: allValues[ this.config.choicesGuideId ],
      scores: allScores[ this.config.choicesGuideId ],
    }, function() {
      this.fetchData()
    });
  }

  gotoNextQuestion() {

    let self = this;

    let state = {};
    state.values = merge(self.state.values || {}, self.questionGroupElement.getAnswers());
    self.setState(state);

    self.choicesElement.calculateScores(state.values);

    let { isReady, currentQuestion } = self.questionGroupElement.gotoNextQuestion();
    self.setState({currentQuestion}, () => {
      if (isReady) {
        self.gotoNextGroup();
      } else {
        window.scrollTo(0,0)
      }
    })

  }

  gotoPreviousQuestion() {

    if (this.state.status == 'result') return this.gotoPreviousGroup();

    let state = {};
    state.values = merge(this.state.values || {}, this.questionGroupElement.getAnswers());
    this.setState(state);

    this.choicesElement.calculateScores(state.values);

    let { isBeginning, currentQuestion } = this.questionGroupElement.gotoPreviousQuestion();
    this.setState({currentQuestion}, () => {
      if (isBeginning) {
        this.gotoPreviousGroup();
      } else {
        window.scrollTo(0,0)
      }
    })

  }

  gotoNextGroup() {

    let state = { ...this.state };
    if (state.currentQuestionGroupIndex < state.questionGroups.length - 1) {
      state.values = merge(state.values || {}, this.questionGroupElement.getAnswers());
      state.currentQuestionGroupIndex++;
      this.setState(state, () => {
        this.liveUpdates();
        window.scrollTo(0,0)
      });
    } else {
      this.gotoResult();
    }

  }

  gotoPreviousGroup() {

    let state = {};
    state.currentQuestionGroupIndex = this.state.currentQuestionGroupIndex - 1;
    if (this.state.status == 'result') {
      state.currentQuestionGroupIndex = this.state.questionGroups.length - 1;
      state.status = 'active';
    }
    this.setState(state, () => {
      this.liveUpdates();
      window.scrollTo(0,0)
    });
    
  }

  gotoResult() {
    let self = this;
    document.location.href = self.config.afterUrl;
  }

  liveUpdates() {
    let self = this;
    let answers = merge(self.state.values || {}, self.questionGroupElement.getAnswers());
    let scores;
    ( {scores} = self.choicesElement.calculateScores(answers) );
    self.setState({ scores, firstAnswerGiven: Object.keys(answers).length > 0 }, () => {
      let allValues = OpenStadComponentLibs.localStorage.get('osc-choices-guide.values') || {};
      allValues[self.config.choicesGuideId] = answers;
      OpenStadComponentLibs.localStorage.set('osc-choices-guide.values', allValues);
      let allScores = OpenStadComponentLibs.localStorage.get('osc-choices-guide.scores') || {};
      allScores[self.config.choicesGuideId] = scores;
      OpenStadComponentLibs.localStorage.set('osc-choices-guide.scores', allScores);
      self.updateChoicesTitle()
    })
  }

  updateChoicesTitle() {
    let self = this;

    let choicesTitle = self.config.choices.title.noPreferenceYet;
    let choiceElement = self.choicesElement && self.choicesElement.getPreferedChoice({});
    if ( self.state.firstAnswerGiven ) {
      if ( choiceElement ) {
        choicesTitle = self.config.choices.title.preference.replace('\{preferredChoice\}', choiceElement && choiceElement.getTitle(self.state.scores[choiceElement.config.divId]) || choicesTitle);
      } else {
        choicesTitle = self.config.choices.title.inBetween;
      }
    }

    self.setState({ choicesTitle })
  }

  onChoicesClick(e) {
    if( this.choicesAccordeon.className.match(' osc-closed') ) {
      this.choicesAccordeon.className = this.choicesAccordeon.className.replace(' osc-closed', ' osc-open');
    } else {
      this.choicesAccordeon.className = this.choicesAccordeon.className.replace(' osc-open', ' osc-closed');
    }

		var event = new window.CustomEvent('osc-choices-click', { detail: {} });
		document.dispatchEvent(event);
  
  }

  render() {

    let self = this;

    let choices = self.state.choices;
    let questionGroup;
    if (self.state.currentQuestionGroupIndex >= 0) {
      questionGroup = self.state.questionGroups[ self.state.currentQuestionGroupIndex ];
      if (questionGroup) {
        questionGroup.values = self.state.values || {};
        if (questionGroup && questionGroup.choices) {
          choices = questionGroup.choices;
        }
      }
    }

    let imageHTML = null;
    let images = self.state.images;
    if (images && images.length) {
      if (!Array.isArray(images)) images = [images];
      imageHTML = (
        <OpenStadComponentImage className="osc-top-image-spacer" width="100%" image={images[0]}/>
      );
    }

    let contentHTML = null;
    if (self.state.status == 'edit') { // todo: maak hier een switch van
      contentHTML = (
        <div className="osc-choices-guide-content">
          <OpenStadComponentChoicesGuideForm config={self.config} onFinished={self.hideEditForm} data={{ ...self.state }}/>
        </div>
      );

    } else {

      let introHTML = null;

      if (self.state.status == 'panic') {
        contentHTML = (
          <div className="osc-choices-guide-content">
            <div className="osc-alert osc-alert-warning">{self.state.message}</div>
          </div>
        );
      } else if (self.state.status == 'init') {
        contentHTML = (
          <div className="osc-choices-guide-content">
            <div className="osc-intro">Laden...</div>
          </div>
        );
      } else {

        let choicesHTML = (
          <div id={'osc-choices-container-' + this.divId} className={`osc-choices-container osc-accordeon osc-closed ${'osc-type-' + self.config.choices.type}`} ref={el => { self.choicesAccordeon = el; }}>
            <div onClick={e => self.onChoicesClick(e)} className="osc-accordeon-button" dangerouslySetInnerHTML={{ __html: self.state.choicesTitle }}></div>
            <div className="osc-accordeon-content">
              <OpenStadComponentChoices config={{ ...self.config.choices, startWithAllQuestionsAnswered: self.config.startWithAllQuestionsAnswered }} choices={[...choices]} scores={{...self.state.scores}} firstAnswerGiven={ self.state.firstAnswerGiven ? true : false } ref={function(el) { self.choicesElement = el; }} key='choices'/>
            </div>
          </div>
        );

        let questionGroupHTML = (
          <OpenStadComponentQuestionGroup config={self.config} data={ questionGroup } ref={function(el) { self.questionGroupElement = el; }} key={`group${self.state.currentQuestionsGroupIndex}`}/>
        );

        let editButtonHTML = null;
        if (self.config.user && self.config.user.role && self.config.user.role == 'admin') {
          editButtonHTML = <button className="osc-editbutton osc-edit" onClick={event => self.showEditForm()}>Bewerk keuzewijzer</button>;
        }

        let previousUrl = null; let previousAction = null; let previousLabel = null;
        if ( self.state.currentQuestionGroupIndex > 0 || self.state.currentQuestion > 0 ) {
          previousAction = () => { self.gotoPreviousQuestion(); }
          previousLabel = 'Terug'
        } else if (self.config.beforeUrl) {
          previousUrl = self.config.beforeUrl;
          previousLabel = 'Introductie'
        }

        let nextUrl = null; let nextAction = null; let nextLabel = null;
        if (self.state.status == 'init') {
          nextAction = null;
          nextLabel = null;
        } else {
          nextAction = () => { self.gotoNextQuestion(); }
          nextLabel = 'Volgende'
        }
        
        let previousNextButtonsHTML = null;
        if ( previousLabel || nextLabel ) {
          previousNextButtonsHTML = <OpenStadComponentPreviousNextButtonBlock previousAction={previousAction} previousUrl={previousUrl} previousLabel={previousLabel} nextAction={nextAction} nextUrl={nextUrl} nextLabel={nextLabel}/>
        }
        
        contentHTML =  (
          <div className="osc-choices-guide-content">
            {editButtonHTML}
            {choicesHTML}
            {questionGroupHTML}
            {previousNextButtonsHTML}
          </div>
        );
      }

    }

    return (
      <div id={this.divId} className="osc-choices-guide">
        <OpenStadComponentLightbox/>
        {imageHTML}
        {contentHTML}
      </div>
    );

  }

}
