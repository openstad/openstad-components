'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentForms from '../../forms/index.jsx';

export default class OpenStadComponentPollForm extends OpenStadComponent {

  constructor(props) {

    super(props, {
      user: {},
      questionMinLength: 30,
      questionMaxLength: 500,
      titleMinLength: 30,
      titleMaxLength: 500,
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      allowChoiceTitles: true,
    });

    this.state = {
      user: props.user,
      pollId: props.pollId,
      poll: props.poll,
      isBusy: false,
    };

  }

  componentDidMount(prevProps, prevState) {

    let self = this;

    // user
    if (!( self.state.user && self.state.user.role )) {
      OpenStadComponentLibs.user.getUser({ user: self.config.user, jwt: self.config.jwt, siteId: self.config.siteId, api: self.config.api }, (err, user) => {
        self.setState({ user }, () => {
          if ( !self.state.poll ) self.fetchData();
        });
      });
    } else {
      if ( !self.state.poll ) self.fetchData();
    }

  }

  fetchData(next) {

    let self = this;
    if (!self.state.pollId) {
      return self.setState({ poll: {
        question: '',
        choices: { "1": {}, "2": {} },
      }});
    }

    let url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/idea/${  self.config.ideaId  }/poll/${ self.config.pollId }?withUser=1&withVotes=1`;
    let headers = OpenStadComponentLibs.api.getHeaders(self.config);

    fetch(url, { headers })
      .then( function(response) {
        if (response.ok) {
          return response.json();
        }
        throw response.text();
      })
      .then(function(json) {

        let state = { ...self.state };
        state.poll = json;

        self.setState(state, function() {
          if (next) return next();
        });

      })
      .catch(function(error) {
        console.log(error);
        error.then(function(messages) { return console.log(messages);} );
      });

  }

  validatedResult() {

    let self = this;
    let poll = self.state.poll;

    let questionInput = self['question-input'];
    let isValid = questionInput.validate();
    let result = { question: questionInput.state.value, choices: {} };

    Object.keys(poll.choices).forEach((key) => {
      let titleInput = self[`title-input-${key}`];
      let descriptionInput = self[`description-input-${key}`];
      if (!( titleInput && titleInput.state.value ) && !descriptionInput.state.value) return;
      result.choices[key] = {};
      if (self.config.allowChoiceTitles && titleInput.state.value) {
        result.choices[key].title = titleInput.state.value;
        if (!titleInput.validate()) isValid = false;
      }
      if (descriptionInput.state.value) {
        result.choices[key].description = descriptionInput.state.value;
        if (!descriptionInput.validate()) isValid = false;
      }
    });

    if (!isValid) return null;
    if (Object.keys(result.choices).length < 2) return null;
    return result;

  }

  handleOnChange(data) {

    let self = this;
    let poll = { ...self.state.poll };

    if (data.choice) {
      poll.choices[ data.choice.id ] = {
        title: self.config.allowChoiceTitles && data.choice.title,
        description: data.choice.description,
      }
    }

    if (data.question) {
      poll.question = data.question;
    }

    this.setState({ poll }, () => {
    });

  }

  addChoice() {
    let self = this;
    let poll = { ...self.state.poll };
    let keys = Object.keys(poll.choices).sort();
    let key = parseInt( keys[keys.length-1] ) + 1;
    poll.choices[ key ] = {};
    self.setState({ poll })
  }

  canSubmit() {
    if (this.state.poll && this.state.poll.can) {
      return this.state.poll.can.edit;
    } else {
      let requiredUserRole = this.config.requiredUserRole;
      let userRole = 'moderator' || this.props.user && this.props.user.role;
      // todo: owner; dus dit moet anders
      return ( requiredUserRole == 'anonymous' && userRole )  ||
        ( requiredUserRole == 'member' && ( userRole == 'member' || userRole == 'editor' || userRole == 'moderator' || userRole == 'admin' ) )  ||
        ( requiredUserRole == 'editor' && ( userRole == 'editor' || userRole == 'moderator' || userRole == 'admin' ) )  ||
        ( requiredUserRole == 'moderator' && ( userRole == 'moderator' || userRole == 'admin' ) )  ||
        ( requiredUserRole == 'admin' && userRole == 'admin' );
    }
  }

  submitForm() {

    let self = this;

    self.setState({ isBusy: true }, () => {

      let validatedResult = self.validatedResult();
      if (!validatedResult) {
        self.setState({ isBusy: false });
        return;
      }

      if (!self.canSubmit()) return alert('Je bent niet ingelogd');

      let isNew = true;
      let url = `${ self.config.api && self.config.api.url }/api/site/${ self.config.siteId }/idea/${ self.config.ideaId }/poll`;
      let method = 'POST';
      if (self.state.poll && self.state.poll.id) {
        url += `/${ self.state.poll.id }`;
        method = 'PUT';
        isNew = false;
      }
      let headers = OpenStadComponentLibs.api.getHeaders(self.config);

      let body = validatedResult;

      fetch(url, {
        method,
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

		      let event = new CustomEvent('osc-new-poll-stored', { detail: json });
          if (!isNew) event = new CustomEvent('osc-poll-edited', { detail: json });

		      document.dispatchEvent(event);
          if (typeof self.config.onFinished == 'function') {
            self.config.onFinished(validatedResult);
          }

        })
        .catch(function(error) {
          console.log(error);
          error.then(function(messages) { alert(messages); return console.log(messages);} );
          self.setState({ isBusy: false });
        });

    });

  }

  render() {

    let self = this;
    let poll = self.state.poll || {};

    let formIntro = null;
    if (self.config.formIntro) {
      formIntro = (
        <div className="osc-intro">{self.config.formIntro}</div>
      );
    }
    
    let submitButtonHTML = null;
    if (self.canSubmit()) {
      submitButtonHTML = (
        <div className="osc-align-right-container">
          <button className="osc-button-blue" onClick={() => { if (self.config.onFinished) self.config.onFinished(); }}>Terug</button>
			    <button onClick={(e) => { if (!self.state.isBusy) self.submitForm(); }} className={`osc-button-blue osc-margin-left${ self.state.isBusy ? ' osc-disabled' : '' }`} >Verzenden</button>
        </div>
      );
    } else {
      let loginUrl = OpenStadComponentLibs.auth.getLoginUrl(self.config);
      submitButtonHTML = (
        <div className="osc-align-right-container">
          <button className="osc-button-blue" onClick={() => { if (self.config.onFinished) self.config.onFinished(); }}>Terug</button>
          <button onClick={() => { document.location.href = loginUrl; }} className="osc-button-blue osc-not-logged-in-button osc-margin-left">Inloggen</button>
        </div>
      );
    }

    return (
      <div id={self.divId} className="osc-form" ref={el => (self.instance = el)} >
        {formIntro}

        <h4>Vraag</h4>
        <OpenStadComponentForms.InputWithCounter config={{ inputType: 'text', minLength: self.config.questionMinLength, maxLength: self.config.questionMaxLength, placeholder: 'Vraag' }} value={poll.question} onChange={ data => self.handleOnChange({ question: data.value }) } ref={el => (self[`question-input`] = el)}/>

        <h4>Keuzemogelijkheden</h4>
        <ol className="osc-poll-form-choices">
          {poll && poll.choices && Object.keys(poll.choices).sort().map((key) => {
            let choice = poll.choices[key];
            let titleInputHTML = null;
            if (self.config.allowChoiceTitles) titleInputHTML = <OpenStadComponentForms.InputWithCounter config={{ inputType: 'text', minLength: self.config.titleMinLength, maxLength: self.config.titleMaxLength, placeholder: 'Titel' }} value={choice.title} onChange={ data => self.handleOnChange({ choice: { id: key, title: data.value } }) } ref={el => (self[`title-input-${key}`] = el)}/>;
            return (
              <li className="osc-poll-form-choice" key={`osc-key-${key}`}>
                {titleInputHTML}
                <OpenStadComponentForms.InputWithCounter config={{ inputType: 'text', minLength: self.config.descriptionMinLength, maxLength: self.config.descriptionMaxLength, placeholder: 'Beschrijving' }} value={choice.description} onChange={ data => self.handleOnChange({ choice: { id: key, description: data.value } }) } ref={el => (self[`description-input-${key}`] = el)}/>
              </li>
            );
          })}
        </ol>

        <a className="osc-add-choice-button" onClick={ e => this.addChoice() }>Nog een keuzemogelijkheid toevoegen</a>
        
        {submitButtonHTML}

      </div>
    );

  }

}
