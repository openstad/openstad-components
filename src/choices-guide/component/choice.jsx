'use strict';

import OpenStadComponent from '../../component/index.jsx';

export default class OpenStadComponentChoice extends OpenStadComponent {

  constructor(props) {

    super(props, {
      type: 'default',
      withPercentage: false,
      minLabel: null,
      maxLabel: null,
      barColor: {
        default: '#bed200',
        min: '#ff9100',
        max: '#bed200'
      }
    });

    if (this.config.barColor.min == null) this.config.barColor.min = '#ff9100';
    if (this.config.barColor.max == null) this.config.barColor.max = '#bed200';

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

  getTitle(score, nameOnly) {
    return this.props.data && this.props.data.title;
  }
  
  calculateScore(answers) {

    let self = this;

    let choiceAnswers = self.answers;
    let userAnswers = answers || {};

    let noOfAnswers = Object.keys(choiceAnswers).length;
    let results = {};

    Object.keys(choiceAnswers).forEach((id) => {

      let choiceAnswer = choiceAnswers[id] || {};
      // TODO: this.config.startWithAllQuestionsAnswered hoort in question, niet hier
      let userAnswer = userAnswers[id] || ( this.config.startWithAllQuestionsAnswered ? { x: 50, y: 50, z: 50 } : {} );

      let result = results[id] = {};

      ['x','y','z'].forEach((dimension) => {
        if (typeof choiceAnswer[dimension] == 'undefined') return;
        if (choiceAnswer[dimension] == '') return;
        if (typeof userAnswer[dimension] == 'undefined') return;
        if (userAnswer[dimension] == '') return;
        return result[dimension] = 100 - Math.abs(choiceAnswer[dimension] - userAnswer[dimension]);
      });

    });

    let scores = {};
    Object.keys(choiceAnswers).forEach((id) => {
      ['x','y','z'].forEach((dimension) => {
        scores[dimension] = scores[dimension] || {score: [], noOfAnswers: 0};
        if (typeof results[id][dimension] != 'undefined') {
          scores[dimension].score.push(results[id][dimension]);
        }
        if (choiceAnswers[id] && choiceAnswers[id][dimension] != '' && typeof choiceAnswers[id][dimension] != 'undefined') {
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

        let imageHTML = null;
        let images = this.props.data && this.props.data.images || [];
        if (images && images.length) {
          if (!Array.isArray(images)) images = [images];
          let image = images[0];
          let imageSrc = image;
          if ( typeof image == 'object' ) imageSrc = image.src;
          imageHTML = (
            <img className="osc-choice-plane-background-image" src={imageSrc} style={{ width: this.props.baseSize / 2, height: this.props.baseSize / 2 }}/>
          );
        }

        return (
          <div className="osc-choice-plane" style={{ width: this.props.baseSize / 2, height: this.props.baseSize / 2 }}>{imageHTML}</div>
        );
        break;

      case 'minus-to-plus-100':
        let valueHTML = null;
        let percentage = parseInt(2 * ( score.x - 50 )) || 0;
        if (self.config.withPercentage) {
          valueHTML = <div className="osc-percentage">{percentage}</div>
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
          let percentage = parseInt(score.x) || 0;
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
