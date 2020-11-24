'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentForms from '../../forms/index.jsx';

// todo: het is nu 1 form met switches; uit elkaar trekken in losse forms is netter

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
        currentTarget.images = this.state.images ? JSON.stringify(this.state.images) : '';
        break;

      case 'choice':
        if (currentTarget.questionGroupId) {
          questionGroup = this.state.questionGroups.find(group => group.id == currentTarget.questionGroupId) || {};
          choice = questionGroup.choices && questionGroup.choices.find(choices => choices.id == currentTarget.choiceId) || {};
        } else {
          choice = this.state.choices.find(choices => choices.id == currentTarget.choicesId) || {};
        }
        currentTarget.title = choice.title;
        currentTarget.description = choice.description;
        currentTarget.images = choice.images ? JSON.stringify(choice.images) : '';
        currentTarget.answers = choice.answers ? JSON.stringify(choice.answers) : '';
        currentTarget.seqnr = choice.seqnr || 0;
        break;

      case 'question-group':
        questionGroup = this.state.questionGroups.find(group => group.id == currentTarget.questionGroupId) || {};
        currentTarget.answerDimensions = questionGroup.answerDimensions;
        currentTarget.title = questionGroup.title;
        currentTarget.description = questionGroup.description;
        currentTarget.images = questionGroup.images ? JSON.stringify(questionGroup.images) : '';
        currentTarget.seqnr = questionGroup.seqnr || 0;
        break;

      case 'question':
        questionGroup = this.state.questionGroups.find(group => group.id == currentTarget.questionGroupId) || {};
        question = questionGroup.questions && questionGroup.questions.find(question => question.id == currentTarget.questionId) || {};
        currentTarget.title = question.title;
        currentTarget.description = question.description;
        currentTarget.images = question.images ? JSON.stringify(question.images) : '';
        currentTarget.minLabel = question.minLabel;
        currentTarget.maxLabel = question.maxLabel;
        currentTarget.type = question.type;
        currentTarget.values = question.values ? JSON.stringify(question.values) : '';
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
            answers: self.state.currentTarget.answers ? JSON.parse(self.state.currentTarget.answers) : '',
            seqnr: self.state.currentTarget.seqnr,
          };
          break;

        case 'question-group':
          targetId = self.state.currentTarget.questionGroupId;
          url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/choicesguide/${  self.state.choicesGuideId  }/questiongroup`;
          body = {
            answerDimensions: self.state.currentTarget.answerDimensions,
            title: self.state.currentTarget.title,
            description: self.state.currentTarget.description,
            images: self.state.currentTarget.images,
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
            values: self.state.currentTarget.values ? JSON.parse(self.state.currentTarget.values) : '',
            seqnr: self.state.currentTarget.seqnr,
          };
          break;

        default:
      }
      url += targetId ? `/${  targetId}` : '';

      let headers = OpenStadComponentLibs.api.getHeaders(self.config);
      let method = targetId ? 'PUT' : 'POST';

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
        formfieldsHTML =
          <div className="openstad-form">
            <h3>Titel</h3>
            <OpenStadComponentForms.InputWithCounter key="x1" config={{ inputType: 'input', minLength: 1, maxLength: 1000 }} value={self.state.currentTarget.title} onChange={ data => self.handleFieldChange({ title: data.value }) } ref={el => { self.titleField = el; }}/>
            <h3>Beschrijving</h3>
            <OpenStadComponentForms.InputWithCounter key="x2" config={{ inputType: 'textarea', minLength: 1, maxLength: 1000 }} value={self.state.currentTarget.description} onChange={ data => self.handleFieldChange({ description: data.value }) } ref={el => self.descriptionField = el}/>
            <h3>Afbeeldingen</h3>
            <OpenStadComponentForms.Textarea key="i1" config={{}} value={self.state.currentTarget.images} onChange={ data => self.handleFieldChange({ images: data.value }) } ref={el => self.imagesField = el}/>
          </div>
        ;
        overviewHTML =
          <div className="openstad-form">
            <h4>Vraaggroepen</h4>
            { Object.keys(self.state.questionGroups).map((key, i) => {

              let questionGroup = self.state.questionGroups[key];

              let questionsHTML =
                  <ul>
                    { Object.keys(questionGroup.questions).map((key, i) => {
                      let question = questionGroup.questions[key];
                      return (
                        <li>
                          ({question.id}) - {question.title} - {question.seqnr}
                          -
                          <a href="#" onClick={event => self.setCurrentForm({ what: 'question', questionGroupId: questionGroup.id, questionId: question.id })}>
                            Bewerk
                          </a>
                          -
                          <a href="#" onClick={event => self.deleteElement({ what: 'question', questionGroupId: questionGroup.id, questionId: question.id, title: question.title})}>
                            Verwijder
                          </a>
                        </li>
                      );
                    })}
                    <li>
                      <a href="#" onClick={event => self.setCurrentForm({ what: 'question', questionGroupId: questionGroup.id })}>
                        Nieuwe vraag
                      </a>
                    </li>
                  </ul>
                  ;

              let choicesHTML =
                  <ul>
                    { Object.keys(questionGroup.choices).map((key, i) => {
                      let choice = questionGroup.choices[key];
                      return (
                        <li>{choice.title} - {choice.seqnr}
                          - <a href="#" onClick={event => self.setCurrentForm({ what: 'choice', questionGroupId: questionGroup.id, choiceId: choice.id })}>Bewerk</a>
                          - <a href="#" onClick={event => self.deleteElement({ what: 'choice', questionGroupId: questionGroup.id, choiceId: choice.id, title: choice.title})}>Verwijder</a>
                        </li>
                      );
                    })}
                    <li><a href="#" onClick={event => self.setCurrentForm({ what: 'choice', questionGroupId: questionGroup.id })}>Nieuwe keuze</a></li>
                  </ul>;


              let deleteButton;
              if (Object.keys(questionGroup.choices).length == 0 && Object.keys(questionGroup.questions).length == 0) {
                deleteButton = (<a href="#" onClick={event => self.deleteElement({ what: 'question-group', questionGroupId: questionGroup.id, title: questionGroup.title})}>Verwijder</a>);
              }

              return (
                <div>
                  {questionGroup.title} - {questionGroup.seqnr}
                  - <a href="#" onClick={event => self.setCurrentForm({ what: 'question-group', questionGroupId: questionGroup.id })}>Bewerk</a>
                  - {deleteButton}
                  {questionsHTML}
                  {choicesHTML}
                </div>
              );
            })}
            <a href="#" onClick={event => self.setCurrentForm({ what: 'question-group' })}>Nieuwe groep</a>
          </div>
        ;
        backButtonHTML =
          <button onClick={() => { if (self.onFinished) self.onFinished(); }}>Terug</button>
        ;
        break;

      case 'choice':
        title = 'Bewerk Keuze';
        formfieldsHTML =
          <div>
            <h3>Titel</h3>
            <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 1, maxLength: 1000 }} value={self.state.currentTarget.title} onChange={ data => self.handleFieldChange({ title: data.value }) } ref={el => self.titleField = el}/>
            <h3>Beschrijving</h3>
            <OpenStadComponentForms.InputWithCounter config={{ inputType: 'textarea', minLength: 1, maxLength: 1000 }} value={self.state.currentTarget.description} onChange={ data => self.handleFieldChange({ description: data.value }) } ref={el => self.descriptionField = el}/>
            <h3>Afbeeldingen</h3>
            <OpenStadComponentForms.Textarea key="i2" config={{}} value={self.state.currentTarget.images} onChange={ data => self.handleFieldChange({ images: data.value }) } ref={el => self.imagesField = el}/>
            <h3>Antwoorden</h3>
            <OpenStadComponentForms.Text config={{}} value={self.state.currentTarget.answers} onChange={ data => self.handleFieldChange({ answers: data.value }) } ref={el => self.answersField = el}/>
            <h3>Volgorde nummer</h3>
            <OpenStadComponentForms.Text config={{}} value={self.state.currentTarget.seqnr} onChange={ data => self.handleFieldChange({ seqnr: data.value }) } ref={el => self.seqnrField = el}/>
          </div>
        ;
        break;

      case 'question-group':
        title = 'Bewerk Vragengroep';
        formfieldsHTML =
          <div className="openstad-form">
            <h3>Titel</h3>
            <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 1, maxLength: 1000 }} value={self.state.currentTarget.title} onChange={ data => self.handleFieldChange({ title: data.value }) } ref={el => self.titleField = el}/>
            <h3>Beschrijving</h3>
            <OpenStadComponentForms.InputWithCounter config={{ inputType: 'textarea', minLength: 1, maxLength: 1000 }} value={self.state.currentTarget.description} onChange={ data => self.handleFieldChange({ description: data.value }) } ref={el => self.descriptionField = el}/>
            <h3>Afbeeldingen</h3>
            <OpenStadComponentForms.Textarea key="i3" config={{}} value={self.state.currentTarget.images} onChange={ data => self.handleFieldChange({ images: data.value }) } ref={el => self.imagesField = el}/>
            <h3>Aantal dimensies in antwoorden</h3>
            <select key={`dezemoetnogweg2${  self.state.currentTarget.questionGroupId}`} value={self.state.currentTarget.answerDimensions} onChange={ () => self.handleFieldChange({ answerDimensions: self.answerDimensionsField.value }) } ref={el => self.answerDimensionsField = el}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <h3>Volgorde nummer</h3>
            <OpenStadComponentForms.Text config={{}} value={self.state.currentTarget.seqnr} onChange={ data => self.handleFieldChange({ seqnr: data.value }) } ref={el => self.seqnrField = el}/>
          </div>
        ;
        break;

      case 'question':
        title = `Bewerk Vraag ${  self.state.currentTarget.questionId}`;
        formfieldsHTML =
          <div className="openstad-form">
            <h3>Titel</h3>
            <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 1, maxLength: 1000 }} value={self.state.currentTarget.title} onChange={ data => self.handleFieldChange({ title: data.value }) } ref={el => self.titleField = el}/>
            <h3>Beschrijving</h3>
            <OpenStadComponentForms.InputWithCounter config={{ inputType: 'textarea', minLength: 1, maxLength: 1000 }} value={self.state.currentTarget.description} onChange={ data => self.handleFieldChange({ description: data.value }) } ref={el => self.descriptionField = el}/>
            <h3>Afbeeldingen</h3>
            <OpenStadComponentForms.Textarea key="i4" config={{}} value={self.state.currentTarget.images} onChange={ data => self.handleFieldChange({ images: data.value }) } ref={el => self.imagesField = el}/>
            <h3>Label minimale waarde</h3>
            <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 1, maxLength: 1000 }} value={self.state.currentTarget.minLabel} onChange={ data => self.handleFieldChange({ minLabel: data.value }) } ref={el => self.minLabelField = el}/>
            <h3>Label maximale waarde</h3>
            <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', maxLength: 1, maxLength: 1000 }} value={self.state.currentTarget.maxLabel} onChange={ data => self.handleFieldChange({ maxLabel: data.value }) } ref={el => self.maxLabelField = el}/>
            <h3>Type</h3>
            <select key={`dezemoetnogweg${  self.state.currentTarget.questionGroupId}`} value={self.state.currentTarget.type} onChange={ () => self.handleFieldChange({ type: self.typeField.value }) } ref={el => self.typeField = el}>
              <option value="continuous">continue</option>
              <option value="a-to-b">van a naar b</option>
              <option value="enum-buttons">multiple choice - buttons</option>
              <option value="enum-radio">multiple choice - radio</option>
            </select>
            <h3>Waarden</h3>
            <OpenStadComponentForms.Textarea config={{}} value={self.state.currentTarget.values} onChange={ data => self.handleFieldChange({ values: data.value }) } ref={el => self.valuesField = el}/>
            <h3>Volgorde nummer</h3>
            <OpenStadComponentForms.Text config={{}} value={self.state.currentTarget.seqnr} onChange={ data => self.handleFieldChange({ seqnr: data.value }) } ref={el => self.seqnrField = el}/>
          </div>
        ;
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
        <br/>
        <br/>
        {backButtonHTML}
        {submitButtonHTML}

        {overviewHTML}

      </div>
    );

  }

}
