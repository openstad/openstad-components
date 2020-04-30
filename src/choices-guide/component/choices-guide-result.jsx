import merge from 'merge';
import fingerprint from 'fingerprintjs2';

import OpenStadComponentLibs from '../../libs/index.jsx';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentChoices from './choices.jsx';
import OpenStadComponentChoicePlane from './choice-plane.jsx';

import fetchChoicesGuide from '../lib/fetch.js'

'use strict';

export default class OpenStadComponentChoicesGuideResult extends OpenStadComponent {

  constructor(props) {

    super(props);

    this.defaultConfig = {
      type: 'default',
    };

    this.config = merge.recursive(this.defaultConfig, this.config, props.config || {});

    let allValues = OpenStadComponentLibs.sessionStorage.get('osc-choices-guide.values') || {};
    let allScores = OpenStadComponentLibs.sessionStorage.get('osc-choices-guide.scores') || {};
    this.state = {
      title: '',
      answers: allValues[ this.config.choicesGuideId ],
      scores: allScores[ this.config.choicesGuideId ],
    };

  }

  componentDidMount(prevProps, prevState) {
    this.fetchData();
  }

  fetchData() {

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
    let scores = self.choicesElement.calculateScores(self.state.answers);

    let choicesTitle = '...';
    if ( self.choicesElement ) {
      let choiceElement = self.choicesElement.getPreferedChoice();
      console.log(self.state.scores[choiceElement.config.divId]);
      if (choiceElement) {
        let name = choiceElement.getTitle(self.state.scores[choiceElement.config.divId], true);
        if (name) {
          choicesTitle = 'Jouw voorkeur is ' + name;
        } else {
          choicesTitle = 'Je staat precies tussen meerdere scenario\'s in'
        }
      }
      self.setState({ title: choicesTitle })
      self.submitResult()
    }
    
  }

  submitResult() {

    let self = this;

    fingerprint.get(fingerprintComponents => {
      
      let url = `${self.config.api && self.config.api.url }/api/site/${  self.config.siteId  }/choicesguide/${  self.config.choicesGuideId  }/result`;
      let headers = OpenStadComponentLibs.api.getHeaders(self.config);
      let body = {
        result: self.state.answers,
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

  render() {

    let self = this;
    let data = self.props && self.props.data || {};

    let choices = self.state.choices;
    let answerDimensions = 1;
    let questionGroup;
    if (self.state.questionGroups) {
      questionGroup = self.state.questionGroups.find( group => group.id == self.config.questionGroupId );
      if (questionGroup) {
        questionGroup.values = self.state.values || {};
        if (questionGroup && questionGroup.choices) {
          choices = questionGroup.choices;
          answerDimensions = questionGroup.answerDimensions;
        }
      }
    }

    let choicesHTML = null;
    if (choices) {

      switch (self.config.choices.type) {

        case 'plane':
          let images = choices && choices[0] && choices[0].images;
          if ( images && images.length > 1 ) { choices[0].images = choices && choices[0] && choices[0].images[1]; }
          choicesHTML = <OpenStadComponentChoices config={{ ...self.config.choices, sticky: false, size: 630, }} scores={self.state.scores} answerDimensions={answerDimensions} scores={{...self.state.scores}} choices={[...choices]} firstAnswerGiven={true} ref={function(el) { self.choicesElement = el; }} key='choices'/>;
          break;

        default:
          choicesHTML = <OpenStadComponentChoices config={{ ...self.config.choices, sticky: false, size: 630, }} scores={self.state.scores} answerDimensions={answerDimensions} scores={{...self.state.scores}} choices={[...choices]} firstAnswerGiven={true} ref={function(el) { self.choicesElement = el; }} key='choices'/>;

      }
    }

    return (
      <div className="osc-choices-guide">
        <div className="osc-result">
          <div className="osc-result-content">

            <h4>{self.state.title}</h4>
            <div className="osc-choices-container">
              {choicesHTML}
            </div>
          </div>
        </div>
      </div>
    );

  }

}
