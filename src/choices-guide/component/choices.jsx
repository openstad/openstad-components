'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentChoice from './choice.jsx';

export default class OpenStadComponentChoices extends OpenStadComponent {

  constructor(props) {

    super(props, {
      type: 'default',
      withPercentage: false,
      minLabel: null,
      maxLabel: null,
    });

    this.choiceElements = [];

    this.state = {
      title: 'Je hebt nog geen keuze gemaakt',
      scores: props.scores,
      planePos: { x: 50, y: 50 },
    };

  }

  componentDidMount(prevProps, prevState) {

    let self = this;

    self.choicesClickListener = function(event) {
      self.setState({ random: Math.random() }); // force redraw
    }
		document.addEventListener('osc-choices-click', self.choicesClickListener);

  }

  componentWillUnmount() {
		document.removeEventListener('osc-choices-click', self.choicesClickListener);
  }

  calculateScores(answers) {

    let self = this;

    let scores = {};
    self.choiceElements.forEach((choiceElement) => {
      scores[choiceElement.props.data.id] = choiceElement.calculateScore(answers);
    });
 
    // for plane: calculate position
    let planePos = { x: 50, y: 50 };
    if (self.config.type) {

      // the position of the dot is the average of the given answers
      let keys = Object.keys(answers);
      if (keys.length) {
        planePos = { x: 0, y: 0 };
        let lengths = { x: 0, y: 0, z: 0 };
        keys.forEach((key) => {
          let entry = answers[key];
          ['x','y','z'].forEach((dimension) => {
            if ( typeof entry[dimension] != 'undefined' ) {
              planePos[dimension] += parseInt(entry[dimension]) || 0;
              lengths[dimension]++
            }
          });        
        });
        planePos.x = lengths.x ? parseInt(planePos.x / lengths.x) : undefined;
        planePos.y = lengths.y ? parseInt(planePos.y / lengths.y) : undefined;
      }

    }

    self.setState({answers, scores, planePos});
    return {answers, scores, planePos};

  }

  getPreferedChoice({ scores, planePos }) {

    let self = this;
    scores = scores || self.state.scores;
    switch (self.config.type) {
      case 'plane':
        planePos = planePos || self.state.planePos;
        // hardcoded voor nu, maar kan dit niet generiek over alle typen?
        if ( planePos.x < 50 && planePos.y < 50 ) return self.choiceElements[0];
        if ( planePos.x > 50 && planePos.y < 50 ) return self.choiceElements[1];
        if ( planePos.x < 50 && planePos.y > 50 ) return self.choiceElements[2];
        if ( planePos.x > 50 && planePos.y > 50 ) return self.choiceElements[3];
        return null;
        break;

      default:
        let sorted = Object.keys(scores).sort( (a,b) => scores[b].x - scores[a].x );
        let first = sorted[0];
        let second = sorted[1];
        if ((first && scores[first].x) != (second && scores[second].x)) {
          return self.choiceElements.find( elem => elem && elem.props && elem.props.data && elem.props.data.id == first );
        }
    }


  }

  render() {

    let self = this;

    switch (this.config.type) {

      case 'plane':

        let baseSize = document.querySelector(`#${this.divId}`) && document.querySelector(`#${this.divId}`).offsetWidth - 1 || 180;
        let top = ( typeof self.state.planePos.y == 'undefined' ? 50 : self.state.planePos.y ) * ( baseSize / 100 );
        let left = ( typeof self.state.planePos.x == 'undefined' ? 50 : self.state.planePos.x ) * ( baseSize / 100 );

        return (
          <div id={this.divId} className="osc-choices osc-choice-plane-plane" ref={function(el) { self.planePlaneElement = el;}}>

            { Object.keys(self.props.choices).map((key, i) => {
              let choice = self.props.choices[key];
              return (<OpenStadComponentChoice config={{ divId:`choice-${choice.id}`,  ...self.config }} data={choice} score={ self.props.scores && self.props.scores[`choice-${choice.id}`] } key={`choice-${choice.id}`} baseSize={baseSize} ref={function(el) { self.choiceElements[i] = el;}}/>);
            })}
            
            <div className="osc-point" style={{ top, left }}></div>
            <div style={{ clear: 'both' }}></div>
          </div>
        );

        break;

      case 'zero-to-100':
      case 'minus-to-plus-100':
      default:

        return (
          <ul className="osc-choices">
            { Object.keys(self.props.choices).map((key, i) => {
              let choice = self.props.choices[key];
              return (<OpenStadComponentChoice config={{ divId:`choice-${choice.id}`,  ...self.config }} data={choice} score={ self.props.scores && self.props.scores[`choice-${choice.id}`] } key={`choice-${choice.id}`} ref={function(el) { self.choiceElements[i] = el;}}/>);
            })}
          </ul>
        );
    
    }
    

  }

}
