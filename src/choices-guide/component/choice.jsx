import merge from 'merge';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentChoicePlane from './choice-plane.jsx';

'use strict';

export default class OpenStadComponentChoice extends OpenStadComponent {

  constructor(props) {

    super(props);

    this.defaultConfig = {
      type: 'default',
      withPercentage: true,
      minLabel: null,
      maxLabel: null,
      barColor: {
        default: '#bed200',
        min: '#ff9100',
        max: '#bed200'
      }
    };

    this.config = merge.recursive('clone', this.defaultConfig, this.config, props.config || {});
    if (this.config.barColor.min == null) this.config.barColor.min = '#ff9100';
    if (this.config.barColor.max == null) this.config.barColor.max = '#bed200';

    this.answerDimensions = props.answerDimensions || 1;
    switch (props.answerDimensions) {
      case 2:
        this.dimensions = ['x', 'y'];
        break;
      case 3:
        this.dimensions = ['x', 'y', 'z'];
        break;
      default:
        this.dimensions = ['x'];
    }

    this.answers = props.data && props.data.answers || {};
    Object.keys(this.answers).forEach((id) => {
      if (this.answers[id] == parseInt(this.answers[id])) {
        this.answers[id] = { x: parseInt(this.answers[id]) }
      }
    });

    this.state = {
      score: this.props.score || 0,
    };

  }

  getScore() {
    let score = this.planeElement ? 0 : this.state.score;
    return score;
  }

  getTitle(score, nameOnly) {
    return this.planeElement ?
      this.planeElement.getTitle(score,nameOnly) :
      this.props.data && this.props.data.title;
  }
  
  calculateScore(answers) {

    let self = this;

    let myAnswers = self.answers;
    let givenAnswers = answers || {};

    let noOfAnswers = Object.keys(myAnswers).length;
    let results = {};

    Object.keys(myAnswers).forEach((id) => {

      let myAnswer = myAnswers[id] || {};
      let givenAnswer = givenAnswers[id] || ( this.config.startWithAllQuestionsAnswered ? { x: 50, y: 50, z: 50 } : {} );

      let result = results[id] = {};

      this.dimensions.forEach((dimension) => {
        if (typeof myAnswer[dimension] == 'undefined') return;
        if (typeof givenAnswer[dimension] == 'undefined') return;
        let def = typeof myAnswer[dimension] != 'undefined' ? myAnswer[dimension] : [0,100];
        if ( Array.isArray(def) ) {
          // percentage of range
          var range = def[1] - def[0];
          return result[dimension] = def[0] + range * ( givenAnswer[dimension] / 100 );
        }
        if ( def == parseInt(def) ) {
          // defined value
          return result[dimension] = 100 - Math.abs(parseInt(def) - givenAnswer[dimension]);
        }
        // default: percentage
        return result[dimension] = givenAnswer[dimension];
      });

    });

    let scores = {};
    Object.keys(myAnswers).forEach((id) => {
      this.dimensions.forEach((dimension) => {
        scores[dimension] = scores[dimension] || {score: [], noOfAnswers: 0};
        if (typeof results[id][dimension] != 'undefined') {
          scores[dimension].score.push(results[id][dimension]);
        }
        if (myAnswers[id] && typeof myAnswers[id][dimension] != 'undefined') {
          scores[dimension].noOfAnswers++;
        }
      });
    });
    Object.keys(scores).forEach((dimension) => {
      scores[dimension] = scores[dimension].score.length ? scores[dimension].score.reduce(function (accumulator, currentValue){return accumulator + currentValue;}) / scores[dimension].noOfAnswers : undefined;
    });

    self.setState({score: scores});
    return scores;

  }

  render() {

    let self = this;

    let score = self.state.score;

    let scoreHTML = null;
    switch (this.config.type) {

      case 'plane':
        scoreHTML = (
          <OpenStadComponentChoicePlane config={{ ...self.config }} data={{ ...self.props.data }} score={score}  ref={function(el) { self.planeElement = el;}}/>
        );
        break;

      case 'minus-to-plus-100':
        let valueHTML = null;
        let percentage = parseInt(2 * ( score.x - 50 ));
        if (self.config.withPercentage) {
          valueHTML = <div className="osc-percentage">{percentage}%</div>
        }

        let maxColorMatch = self.config.barColor.max.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i); // todo: rgb(a) colors
        let minColorMatch = self.config.barColor.min.match(/#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i); // todo: rgb(a) colors
        let r = parseInt( minColorMatch[1], 16 ) + ( parseInt( maxColorMatch[1], 16 ) - parseInt( minColorMatch[1], 16 ) ) * ( score.x / 100 );
        let g = parseInt( minColorMatch[2], 16 ) + ( parseInt( maxColorMatch[2], 16 ) - parseInt( minColorMatch[2], 16 ) ) * ( score.x / 100 );
        let b = parseInt( minColorMatch[3], 16 ) + ( parseInt( maxColorMatch[3], 16 ) - parseInt( minColorMatch[3], 16 ) ) * ( score.x / 100 );
        let backgroundColor = `rgb(${r},${g},${b})`;

        let style = {
          backgroundColor,
        };
        if (percentage >= 0) {
          style.width = ( percentage / 2 ) + '%';
          style.left = '50%';
          style.right = 'auto';
        };
        if (percentage < 0) {
          style.width = ( -percentage / 2 ) + '%';
          style.left = 'auto';
          style.right = '50%';
        };
        
        scoreHTML = (
          <div className="osc-choice-default">
            <h4>{self.props.data.title}</h4>
            <div className={`osc-choice-bar osc-from-center${self.config.withPercentage ? ' osc-with-percentage' : ''}`}>
              <div className="osc-choice-bar-progress" style={style}></div>
            </div>
            { valueHTML }
          </div>
        );
        break;

      case 'zero-to-100':
      default:
        let percentageHTML = null;
        if (self.config.withPercentage) {
          let percentage = parseInt(score.x);
          percentageHTML = <div className="osc-percentage">{percentage}%</div>
        }

        style = {
          width: ( score.x || 0 ) + '%',
          backgroundColor: self.config.barColor.default
        };

        scoreHTML = (
          <div className="osc-choice-default">
            <h4>{self.props.data.title}</h4>
            <div className={`osc-choice-bar${self.config.withPercentage ? ' osc-with-percentage' : ''}`}>
              <div className="osc-choice-bar-mask"></div>
              <div className="osc-choice-bar-progress" style={style}></div>
            </div>
            { percentageHTML }
          </div>
        );

    }

    let minmaxLabelsHTML = null;
    if (self.config.minLabel || self.config.maxLabel) {
      minmaxLabelsHTML = (
        <div className="osc-minmax-labels">
          <div className="osc-min-label">
            {self.config.minLabel}
          </div>
          <div className="osc-max-label">
            {self.config.maxLabel}
          </div>
        </div>);
    }
    
    return (
      <li className="osc-choice">
        {scoreHTML}
        {minmaxLabelsHTML}
      </li>
    );

  }

}
