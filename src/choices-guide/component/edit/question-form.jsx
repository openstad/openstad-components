'use strict';

import merge from 'merge';

import OpenStadComponent from '../../../component/index.jsx';
import OpenStadComponentForms from '../../../forms/index.jsx';

export default class QuestionForm extends OpenStadComponent {

  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.state = {
      valueEditModeIndex: null,
    }
  }

  handleFieldChange(data) {
    let self = this;
    let parsedData;
    if (typeof data.type != 'undefined') {
      parsedData = { type: data.type };
      if (self.props.currentTarget.type == 'a-to-b' && data.type == 'enum-radio') parsedData.values = [];
      if (self.props.currentTarget.type == 'enum-radio' && data.type == 'a-to-b') parsedData.values = { A: {}, B: {} };
    }
    if (typeof data.moreInfoTitle != 'undefined') {
      parsedData = { moreInfo: merge.recursive({}, self.props.currentTarget.moreInfo) };
      parsedData.moreInfo.title = data.moreInfoTitle
    }
    if (typeof data.moreInfoText != 'undefined') {
      parsedData = { moreInfo: merge.recursive({}, self.props.currentTarget.moreInfo) };
      parsedData.moreInfo.text = data.moreInfoText
    }
    if (typeof data.questionTextA != 'undefined') {
      parsedData = { values: merge.recursive({}, self.props.currentTarget.values) };
      parsedData.values.A.questionText = data.questionTextA
    }
    if (typeof data.questionImageA != 'undefined') {
      parsedData = { values: merge.recursive({}, self.props.currentTarget.values) };
      let img = data.questionImageA;
      try {
        img = JSON.parse(img);
      } catch (err) {}
      parsedData.values.A.questionImage = img
    }
    if (typeof data.questionTextA != 'undefined') {
      parsedData = { values: merge.recursive({}, self.props.currentTarget.values) };
      parsedData.values.A.questionText = data.questionTextA
    }
    if (typeof data.labelA != 'undefined') {
      parsedData = { values: merge.recursive({}, self.props.currentTarget.values) };
      parsedData.values.A.label = data.labelA
    }
    if (typeof data.labelB != 'undefined') {
      parsedData = { values: merge.recursive({}, self.props.currentTarget.values) };
      parsedData.values.B.label = data.labelB
    }
    if (typeof data.labelBelowA != 'undefined') {
      parsedData = { values: merge.recursive({}, self.props.currentTarget.values) };
      parsedData.values.A.labelBelow = data.labelBelowA
    }
    if (typeof data.labelBelowB != 'undefined') {
      parsedData = { values: merge.recursive({}, self.props.currentTarget.values) };
      parsedData.values.B.labelBelow = data.labelBelowB
    }
    if (typeof data.questionImageB != 'undefined') {
      parsedData = { values: merge.recursive({}, self.props.currentTarget.values) };
      let img = data.questionImageB;
      try {
        img = JSON.parse(img);
      } catch (err) {}
      parsedData.values.B.questionImage = img
    }
    if (typeof data.questionTextB != 'undefined') {
      parsedData = { values: merge.recursive({}, self.props.currentTarget.values) };
      parsedData.values.B.questionText = data.questionTextB
    }
    if (typeof data.newValue != 'undefined') {
      parsedData = { values: self.props.currentTarget.values || [] };
      parsedData.values.push(data.newValue);
      this.setState({ valueEditModeIndex: parsedData.values.length - 1 })
    }
    if (typeof data.deleteIndex != 'undefined') {
      parsedData = { values: self.props.currentTarget.values || [] };
      parsedData.values.splice(data.deleteIndex, 1);
    }
    if (typeof data.valueIndex != 'undefined') {
      parsedData = { values: self.props.currentTarget.values || [] };
      parsedData.values[data.valueIndex] = parsedData.values[data.valueIndex] || { text: '', value: {} };
      if (data.valueDimension) {
        if (typeof data.valueValue != 'undefined') {
          if ( typeof parsedData.values[data.valueIndex].value != 'object' ) parsedData.values[data.valueIndex].value = {};
          parsedData.values[data.valueIndex].value[data.valueDimension] = data.valueValue;
        }
      } else {
        parsedData.values[data.valueIndex].text = data.valueText;
      }
    }
    parsedData = parsedData || data;
    self.props.onChange(parsedData)    
  } 

  toggleEditMode(index) {
    this.setState({ valueEditModeIndex: this.state.valueEditModeIndex != index ? index : null })
  }
  
  render() {

    let self = this;

    let moreInfoHTML = (
      <div>
        <h3>Meer informatie</h3>
        <OpenStadComponentForms.InputWithCounter config={{ inputType: 'text', minLength: 0, maxLength: 200 }} value={self.props.currentTarget.moreInfo && self.props.currentTarget.moreInfo.title} onChange={ data => self.handleFieldChange({ moreInfoTitle: data.value }) } ref={el => self.moreInfoField = el}/>
      </div>);
    if (self.props.currentTarget.moreInfo && (self.props.currentTarget.moreInfo.title || self.props.currentTarget.moreInfo.text)) {
      moreInfoHTML = (
        <div>
          <h3>Meer informatie titel</h3>
          <OpenStadComponentForms.InputWithCounter config={{ inputType: 'text', minLength: 0, maxLength: 200 }} value={self.props.currentTarget.moreInfo && self.props.currentTarget.moreInfo.title} onChange={ data => self.handleFieldChange({ moreInfoTitle: data.value }) } ref={el => self.moreInfoField = el}/>
          <h3>Meer informatie text</h3>
          <OpenStadComponentForms.InputWithCounter config={{ inputType: 'textarea', minLength: 0, maxLength: 1000 }} value={self.props.currentTarget.moreInfo && self.props.currentTarget.moreInfo.text} onChange={ data => self.handleFieldChange({ moreInfoText: data.value }) } ref={el => self.moreInfoField = el}/>
        </div>);
    }


    let valuesHTML = null;
    if (self.props.currentTarget.type == 'continuous') {
      valuesHTML = (
        <div>
          <h3>Label minimale waarde</h3>
          <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 0, maxLength: 250 }} value={self.props.currentTarget.minLabel} onChange={ data => self.props.onChange({ minLabel: data.value }) } ref={el => self.minLabelField = el}/>
          <h3>Label maximale waarde</h3>
          <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 0, maxLength: 1000 }} value={self.props.currentTarget.maxLabel} onChange={ data => self.props.onChange({ maxLabel: data.value }) } ref={el => self.maxLabelField = el}/>
        </div>);
    }

    if (self.props.currentTarget.type == 'a-to-b') {

      valuesHTML = (
        <div className="osc-column-container">

          <div className="osc-column-50p osc-margin-right-10">

            <h3>Label voor A</h3>
            <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 0, maxLength: 1000 }} value={self.props.currentTarget.values && self.props.currentTarget.values.A && self.props.currentTarget.values.A.label} onChange={ data => self.handleFieldChange({ labelA: data.value }) } ref={el => self.labelField = el}/>
            <h3>Label onder slider A</h3>
            <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 0, maxLength: 1000 }} value={self.props.currentTarget.values && self.props.currentTarget.values.A && self.props.currentTarget.values.A.labelBelow} onChange={ data => self.handleFieldChange({ labelBelowA: data.value }) } ref={el => self.labelBelowField = el}/>
            <h3>Uitleg bij A</h3>
            <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 0, maxLength: 1000 }} value={self.props.currentTarget.values && self.props.currentTarget.values.A && self.props.currentTarget.values.A.questionText} onChange={ data => self.handleFieldChange({ questionTextA: data.value }) } ref={el => self.minLabelField = el}/>
            <h3>Afbeelding bij A</h3>
            {/* TODO: multiple image upload on a page
               <OpenStadComponentForms.ImageUpload key="i1" config={{ as: 'json', imageserver: self.config.imageserver }} value={self.props.currentTarget.values && self.props.currentTarget.values.A && self.props.currentTarget.values.A.questionImage} onChange={ data => self.props.onChange({ questionImageA: data.value }) } ref={el => self.questionImageAField = el}/> */}
            <OpenStadComponentForms.Text config={{}} value={self.props.currentTarget.values && self.props.currentTarget.values.A && ( typeof self.props.currentTarget.values.A.questionImage == 'object' ? JSON.stringify(self.props.currentTarget.values.A.questionImage) : self.props.currentTarget.values.A.questionImage )} onChange={ data => self.handleFieldChange({ questionImageA: data.value }) } ref={el => self.questionImageAField = el}/>

          </div>
          <div className="osc-column-50p osc-margin-left-10">

            <h3>Label voor B</h3>
            <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 0, maxLength: 1000 }} value={self.props.currentTarget.values && self.props.currentTarget.values.B && self.props.currentTarget.values.B.label} onChange={ data => self.handleFieldChange({ labelB: data.value }) } ref={el => self.labelField = el}/>
            <h3>Label onder slider B</h3>
            <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 0, maxLength: 1000 }} value={self.props.currentTarget.values && self.props.currentTarget.values.B && self.props.currentTarget.values.B.labelBelow} onChange={ data => self.handleFieldChange({ labelBelowB: data.value }) } ref={el => self.labelBelowField = el}/>
            <h3>Uitleg bij B</h3>
            <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 0, maxLength: 1000 }} value={self.props.currentTarget.values && self.props.currentTarget.values.B && self.props.currentTarget.values.B.questionText} onChange={ data => self.handleFieldChange({ questionTextB: data.value }) } ref={el => self.minLabelField = el}/>
            <h3>Afbeelding bij B</h3>
            {/* TODO: multiple image upload on a page
               <OpenStadComponentForms.ImageUpload key="i1" config={{ as: 'json', imageserver: self.config.imageserver }} value={self.props.currentTarget.values && self.props.currentTarget.values.B && self.props.currentTarget.values.B.questionImage} onChange={ data => self.props.onChange({ questionImageB: data.value }) } ref={el => self.questionImageBField = el}/> */}
            <OpenStadComponentForms.Text config={{}} value={self.props.currentTarget.values && self.props.currentTarget.values.B && ( typeof self.props.currentTarget.values.B.questionImage == 'object' ? JSON.stringify(self.props.currentTarget.values.B.questionImage) : self.props.currentTarget.values.B.questionImage )} onChange={ data => self.handleFieldChange({ questionImageB: data.value }) } ref={el => self.questionImageBField = el}/>

          </div>

        </div>);
    }

    if (self.props.currentTarget.type == 'enum-buttons' || self.props.currentTarget.type == 'enum-radio') {

      let dimensions = self.props.currentTarget.dimensions || "['x']";
      
      valuesHTML = (
        <div>
          <h3>Opties</h3>
          <div className="osc-overview">
            <div className="osc-overview-question-options">

              <div className="osc-overview-line">
                <div className="osc-overview-line-content"><strong>Tekst</strong></div>
                { ( dimensions == "['x']" || dimensions == "['x','y']" ) && (<div className="osc-overview-line-content osc-overview-line-field"><strong>X</strong></div>)}
                { ( dimensions == "['y']" || dimensions == "['x','y']" ) && (<div className="osc-overview-line-content osc-overview-line-field"><strong>Y</strong></div>)}
                <div className="osc-overview-line-buttons"><div style={{ width: '60px' }}></div></div>
              </div>

              { self.props.currentTarget.values && self.props.currentTarget.values.map && self.props.currentTarget.values.map((entry, i) => {

                let showEntry = function(fieldname, dimension) {
                  let value = dimension ? entry[fieldname][dimension] : entry[fieldname];
                  if (self.state.valueEditModeIndex == i) {
                    return <OpenStadComponentForms.Text config={{}} value={value} onChange={ data => self.handleFieldChange({ valueIndex: i, valueDimension: dimension, valueText: data.value, valueValue: data.value }) }/>
                  } else {
                    return value
                  }
                }

                return (
                  <div className="osc-overview-line" key={`option-${i}`}>
                    <div className="osc-overview-line-content">
                      {showEntry('text')}
                    </div>
                    { ( dimensions == "['x']" || dimensions == "['x','y']" ) && (
                      <div className="osc-overview-line-content osc-overview-line-field">
                        {showEntry('value', 'x')}
                      </div>
                    )}

                    { ( dimensions == "['y']" || dimensions == "['x','y']" ) && (
                      <div className="osc-overview-line-content osc-overview-line-field">
                        {showEntry('value', 'y')}
                      </div>
                    )}
                    <div className="osc-overview-line-buttons">
                      <a className="osc-edit-button" onClick={event => self.toggleEditMode(i)}></a>
                      <a className="osc-delete-button" onClick={event => self.handleFieldChange({ deleteIndex: i })}></a>
                    </div>
                  </div>)
              })}

              <div className="osc-overview-line">
                <a onClick={ () => self.handleFieldChange({ newValue: { text: 'Nieuwe optie', value: {x: '50', y: '50'} }})}>
                  Nieuwe optie toevoegen
                </a>
              </div>

            </div>
          </div>
        </div>);
    }

    // dimensions - TODO: 3de
    let dimensionsHTML = null;
    if (self.props.currentTarget.questionGroup && self.props.currentTarget.questionGroup.answerDimensions > 1) {
      dimensionsHTML = (
        <div>
          <h3>Deze vraag heeft invloed in de richting</h3>
          <OpenStadComponentForms.Select config={{ choices: [{ value: "['x']", description: "Alleen X"}, { value: "['y']", description: "Alleen Y"}, { value: "['x','y']", description: "X en Y"}] }} value={ self.props.currentTarget.dimensions } onChange={ data => self.props.onChange({ dimensions: data.value }) } ref={el => self.dimensionsField = el}/>
        </div>);
    }

    return (
      <div className="openstad-form">

        <h3>Titel</h3>
        <OpenStadComponentForms.InputWithCounter config={{ inputType: 'text', minLength: 0, maxLength: 200 }} value={self.props.currentTarget.title} onChange={ data => self.props.onChange({ title: data.value }) } ref={el => self.titleField = el}/>
        <h3>Beschrijving</h3>
        <OpenStadComponentForms.InputWithCounter config={{ inputType: 'textarea', minLength: 0, maxLength: 1000 }} value={self.props.currentTarget.description} onChange={ data => self.props.onChange({ description: data.value }) } ref={el => self.descriptionField = el}/>
        {moreInfoHTML}
        <h3>Afbeelding boven de vraag</h3>
        <OpenStadComponentForms.ImageUpload key="i1" config={{ as: 'json', imageserver: self.config.imageserver }} value={self.props.currentTarget.images} onChange={ data => self.props.onChange({ images: data.value }) } ref={el => self.imagesField = el}/>

        <h3>Type vraag</h3>
        <OpenStadComponentForms.Select config={{ choices: [{ value: "", description: "Maak een keuze" },/*{ value: "continuous", description: "continue" },*/{ value: "a-to-b", description: "van a naar b slider" },/*{ value: "enum-buttons", description: "multiple choice - buttons" }*/,{ value: "enum-radio", description: "radio buttons" }], required: true  }} value={ self.props.currentTarget.type } onChange={ data => self.handleFieldChange({ type: data.value }) } ref={el => self.typeField = el}/>

        {valuesHTML}
        {dimensionsHTML}
        
        <h3>Volgorde nummer</h3>
        <OpenStadComponentForms.Text config={{}} value={self.props.currentTarget.seqnr} onChange={ data => self.props.onChange({ seqnr: data.value }) } ref={el => self.seqnrField = el}/>

      </div>)
    ;

  }

}
