import merge from 'merge';

import OpenStadComponentLibs from '../../libs/index.jsx';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentChoice from './choice.jsx';

'use strict';

export default class OpenStadComponentChoices extends OpenStadComponent {

  constructor(props) {

    super(props);

    this.defaultConfig = {
      type: 'default',
      sticky: null,
      withPercentage: false,
      minLabel: null,
      maxLabel: null,
    };

    this.config = merge.recursive(this.defaultConfig, this.config, props.config || {});

    this.choiceElements = [];

    this.state = {
      title: 'Je hebt nog geen keuze gemaakt',
      scores: props.scores,
    };

  }

  componentDidMount(prevProps, prevState) {

    let self = this;

  }

  calculateScores(answers) {
    let self = this;

    let scores = {};
    self.choiceElements.forEach((choiceElement) => {
      scores[choiceElement.config.divId] = choiceElement.calculateScore(answers);
    });

    self.setState({scores});
    return scores;

  }

  getPreferedChoice() {
    //let scores = this.calculateScores();
    let self = this;
    let scores = self.state.scores;
    switch (self.config.type) {
      case 'plane':
        // dan zou er maar 1 choice moeten zijn
        return self.choiceElements[0];
        break;

      default:
        let sorted = Object.keys(scores).sort( (a,b) => scores[b].x - scores[a].x );
        let first = sorted[0];
        return self.choiceElements.find( elem => elem && elem.config.divId == first );
    }


  }

  render() {

    let self = this;

    return (
      <ul className="osc-choices">
        { Object.keys(self.props.choices).map((key, i) => {
          let choice = self.props.choices[key];
          return (<OpenStadComponentChoice config={{ divId:`choice-${choice.id}`,  ...self.config }} data={choice} score={ self.props.scores && self.props.scores[`choice-${choice.id}`] } answerDimensions={self.props.answerDimensions} key={`choice-${choice.id}`} ref={function(el) { self.choiceElements[i] = el;}}/>);
        })}
      </ul>
    );

  }

}
