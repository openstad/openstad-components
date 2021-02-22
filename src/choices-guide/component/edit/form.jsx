'use strict';

import OpenStadComponent from '../../../component/index.jsx';
import OpenStadComponentLibs from '../../../libs/index.jsx';

import ChoiceForm from './choice-form.jsx';
import ChoicesGuideForm from './choices-guide-form.jsx';
import QuestionForm from './question-form.jsx';
import QuestionGroupForm from './question-group-form.jsx';
import Overview from './overview.jsx';

export default class OpenStadComponentChoicesGuideForm extends OpenStadComponent {

  constructor(props) {

    super(props, {
      siteId: null,
      loginUrl: null,
      noOfQuestionsToShow: 1,
      api: {
        url: null
      },
    });

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.setCurrentForm = this.setCurrentForm.bind(this)
    this.deleteElement = this.deleteElement.bind(this)

    this.state = {
      choicesGuideId: this.props.data.choicesGuideId,
      currentTarget: {
      },
      busy: false,
    };

    this.onFinished = this.props.onFinished;

  }

  componentDidMount(prevProps, prevState) {
    this.fetchData();
  }

  fetchData() {

    let self = this;

    let url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.config.choicesGuideId}?includeChoices=1&includeQuestions=1`;
    let headers = OpenStadComponentLibs.api.getHeaders();

    fetch(url, { headers })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        let state = {};
        state.choicesGuideId = json.id;
        state.title = json.title;
        state.description = json.description;
        state.images = json.images;
        state.choices = json.choices || [];
        state.questionGroups = json.questiongroups || [];
        state.busy = false;
        self.setState(state, () => {
          self.setCurrentForm({ what: 'choices-guide' });
        });
      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });

  }

  handleFieldChange(data) {
    let currentTarget = this.state.currentTarget;

    Object.keys(data).forEach((key) => {
      currentTarget[key] = data[key];
    });

    this.setState({ currentTarget });

  }

  setCurrentForm(currentTarget) {
    let questionGroup;
    let choice;
    let question;

    switch (currentTarget.what) {

      case 'choices-guide':
        currentTarget.title = this.state.title;
        currentTarget.description = this.state.description;
        currentTarget.images = this.state.images ? this.state.images : '';
        break;

      case 'choice':
        if (currentTarget.questionGroupId) {
          questionGroup = this.state.questionGroups.find(group => group.id == currentTarget.questionGroupId) || {};
          choice = questionGroup.choices && questionGroup.choices.find(choices => choices.id == currentTarget.choiceId) || {};
        } else {
          choice = this.state.choices.find(choices => choices.id == currentTarget.choicesId) || {};
        }
        currentTarget.questionGroup = questionGroup;
        currentTarget.title = choice.title;
        currentTarget.description = choice.description;
        currentTarget.images = choice.images;
        currentTarget.answers = choice.answers;
        currentTarget.seqnr = choice.seqnr || 0;
        break;

      case 'question-group':
        questionGroup = this.state.questionGroups.find(group => group.id == currentTarget.questionGroupId) || {};
        currentTarget.title = questionGroup.title;
        currentTarget.description = questionGroup.description;
        currentTarget.answerDimensions = questionGroup.answerDimensions;
        currentTarget.seqnr = questionGroup.seqnr || 0;
        break;

      case 'question':
        questionGroup = this.state.questionGroups.find(group => group.id == currentTarget.questionGroupId) || {};
        question = questionGroup.questions && questionGroup.questions.find(question => question.id == currentTarget.questionId) || {};
        currentTarget.questionGroup = questionGroup;
        currentTarget.title = question.title;
        currentTarget.description = question.description;
        currentTarget.images = question.images;
        currentTarget.minLabel = question.minLabel;
        currentTarget.maxLabel = question.maxLabel;
        currentTarget.type = question.type;
        currentTarget.dimensions = question.dimensions;
        currentTarget.values = question.values;
        currentTarget.seqnr = question.seqnr || 0;
        break;

      default:
    }

    this.setState({ currentTarget });
  }

  submitForm() {

    let self = this;

    self.setState({ busy: true }, () => {

      let isValid = true; // todo
      if (!isValid) return;

      if (!(self.config.user && self.config.user.role && self.config.user.role == 'admin')) return alert('Je mag dit niet');

      let url;
      let body;
      let targetId;

      switch (self.state.currentTarget.what) {

        case 'choices-guide':
          targetId = self.state.choicesGuideId;
          url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide`;
          body = {
            title: self.state.currentTarget.title,
            description: self.state.currentTarget.description,
            images: self.state.currentTarget.images,
          };
          break;

