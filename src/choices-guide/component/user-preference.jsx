'use strict';

import OpenStadComponent from '../../component/index.jsx';

export default class OpenStadComponentUserPreference extends OpenStadComponent {

  constructor(props) {

    super(props, {
      questions: [],
      choices: [],
    });

    this.state = {
    };

  }

  calculateScores(answers) {

    let self = this;
    if (!self.props.questionGroup) return {};

    let userAnswers = answers || {};
    let scores = {};

    let choices = [];
    if (self.props.choices && self.props.choices.lenght) {
      choices = self.props.choices
    }
    if (self.props.questionGroup.choices && self.props.questionGroup.choices.length) {
      choices = self.props.questionGroup.choices
    }

    let questions = self.props.questionGroup.questions

    choices.forEach((choice) => {

      let choiceAnswers = choice.answers;
      Object.keys(choiceAnswers).forEach((id) => {

        let question = questions.find(question => question.id == id);
        if (!question) return;

        let range = { min: 0, max: 100 };



        switch (question.type) {

          case 'continuous':
          case 'a-to-b':
            break;

          case 'enum-buttons':
          case 'enum-radio':
            break;

          default:
        }
        
        
      })

      
    });

    
    // console.log(scores);

    

  }

  render() {

    let choicesHTML = null;

    //let choicesTitle = '<b>Je hebt nog geen keuze gemaakt</b>';
    // 
    //if ( self.state.firstAnswerGiven && self.choicesElement ) {
    //  let choiceElement = self.choicesElement.getPreferedChoice();
    //  choicesTitle = self.config.choices.title.preference.replace('\{preferredChoice\}', choiceElement.getTitle(self.state.scores[choiceElement.config.divId]) || choicesTitle);
    //} else {
    //  choicesTitle = self.config.choices.title.noPreferenceYet;
    //}
    // 
    //choicesHTML = (
    //  <div id={'osc-choices-container-' + this.divId} className="osc-choices-container osc-accordeon osc-closed" ref={el => { self.choicesAccordeon = el; }}>
    //    <div onClick={() => { if( this.choicesAccordeon.className.match(' osc-closed') ) { this.choicesAccordeon.className = this.choicesAccordeon.className.replace(' osc-closed', ' osc-open'); } else { this.choicesAccordeon.className = this.choicesAccordeon.className.replace(' osc-open', ' osc-closed'); } }} className="osc-accordeon-button" dangerouslySetInnerHTML={{ __html: choicesTitle }}></div>
    //    <div className="osc-accordeon-content">
    //      <OpenStadComponentChoices config={self.config.choices} choices={[...choices]} scores={{...self.state.scores}} answerDimensions={answerDimensions} firstAnswerGiven={ self.state.firstAnswerGiven ? true : false } ref={function(el) { self.choicesElement = el; }} key='choices'/>
    //    </div>
    //  </div>
    //);

    return (
      <div className="osc-user-preference">
        Voorkeuren
      </div>
    )
        
  }

}
