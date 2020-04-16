import merge from 'merge';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentChoice from './choice.jsx';

'use strict';

export default class OpenStadComponentChoices extends OpenStadComponent {

  constructor(props) {

    super(props);

    this.defaultConfig = {
      type: 'default',
      sticky: null,
    };

    this.config = merge.recursive(this.defaultConfig, this.config, props.config || {});

    this.choiceElements = [];

    this.state = {
      title: 'Je hebt nog geen keuze gemaakt',
      scores: null,
    };

  }

  componentDidMount(prevProps, prevState) {

    let self = this;

    // it is using js, because plain css sticky only works when you scroll the direct container
    setTimeout( function() { // TODO
      if ( self.choicesElement && self.config.sticky ) {
        var bodyRect = document.body.getBoundingClientRect();
        let elemRect = self.choicesElement.getBoundingClientRect();
        let absTop   = elemRect.top;
        let absLeft  = elemRect.left;
        let orgPos   = self.choicesElement.style.position;
        let orgTop   = self.choicesElement.style.top;
        let orgLeft  = self.choicesElement.style.left;
        let threshold = absTop - self.config.sticky.offsetTop;
		    window.addEventListener('scroll', function(event) {
          if (self.choicesElement) {
            if (window.pageYOffset >= threshold) {
              self.choicesElement.classList.add("sticky")
              self.choicesElement.style.left = absLeft + 'px'
            } else {
              self.choicesElement.classList.remove("sticky")
              self.choicesElement.style.position = orgPos;
              self.choicesElement.style.top = orgTop;
              self.choicesElement.style.left = orgLeft;
            }
          }
        });
      }
    }, 1000);

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
        return self.choiceElements[0].planeElement.getPreferedChoice(scores[`choice-${self.choiceElements[0].props.data.id}`]); // auw, dit moet dus anders
        break;

      default:
        let first = Object.keys(scores).sort( (a,b) => scores[a].x < scores[b].x )[0];
        return self.choiceElements.find( elem => elem && elem.config.divId == first );
    }


  }

  render() {

    let self = this;

    // let title = 'Beantwoord een vraag om te beginnen';
    let title = '<b>Je hebt nog geen keuze gemaakt</b>';
    if ( self.props.firstAnswerGiven && self.choiceElements && self.choiceElements.length ) {
      // let choiceElement = self.choiceElements.sort( (a,b) => a.getScore() < b.getScore() )[0];
      let choiceElement = self.getPreferedChoice();
      title = '<b>Jouw voorkeur: </b>' + choiceElement.getTitle(self.state.scores[choiceElement.config.divId]) || title;
    }

    return (
      <div id={this.divId} className="osc-choices-container osc-accordeon osc-closed" ref={ el => self.choicesElement = el }>
      <div onClick={() => { var element = document.getElementById(this.divId); if( element.className.match(' osc-closed') ) { element.className = element.className.replace(' osc-closed', ' osc-open'); } else { element.className = element.className.replace(' osc-open', ' osc-closed'); } }} className="osc-accordeon-button" dangerouslySetInnerHTML={{ __html: title }}></div>
        <div className="osc-accordeon-content">
          <ul className="osc-choices">
            { Object.keys(self.props.choices).map((key, i) => {
              let choice = self.props.choices[key];
              return (<OpenStadComponentChoice config={{ divId:`choice-${choice.id}`,  ...self.config }} data={choice} score={ self.props.scores && self.props.scores[`choice-${choice.id}`] } answerDimensions={self.props.answerDimensions} key={`choice-${choice.id}`} ref={function(el) { self.choiceElements[i] = el;}}/>);
            })}
          </ul>
        </div>
      </div>
    );

  }

}
