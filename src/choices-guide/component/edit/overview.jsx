'use strict';

import OpenStadComponent from '../../../component/index.jsx';

export default class ChoiceForm extends OpenStadComponent {

  constructor(props) {
    super(props);
  }

  render() {
    let self = this;
    return (
          <div className="osc-overview">
            <h2>Vraaggroepen</h2>

            { Object.keys(self.props.questionGroups).map((key, i) => {

              let questionGroup = self.props.questionGroups[key];

              let questionsHTML = (
                <div className="osc-overview-questions">
                    <div className="osc-overview-line">
                      <h4>Vragen</h4>
                    </div>
                    { Object.keys(questionGroup.questions).map((key, i) => {
                      let question = questionGroup.questions[key];
                      return (
                        <div className="osc-overview-line" key={`question-${question.id}`}>
                          <div className="osc-overview-line-content">
                            {question.title}
                          </div>
                          {/*
                          <div className="osc-overview-line-content">
                            {question.description}
                          </div>
                          */}
                          <div className="osc-overview-line-buttons">
                            <a className="osc-edit-button" onClick={event => self.props.setCurrentForm({ what: 'question', questionGroupId: questionGroup.id, questionId: question.id })}></a>
                            <a className="osc-delete-button" onClick={event => self.props.deleteElement({ what: 'question', questionGroupId: questionGroup.id, questionId: question.id, title: question.title})}></a>
                          </div>
                        </div>
                      );
                    })}
                    <div className="osc-overview-line">
                      <a onClick={event => self.props.setCurrentForm({ what: 'question', questionGroupId: questionGroup.id })}>
                        Nieuwe vraag
                      </a>
                    </div>
                  </div>
              );

              let choicesHTML =
                <div className="osc-overview-choices">
                    <h4>Keuze opties</h4>
                    { Object.keys(questionGroup.choices).map((key, i) => {
                      let choice = questionGroup.choices[key];
                      return (
                        <div className="osc-overview-line" key={`choice-${choice.id}`}>
                          <div className="osc-overview-line-content">
                            {choice.title}
                          </div>
                          <div className="osc-overview-line-buttons">
                            <a className="osc-edit-button" onClick={event => self.props.setCurrentForm({ what: 'choice', questionGroupId: questionGroup.id, choiceId: choice.id })}></a>
                            <a className="osc-delete-button" onClick={event => self.props.deleteElement({ what: 'choice', questionGroupId: questionGroup.id, choiceId: choice.id, title: choice.title})}></a>
                          </div>
                        </div>

                      );
                    })}
                    <div className="osc-overview-line" key={`choice-new`}>
                      <a onClick={event => self.props.setCurrentForm({ what: 'choice', questionGroupId: questionGroup.id })}>
                        Nieuwe keuze optie
                      </a>
                    </div>
                  </div>;


              let deleteButton = (<div className="osc-no-button"></div>);
              if (Object.keys(questionGroup.choices).length == 0 && Object.keys(questionGroup.questions).length == 0) {
                deleteButton = (<a  className="osc-delete-button" onClick={event => self.props.deleteElement({ what: 'question-group', questionGroupId: questionGroup.id, title: questionGroup.title})}></a>);
              }

              return (
                <div className="osc-overview-question-group" key={`questiongroup-${questionGroup.id}`}>

                  <div className="osc-overview-line">
                    <div className="osc-overview-line-content">
                      <h3>{questionGroup.title}</h3>
                    </div>
                    <div className="osc-overview-line-buttons">
                      <a className="osc-edit-button" onClick={event => self.props.setCurrentForm({ what: 'question-group', questionGroupId: questionGroup.id })}></a>
                      {deleteButton}
                    </div>
                  </div>
                  {questionsHTML}
                  {choicesHTML}
                </div>
              );
            })}
            <br/><br/>
            <a href="#" onClick={event => self.props.setCurrentForm({ what: 'question-group' })}>Nieuwe groep</a>
          </div>
    )
    ;

  }

}
