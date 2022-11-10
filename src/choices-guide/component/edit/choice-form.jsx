'use strict';

import merge from 'merge';
import { Suspense } from 'react';

import OpenStadComponent from '../../../component/index.jsx';
import OpenStadComponentForms from '../../../forms/index.jsx';

const OpenStadComponentImageUpload = React.lazy(() => import('../../../forms/component/image-upload.jsx'));

export default class ChoiceForm extends OpenStadComponent {

  constructor(props) {
    super(props);
    this.state = { questionEditModeIndex: null };
  }
  

  handleFieldChange(data) {
    let self = this;
    let parsedData;
    if (data.questionId) {
      parsedData = merge.recursive(true, {}, self.props.currentTarget.answers);
      parsedData[data.questionId] = parsedData[data.questionId] || {};
      if (typeof parsedData[data.questionId] != 'object') parsedData[data.questionId] = { x: parsedData[data.questionId] };
      parsedData[data.questionId][data.dimension] = data.value;
    }
    parsedData = parsedData || data;
    self.props.onChange({ answers: parsedData })    
  } 

  toggleEditMode(index) {
    this.setState({ questionEditModeIndex: this.state.questionEditModeIndex != index ? index : null })
  }

  render() {
    let self = this;

    let answers = self.props.currentTarget.answers;
    let answersHTML = (
      <div className="osc-overview">
      <div className="osc-overview-questions">
        <div className="osc-overview-line">
        </div>
        <div className="osc-overview-line">
          <div className="osc-overview-line-content"><strong>Vraag</strong></div>
          <div className="osc-overview-line-content osc-overview-line-field"><strong>X</strong></div>
          { ( self.props.currentTarget.questionGroup.answerDimensions > 1 ) && (<div className="osc-overview-line-content osc-overview-line-field"><strong>Y</strong></div>)}
          <div className="osc-overview-line-buttons"><div style={{ width: '30px' }}></div></div>
        </div>

        { Object.keys(self.props.currentTarget.questionGroup.questions).map((key, i) => {

          let question = self.props.currentTarget.questionGroup.questions[key];

          let dimensions = [];
          let questionDimensions = question.dimensions || ['x'];
          if (questionDimensions.indexOf('x') != -1 || (self.props.currentTarget.questionGroup && self.props.currentTarget.questionGroup.answerDimensions == 1)) dimensions.push('x');
          if (questionDimensions.indexOf('y') != -1 && self.props.currentTarget.questionGroup && self.props.currentTarget.questionGroup.answerDimensions == 2) dimensions.push('y');
          // if (questionDimensions.indexOf('z') != -1 && self.props.currentTarget.questionGroup && self.props.currentTarget.questionGroup.answerDimensions == 3) dimensions.push('z');

          return (
            <div className="osc-overview-line" key={`question-${question.id}`}>
              <div className="osc-overview-line-content">
                {question.title} ({question.id})
              </div>
              {/* 
              <div className="osc-overview-line-content">
                {question.description}
              </div>
              */}
              { ['x', 'y'].map((dimension, j) => {
                if (!dimensions.includes(dimension)) {
                  if (self.props.currentTarget.questionGroup.answerDimensions == 1) {
                    return null
                  } else {
                    return (<div className="osc-overview-line-content osc-overview-line-field" key={`field-${j}`}></div>);
                  }
                }
                let answerValue = self.props.currentTarget.answers && self.props.currentTarget.answers[question.id] && ( typeof self.props.currentTarget.answers[question.id] == 'object' ? self.props.currentTarget.answers[question.id][dimension] : self.props.currentTarget.answers[question.id] )
                if (self.state.questionEditModeIndex == i) {
                  return (
                    <div className="osc-overview-line-content osc-overview-line-field" key={`field-${j}`}>
                      <OpenStadComponentForms.Text config={{}} value={answerValue} onChange={ data => self.handleFieldChange({ questionId: question.id, dimension, value: data.value }) } ref={el => self.questionImageBField = el}/>
                    </div>);
                } else {
                  return (
                    <div className="osc-overview-line-content osc-overview-line-field" key={`field-${j}`}>
                      {answerValue}
                    </div>);
                }
              })}

              <div className="osc-overview-line-buttons">
                <a className="osc-edit-button" onClick={event => self.toggleEditMode(i)}></a>
              </div>
            </div>
          );
        })}
        </div>
      </div>);

    let imageHTML = null;
    if (self.props.currentTarget.questionGroup && self.props.currentTarget.questionGroup.answerDimensions > 1) {
      imageHTML = (
        <div>
          <h3>Afbeelding</h3>
          <Suspense fallback={<div>Loading...</div>}>
            <OpenStadComponentImageUpload config={self.config} value={self.props.currentTarget.images} onChange={ data => self.props.onChange({ images: data.value }) } ref={el => self.imagesField = el}/>
          </Suspense>
        </div>);
    }
    
    return (
      <div className="openstad-form">

        <h3>Titel</h3>
        <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 2, maxLength: 255 }} value={self.props.currentTarget.title} onChange={ data => self.props.onChange({ title: data.value }) } ref={el => self.titleField = el}/>

        <h3>Beschrijving</h3>
        <OpenStadComponentForms.InputWithCounter config={{ inputType: 'textarea', minLength: 0, maxLength: 5000 }} value={self.props.currentTarget.description} onChange={ data => self.props.onChange({ description: data.value }) } ref={el => self.descriptionField = el}/>

        {imageHTML}

        <h3>Antwoorden</h3>
        {answersHTML}

      </div>
    )
    ;

  }

}