        case 'choice':
          targetId = self.state.currentTarget.choiceId;
          if (self.state.currentTarget.questionGroupId) {
            url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.state.choicesGuideId  }/questiongroup/${  self.state.currentTarget.questionGroupId  }/choice`;
          } else {
            url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.state.choicesGuideId  }/choice`;
          }
          body = {
            title: self.state.currentTarget.title,
            description: self.state.currentTarget.description,
            images: self.state.currentTarget.images,
            answers: self.state.currentTarget.answers,
            seqnr: self.state.currentTarget.seqnr,
          };
          try {
            body.answers = JSON.parse(body.answers)
          } catch (err) {}
          break;

        case 'question-group':
          targetId = self.state.currentTarget.questionGroupId;
          url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.state.choicesGuideId  }/questiongroup`;
          body = {
            title: self.state.currentTarget.title,
            description: self.state.currentTarget.description,
            answerDimensions: self.state.currentTarget.answerDimensions,
            seqnr: self.state.currentTarget.seqnr,
          };
          break;

        case 'question':
          targetId = self.state.currentTarget.questionId;
          url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.state.choicesGuideId  }/questiongroup/${  self.state.currentTarget.questionGroupId  }/question`;
          body = {
            title: self.state.currentTarget.title,
            description: self.state.currentTarget.description,
            images: self.state.currentTarget.images,
            minLabel: self.state.currentTarget.minLabel,
            maxLabel: self.state.currentTarget.maxLabel,
            type: self.state.currentTarget.type,
            dimensions: self.state.currentTarget.dimensions,
            values: self.state.currentTarget.values,
            seqnr: self.state.currentTarget.seqnr,
          };
          try {
            body.values = JSON.parse(body.values)
          } catch (err) {}
          break;

        default:
      }
      url += targetId ? `/${  targetId}` : '';

      let headers = OpenStadComponentLibs.api.getHeaders(self.config);
      let method = targetId ? 'PUT' : 'POST';

      console.log(body);

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

          // if (typeof self.config.onSubmit == 'function') {
          //   self.config.onSubmit({ description: self.state.description });
          // }
          //
          // self.setState({ description: '' }, () => {
          //   if (self.config.argumentId) {
          //     var event = new window.CustomEvent('reactionEdited', { detail: json });
          //     document.dispatchEvent(event);
          //   } else {
          //     var event = new window.CustomEvent('newReactionStored', { detail: json });
          //     document.dispatchEvent(event);
          //   }
          // });

          self.fetchData();

        })
        .catch(function(error) {
          error.then(function(messages) { return console.log(messages);} );
          self.setState({ busy: false });
        });

    });
  }

  deleteElement({what, questionGroupId, choiceId, questionId, title}) {

    let self = this;
    if (!confirm("Je gaat " + what + " " + title + " verwijderen. Weet je het zeker?")) return;

    let url;
    switch (what) {

      case 'question-group':
        url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.state.choicesGuideId  }/questiongroup/${  questionGroupId  }`;
        break;

      case 'choice':
        url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.state.choicesGuideId  }/questiongroup/${  questionGroupId  }/choice/${ choiceId }`;
        break;

      case 'question':
        url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.state.choicesGuideId  }/questiongroup/${  questionGroupId  }/question/${ questionId }`;
        break;

      default:
    }
    
    let headers = OpenStadComponentLibs.api.getHeaders(self.config);
    fetch(url, {
      method: 'DELETE',
      headers,
    })
      .then( function(response) {
        if (response.ok) {
          return response.json();
        }
        throw response.text();
      })
      .then(function(json) {
        self.fetchData();
      })
      .catch(function(error) {
        error.then(function(messages) { return console.log(messages);} );
        self.setState({ busy: false });
      });
    
  }
  
  render() {

    let self = this;

    let title = null;
    let formfieldsHTML = null;
    let overviewHTML = null;
    let backButtonHTML = <button onClick={() => { self.setCurrentForm({ what: 'choices-guide' }); }}>Terug</button>;
    let submitButtonHTML = <button onClick={event => self.submitForm()}>Submit</button>;
    switch (self.state.currentTarget.what) {

      case 'choices-guide':
        title = 'Bewerk keuzewijzer';
        formfieldsHTML = (<ChoicesGuideForm config={this.config} currentTarget={self.state.currentTarget} onChange={self.handleFieldChange} ref={el => { self.formfields = el; }}/>);
        overviewHTML = (<Overview questionGroups={self.state.questionGroups} setCurrentForm={self.setCurrentForm} deleteElement={self.deleteElement} ref={el => { self.formfields = el; }}/>);
        backButtonHTML =
          <button onClick={() => { if (self.onFinished) self.onFinished(); }}>Terug</button>
        ;
        break;

      case 'choice':
        title = 'Bewerk Keuze';
        formfieldsHTML = (<ChoiceForm config={this.config} currentTarget={self.state.currentTarget} onChange={self.handleFieldChange} ref={el => { self.formfields = el; }}/>);
        break;

      case 'question-group':
        title = 'Bewerk Vragengroep';
        formfieldsHTML = (<QuestionGroupForm config={this.config} currentTarget={self.state.currentTarget} onChange={self.handleFieldChange} ref={el => { self.formfields = el; }}/>);
        break;

      case 'question':
        title = `Bewerk Vraag ${  self.state.currentTarget.questionId}`;
        formfieldsHTML = (<QuestionForm config={this.config} currentTarget={self.state.currentTarget} onChange={self.handleFieldChange} ref={el => { self.formfields = el; }}/>);
        break;

      default:
        backButtonHTML =
          <button onClick={() => { if (self.onFinished) self.onFinished(); }}>Terug</button>
        ;
        submitButtonHTML = null;
    }

    return (
      <div id={this.divId} className={`osc-form${this.state.busy ? ' osc-busy' : ''}`}>
        <h2>{title}</h2>

        {formfieldsHTML}
        {overviewHTML}

        <br/><br/>

        {backButtonHTML}
        {submitButtonHTML}

      </div>
    );

  }

}