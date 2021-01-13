'use strict';

import merge from 'merge';
import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentQuestionGroup from './question-group.jsx';
import OpenStadComponentChoices from './choices.jsx';
import OpenStadComponentChoicesGuideForm from './edit-form.jsx';
import OpenStadComponentLightbox from '../../lightbox/index.jsx';
import OpenStadComponentPreviousNextButtonBlock from '../../previous-next-button-block/index.jsx';
import OpenStadComponentUserPreference from './user-preference.jsx';
// import OpenStadComponentChoicesGuideResult from './result.jsx';

import fetchChoicesGuide from '../lib/fetch.js'

export default class OpenStadComponentChoicesGuide extends OpenStadComponent {

  constructor(props) {

    super(props, {
      siteId: null,
      loginUrl: null,
      noOfQuestionsToShow: 1,
      api: {
        url: null
      },
      sticky: null,
      choices: {
        title: {
          noPreferenceYet: 'Je hebt nog geen keuze gemaakt',
          preference: '<b>Jouw voorkeur:</b>{preferredChoice}',
          inBetween: 'Je staat precies tussen meerdere voorkeuren in'
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

    let allValues = OpenStadComponentLibs.sessionStorage.get('osc-choices-guide.values') || {};
    let allScores = OpenStadComponentLibs.sessionStorage.get('osc-choices-guide.scores') || {};
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
    
    self.fetchData();

  }

  fetchData() {

    self = this;

    let self = this;
    fetchChoicesGuide({ config: self.config })
      .then((data) => {
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
    });


  }

  showEditForm() {
    this.setState({ status: 'edit' });
  }

  hideEditForm() {
    let allValues = OpenStadComponentLibs.sessionStorage.get('osc-choices-guide.values') || {};
    let allScores = OpenStadComponentLibs.sessionStorage.get('osc-choices-guide.scores') || {};
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

    self.userPreference && self.userPreference.calculateScores();    

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

    self.userPreference && self.userPreference.calculateScores();
    
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
    let answers = merge(this.state.values || {}, this.questionGroupElement.getAnswers());
    let scores = this.choicesElement.calculateScores(answers);
    this.userPreference && this.userPreference.calculateScores(answers); //xxx
    this.setState({ scores, firstAnswerGiven: Object.keys(answers).length > 0 }, () => {
      let allValues = OpenStadComponentLibs.sessionStorage.get('osc-choices-guide.values') || {};
      allValues[this.config.choicesGuideId] = answers;
      OpenStadComponentLibs.sessionStorage.set('osc-choices-guide.values', allValues);
      let allScores = OpenStadComponentLibs.sessionStorage.get('osc-choices-guide.scores') || {};
      allScores[this.config.choicesGuideId] = scores;
      OpenStadComponentLibs.sessionStorage.set('osc-choices-guide.scores', allScores);
    })
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
    if (images) {
      if (!Array.isArray(images)) images = [images];
      let image = images[0];
      imageHTML = (
        <img className="osc-image" src={image.src}/>
      );
    }

    let contentHTML = null;
    if (self.state.status == 'edit') {
      contentHTML = (
        <div className="osc-choices-guide-content">
          <OpenStadComponentChoicesGuideForm config={self.config} onFinished={self.hideEditForm} data={{ ...self.state }}/>
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


        console.log(self.state);

        let choicesTitle = '<b>Je hebt nog geen keuze gemaakt</b>';

        if ( self.state.firstAnswerGiven && self.choicesElement ) {
          let choiceElement = self.choicesElement.getPreferedChoice();
          choicesTitle = self.config.choices.title.preference.replace('\{preferredChoice\}', choiceElement && choiceElement.getTitle(self.state.scores[choiceElement.config.divId]) || choicesTitle);
        } else {
          choicesTitle = self.config.choices.title.noPreferenceYet;
        }

        choicesHTML = (
          <div id={'osc-choices-container-' + this.divId} className={`osc-choices-container osc-accordeon osc-closed${ self.config.choices.type == 'hidden' ? ' osc-hidden' : '' }`} ref={el => { self.choicesAccordeon = el; }}>
            <div onClick={() => { if( this.choicesAccordeon.className.match(' osc-closed') ) { this.choicesAccordeon.className = this.choicesAccordeon.className.replace(' osc-closed', ' osc-open'); } else { this.choicesAccordeon.className = this.choicesAccordeon.className.replace(' osc-open', ' osc-closed'); } }} className="osc-accordeon-button" dangerouslySetInnerHTML={{ __html: choicesTitle }}></div>
            <div className="osc-accordeon-content">
              <OpenStadComponentChoices config={{ ...self.config.choices, startWithAllQuestionsAnswered: this.config.startWithAllQuestionsAnswered }} choices={[...choices]} scores={{...self.state.scores}} firstAnswerGiven={ self.state.firstAnswerGiven ? true : false } ref={function(el) { self.choicesElement = el; }} key='choices'/>
            </div>
          </div>
        );

        let questionGroupHTML = (
          <OpenStadComponentQuestionGroup config={ { ...self.config, liveUpdatesFunction: self.liveUpdates } } data={ questionGroup } ref={function(el) { self.questionGroupElement = el; }} key={`group${self.state.currentQuestionsGroupIndex}`}/>
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
          console.log(previousLabel, previousAction);
          previousNextButtonsHTML = <OpenStadComponentPreviousNextButtonBlock previousAction={previousAction} previousUrl={previousUrl} previousLabel={previousLabel} nextAction={nextAction} nextUrl={nextUrl} nextLabel={nextLabel}/>
        }

        // ----------------------------------------------------------------------------------------------------

        let userPreferenceHTML = <OpenStadComponentUserPreference config={self.config} choices={self.state.choices} questionGroup={self.state.questionGroups[self.state.currentQuestionGroupIndex]} ref={function(el) { self.userPreference = el; }}/>
        
        // ----------------------------------------------------------------------------------------------------
        
        contentHTML =  (
          <div className="osc-choices-guide-content">
            {editButtonHTML}
            {choicesHTML}
            {userPreferenceHTML}
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
