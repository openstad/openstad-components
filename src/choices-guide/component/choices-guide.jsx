import merge from 'merge';
import fingerprint from 'fingerprintjs2';

import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentQuestionGroup from './question-group.jsx';
import OpenStadComponentChoices from './choices.jsx';
import OpenStadComponentChoicesGuideForm from './edit-form.jsx';
import OpenStadComponentChoicesGuideResult from './result.jsx';

'use strict';

export default class OpenStadComponentChoicesGuide extends OpenStadComponent {

  constructor(props) {

    super(props);

    let self = this;

    self.id = props.id || `osc-choices-guide-${  parseInt( 1000000 * Math.random() )}`;

    self.defaultConfig = {
      siteId: null,
      loginUrl: null,
      noOfQuestionsToShow: 1,
      api: {
        url: null
      },
      sticky: null,
      result: {},
    };

    self.config = merge.recursive(self.defaultConfig, self.config, props.config || {});

    self.state = {
      editMode: false,
      title: 'Loading....',
      values: undefined,
      questionGroups: [],
      choices: [],
      currentQuestionGroupIndex: undefined,
      currentQuestion: undefined,
      status: 'init',
    };

    self.liveUpdates = self.liveUpdates.bind(this);
    self.hideEditForm = self.hideEditForm.bind(this);
    
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
        state.images = json.images;
        state.title = json.title;
        state.description = json.description;
        state.choices = json.choices || [];
        state.questionGroups = json.questiongroups || [];
        state.status = 'active';
        self.setState(state, () => {
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

    // tmp
    // state.result = { "8": { "x": "77", "y": "77" }, "9": { "x": "23", "y": "23" }, "10": { "x": "81", "y": "81" }, "11": { "x": "83", "y": "83" }, "12": { "x": 0, "y": 0 } };
    // state.status = 'result';
    // return self.setState(state);
    
    state.currentQuestionGroupIndex = 0;
    self.setState(state, () => {
      self.liveUpdates();
    });

  }

  showEditForm() {
    this.setState({ editMode: true });
  }

  hideEditForm() {
    this.setState({
      editMode: false,
      title: 'Loading....',
      values: {},
      questionGroups: [],
      choices: [],
      currentQuestionGroupIndex: undefined,
      status: 'init',
    }, function() {
      this.fetchData()
    });
  }

  gotoNextQuestion() {

    let self = this;

    let state = {};
    state.values = Object.assign(self.state.values || {}, self.questionGroupElement.getAnswers());
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
    state.values = Object.assign(this.state.values || {}, this.questionGroupElement.getAnswers());
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
      state.values = Object.assign(state.values || {}, this.questionGroupElement.getAnswers());
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
    let values = Object.assign(self.state.values || {}, self.questionGroupElement.getAnswers());
    let preferedChoice = self.choicesElement.getPreferedChoice();
    self.setState({
      status: 'result',
      values,
      result: values,
      preferedChoice,
    }, () => {
      self.submitResult()
      window.scrollTo(0,0)
    });
  }

  submitResult() {

    let self = this;

    fingerprint.get(fingerprintComponents => {
      
      let url = `${self.config.api && self.config.api.url }/api/site/${  self.config.siteId  }/choicesguide/${  self.config.choicesGuideId  }/result`;
      let headers = OpenStadComponentLibs.api.getHeaders(self.config);
      let body = {
        result: self.state.result,
        userFingerprint: btoa(fingerprintComponents),
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
        })
        .catch(function(error) {
          error.then(function(messages) { return console.log(messages);} );
        });

    })

  }

  liveUpdates() {
    let answers = Object.assign(this.state.values || {}, this.questionGroupElement.getAnswers());
    let scores = this.choicesElement.calculateScores(answers);
    this.setState({ scores, firstAnswerGiven: Object.keys(answers).length > 0 })
  }

  render() {

    let self = this;

    let choices = self.state.choices;
    let answerDimensions = 1;
    let questionGroup;
    if (self.state.currentQuestionGroupIndex >= 0) {
      questionGroup = self.state.questionGroups[ self.state.currentQuestionGroupIndex ];
      if (questionGroup) {
        questionGroup.values = self.state.values || {};
        if (questionGroup && questionGroup.choices) {
          choices = questionGroup.choices;
          answerDimensions = questionGroup.answerDimensions;
        }
      }
    }

    let imageHTML = null;
    let images = self.state.images;
    if (images) {
      if (!Array.isArray(images)) images = [images];
      let image = images[0];
      imageHTML = (
        <img className="osc-image" src={image.src}/>
      );
    }

    let contentHTML = null;
    if (self.state.editMode) { // todo: moet een status worden

      contentHTML = (
        <div className="osc-choices-guide-content">
          <OpenStadComponentChoicesGuideForm config={self.config} onFinished={self.hideEditForm} data={{ ...self.state }}/>
        </div>
      );

    } else if (self.state.status == 'result') {

      let previousButtonHTML = <div className="osc-previous-button" onClick={() => {self.gotoPreviousQuestion();}}>Terug</div>;
      
      let nextButtonHTML = null;
      if (self.config.afterUrl) {
        nextButtonHTML = <div className="osc-next-button" onClick={() => { document.location.href = `${self.config.afterUrl}` }}>Volgende</div>
      }

      let choicesHTML = <OpenStadComponentChoices config={{ ...self.config.choices, sticky: false, size: 630, }} scores={{...self.state.scores}} choices={[...choices]} answerDimensions={answerDimensions} firstAnswerGiven={ self.state.firstAnswerGiven ? true : false } ref={function(el) { self.choicesElement = el; }} key='choices'/>;

      contentHTML = (
        <div className="osc-choices-guide-content">
          <OpenStadComponentChoicesGuideResult config={{ ...self.config.result, type: self.config.choices.type }} data={{ choices: self.choices, result: self.state.result.values, preferedChoice: self.state.preferedChoice }} onFinished={self.hideEditForm} data={{ ...self.state }}>
            {choicesHTML}
          </OpenStadComponentChoicesGuideResult>
          <div className="osc-nav-bar">
            {previousButtonHTML}
            {nextButtonHTML}
          </div>
        </div>
      );

    } else {

      let introHTML = null;
      if (self.state.status == 'init') {
        contentHTML = (
          <div className="osc-choices-guide-content">
            <div className="osc-intro">Laden...</div>
          </div>
        );
      } else {

        let choicesHTML = null;
        choicesHTML = <OpenStadComponentChoices config={self.config.choices} choices={[...choices]} scores={{...self.state.scores}} answerDimensions={answerDimensions} firstAnswerGiven={ self.state.firstAnswerGiven ? true : false } ref={function(el) { self.choicesElement = el; }} key='choices'/>;

        let questionGroupHTML = (
          <div>
            <OpenStadComponentQuestionGroup config={ { noOfQuestionsToShow: this.config.noOfQuestionsToShow, liveUpdatesFunction: self.liveUpdates } } data={ questionGroup } ref={function(el) { self.questionGroupElement = el; }} key={`group${self.state.currentQuestionsGroupIndex}`}/>
          </div>
        );

        let editButtonHTML = null;
        if (self.config.user && self.config.user.role && self.config.user.role == 'admin') {
          editButtonHTML = <button className="osc-choices-guide-editbutton osc-edit" onClick={event => self.showEditForm()}>Bewerk keuzewijzer</button>;
        }

        let previousButtonHTML = null;
        if ( self.state.status == 'result' || (  self.state.currentQuestionGroupIndex > 0 || self.state.currentQuestion > 0 ) ) {
          previousButtonHTML = <div className="osc-previous-button" onClick={() => {self.gotoPreviousQuestion();}}>Terug</div>
        } else if (self.config.beforeUrl) {
          previousButtonHTML = <div className="osc-previous-button" onClick={() => { document.location.href = `${self.config.beforeUrl}` }}>Introductie</div>
        }
        
        let nextButtonHTML = null;
        if (self.state.status != 'init' && self.state.status != 'result') {
          nextButtonHTML = <div className="osc-next-button" onClick={() => {self.gotoNextQuestion();}}>Volgende</div>
        }
        
        contentHTML =  (
          <div className="osc-choices-guide-content">
            {editButtonHTML}
            {choicesHTML}
            {questionGroupHTML}
            <div className="osc-nav-bar">
              {previousButtonHTML}
              {nextButtonHTML}
            </div>
          </div>
        );
      }

    }

    return (
        <div id={this.divId} className="osc-choices-guide">
          {imageHTML}
          {contentHTML}
        </div>
      );


  }

}
