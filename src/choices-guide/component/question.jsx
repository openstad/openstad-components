'use strict';

import OpenStadComponent from '../../component/index.jsx';
import { Image as OpenStadComponentImage } from '../../image/index.jsx';
import OpenStadComponentForms from '../../forms/index.jsx';

export default class OpenStadComponentQuestion extends OpenStadComponent {

  constructor(props) {

    super(props);

    // defaults

    this.questionId = props.data.id;
    
    this.state = {
      value: 50,
      isAnswered: false,
    };
    
    if (['input', 'textarea'].includes(props.data.type)) {
      if (props.data.hasOwnProperty('value') && typeof props.data.value === 'object' && props.data.value.hasOwnProperty('x')) {
        this.state.value = props.data.value.x;
      } else {
        this.state.value = '';
      }
    } else {
      this.state.value = props.data.hasOwnProperty('value') ? props.data.value : [];
    }
    
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.showLightbox = this.showLightbox.bind(this);


  }

  onChangeHandler(value) {
    let state = { value: value, isAnswered: true };
    state.error = undefined;
    this.setState(state, () => {
      this.liveUpdates();
    });
  }
  
  onMultipleChoiceChangeHandler(newState) {
    newState.error = undefined;
    this.setState(newState, () => {
      this.liveUpdates();
    });
  }
  

  isValid() {


    let data = this.props.data || {};
    let wasAlreadyAnswered = typeof data.value != 'undefined';
    
    if (data.validation && data.validation.required === 'true' && (!this.state.value || this.state.value.length <= 0) && !['multiple-choice'].includes(data.type)) {
      if (['input', 'textarea'].includes(data.type)) {
        this.setState({error: 'Dit veld is verplicht'});
      } else {
        this.setState({error: 'Je hebt nog geen keuze gemaakt'});
      }
      return false;
    }
    
    if (data.validation && data.validation.minLength && String(this.state.value).length < data.validation.minLength) {
      this.setState({error: `Voer minimaal ${data.validation.minLength} tekens in`});
      return false;
    }
    
    if (data.validation && data.validation.maxLength && String(this.state.value).length > data.validation.maxLength) {
      this.setState({error: `Voer maximaal ${data.validation.maxLength} tekens in`});
      return false;
    }
    
    if (['multiple-choice'].includes(data.type)) {
      let checked = this.state.checked.reduce((count, checked) => count += (checked ? 1 : 0));
      if (this.state.checkedOther) {
          checked++;
      }
      
      if (data.validation && data.validation.minChoices > 0 && checked < data.validation.minChoices) {
        if (data.validation.minChoices == 1) {
          this.setState({error: 'Je hebt nog geen keuze gemaakt'});
        } else {
          this.setState({error: `Geef minimaal ${data.validation.minChoices} keuzes op`});
        }
        return false;
      }
      
      if (data.validation && data.validation.maxChoices > 0 && checked > data.validation.maxChoices) {
        this.setState({error: `Geef maximaal ${data.validation.maxChoices} keuzes op`});
        return false;
      }
      
      return true;
    }
    
    let isAnswered = this.state.isAnswered || !!this.config.startWithAllQuestionsAnsweredAndConfirmed
    if (wasAlreadyAnswered || isAnswered) return true;
    
    if (['input', 'textarea'].includes(data.type)) {
      return true;
    }
    
    if (data.type === 'enum-radio' && data.values.length === 0) {
      return true;
    }

    this.setState({error: 'Je hebt nog geen keuze gemaakt'});
    return false;

  }

  getAnswer() {

    if (!this.state.isAnswered) return; // null
    
    let result;
    
    if (this.props.data.type === 'multiple-choice' && this.state.checked.length > 0) {
      result = [];
      
      this.state.checked.forEach((val, index) => {
        if (val === true) {
          result.push(this.state.values[index].text);
        }
      });
      
      if (this.state.checkedOther === true) {
        result.push(`Anders, namelijk: ${this.state.otherInputValue}`);
      }
      
      return result;
    }
    
    let data = this.props.data || {};
    let values = data.values || {};

    let dimensions = data.dimensions;
    try {
      dimensions = JSON.parse(dimensions)
    } catch (err) {}
    dimensions = dimensions || ['x'];

    // get a number between 0 and 100
    if (typeof this.state.value == 'number' || typeof this.state.value == 'string') {
      result = {};
      if ( dimensions.includes('x') ) result.x = this.state.value;
      if ( dimensions.includes('y') ) result.y = this.state.value;
      if ( dimensions.includes('z') ) result.z = this.state.value;
    } else {
      result = {};
      if ( dimensions.includes('x') ) result.x = this.state.value.x;
      if ( dimensions.includes('y') ) result.y = this.state.value.y;
      if ( dimensions.includes('z') ) result.z = this.state.value.z;
    }

    return result;

  }

  liveUpdates() {
		var event = new window.CustomEvent('osc-choices-guide-live-updates');
		document.dispatchEvent(event);
  }

  toggleMoreInfo(id) {
    let elem = document.querySelector(`#${id}`);
    if (elem) {
      if( elem.className.match(' osc-closed') ) {
        elem.className = elem.className.replace(' osc-closed', ' osc-open');
      } else {
        elem.className = elem.className.replace(' osc-open', ' osc-closed');
      }
    }
  }

  showLightbox(startWith) {

    let data = this.props.data || {};

    let questionImageA = data.values && data.values.A && data.values.A.questionImage;
    if (questionImageA && questionImageA.length) {
      if (!Array.isArray(questionImageA)) questionImageA = [questionImageA];
      questionImageA = questionImageA[0];
    }
    let questionImageB = data.values && data.values.B && data.values.B.questionImage;
    if (questionImageB && questionImageB.length) {
      if (!Array.isArray(questionImageB)) questionImageB = [questionImageB];
      questionImageB = questionImageB[0];
    }
    let images = [questionImageA, questionImageB]

    let startIndex = images.findIndex( img => img == startWith );

		// dispatch an event
		var event = new window.CustomEvent('osc-show-light-box', { detail: { images, startIndex, aspectRatio: this.config.aspectRatio } });
		document.dispatchEvent(event);
  
  }

  render() {

    let self = this;
    let data = self.props.data || {};

    let isError = false;
    if (self.state.error) isError = true;

    let isAnswered = self.state.isAnswered;

    let value = typeof data.value != 'undefined' ? data.value : 'not defined';
    if ( typeof data.value == 'object' && !Array.isArray(data.value)) {
      let dimensions = data.dimensions;
      if ( dimensions == 'null' ) dimensions = null;
      if ( !dimensions || dimensions.includes('x') ) value = data.value.x;
      if ( dimensions && dimensions.includes('y') ) value = data.value.y;
      if ( dimensions && dimensions.includes('z') ) value = data.value.z;
    }
    if (value === 'not defined') {
      if (data.type != 'multiple-choice') {
        value = this.state.value;
      } else {
        value = [];
      }
    } else {
      isAnswered = true;
    }

    let imageHTML = null;
    let images = data.images || [];
    if (images && images.length) {
      if (!Array.isArray(images)) images = [images];
      let image = images[0];
      imageHTML = (
        <div className={`osc-question-image-container`}>
          <OpenStadComponentImage config={self.config} image={image}/>
        </div>
      );
    }

    let moreInfoHTML = null;
    if (data.moreInfo && ( data.moreInfo.title || data.moreInfo.text )) {
      let title = data.moreInfo.title || 'Geen titel';
      let text = data.moreInfo.text || 'Geen tekst';
      let id = `osc-moreInfo-${parseInt(100000*Math.random())}`;
      moreInfoHTML = (
        <div className="osc-accordeon">
          <div id={id} className="osc-accordeon-item osc-closed" onClick={() => self.toggleMoreInfo(id)}>
            <div className="osc-title osc-info">
              {title}
            </div>
            <div className="osc-description" dangerouslySetInnerHTML={{ __html: text }}>
            </div>
          </div>
        </div>
      );
    }
    
    let labelA = data.values && data.values.A && data.values.A.label || 'A';
    let labelB = data.values && data.values.B && data.values.B.label || 'B';
    let questionHTML = (<div className="osc-question-description"><div className="osc-question-description-text" dangerouslySetInnerHTML={{ __html: data.description }}></div>{moreInfoHTML}</div>);

    let selectorHTML = null;
    switch (data.type) {

      case 'continuous':
        selectorHTML =
          <div className="osc-question-selector">
            <OpenStadComponentForms.Slider min='0' max='100' step='1' value={value} className="osc-question-selector-slider" config={{}} touched={isAnswered} onChange={ data => self.onChangeHandler(data) } ref={el => self.selector = el}/>
            <div className="osc-question-selector-minlabel" dangerouslySetInnerHTML={{ __html: labelA }}></div>
            <div className="osc-question-selector-maxlabel" dangerouslySetInnerHTML={{ __html: labelB }}></div>
          </div>
        ;
        break;

      case 'a-to-b':
        let labelBelowA = data.values && data.values.A && data.values.A.labelBelow || '';
        let labelBelowB = data.values && data.values.B && data.values.B.labelBelow || '';
        let questionTextA = data.values && data.values.A && data.values.A.questionText;
        let questionTextB = data.values && data.values.B && data.values.B.questionText;
        let questionAHTML = null, questionBHTML = null;
        if (questionTextA && questionTextB) {
          questionAHTML = (
              <div className="osc-question-description-text">
                <div className="osc-question-description-label">{labelA}</div><div className="osc-question-description-labeled-text">{questionTextA}</div>
              </div>
          );
          questionBHTML = (
              <div className="osc-question-description-text">
                <div className="osc-question-description-label">{labelB}</div><div className="osc-question-description-labeled-text">{questionTextB}</div>
              </div>
          );
          questionHTML = (
            <div className="osc-question-description">
              <div className="osc-question-description-text" dangerouslySetInnerHTML={{ __html: data.description }}></div>
              {questionAHTML}
              {questionBHTML}
              {moreInfoHTML}
            </div>
          );
        }

        let questionImageA = data.values && data.values.A && data.values.A.questionImage;
        if (questionImageA && questionImageA.length) {
          if (!Array.isArray(questionImageA)) questionImageA = [questionImageA];
          questionImageA = questionImageA[0];
        }
        let questionImageB = data.values && data.values.B && data.values.B.questionImage;
        if (questionImageB && questionImageB.length) {
          if (!Array.isArray(questionImageB)) questionImageB = [questionImageB];
          questionImageB = questionImageB[0];
        }
        let questionImageAHTML = null;
        let questionImageBHTML = null;
        if (questionImageA && questionImageA.length && questionImageB && questionImageB.length) {
          questionImageAHTML = (
            <div className="osc-question-description-image-container osc-question-description-image-container-a">
              <div className="osc-question-description-label osc-question-description-label-a">{labelA}</div>
              <div className={`osc-question-image-container osc-question-image-aspect-${self.config.aspectRatio}`}>
                <OpenStadComponentImage config={{ aspectRatio: self.config.aspectRatio }} image={questionImageA} onClick={ () => self.showLightbox(questionImageA) }/>
              </div>
            </div>);
          questionImageBHTML = (
            <div className="osc-question-description-image-container osc-question-description-image-container-b">
              <div className="osc-question-description-label osc-question-description-label-b">{labelB}</div>
              <div className={`osc-question-image-container osc-question-image-aspect-${self.config.aspectRatio}`}>
                <OpenStadComponentImage config={{ aspectRatio: self.config.aspectRatio }} image={questionImageB} onClick={ () => self.showLightbox(questionImageB) }/>
              </div>
            </div>);
        }
        questionHTML = (
          <div className="osc-question-description">
            <div className="osc-question-description-text" dangerouslySetInnerHTML={{ __html: data.description }}></div>
            {questionAHTML}
            {questionBHTML}
            {moreInfoHTML}
            {questionImageAHTML}
            {questionImageBHTML}
            <div style={{ clear: 'both', height: 15 }}></div>{/* todo dus */}
          </div>);
        selectorHTML = (
          <div className="osc-question-selector">
            <div className="osc-question-selector-label-a">{labelA}</div>
            <div className="osc-question-selector-label-b">{labelB}</div>
            <OpenStadComponentForms.Slider  min='0' max='100' step='1' value={value} className="osc-question-selector-slider" config={{}} touched={isAnswered} onChange={ data => self.onChangeHandler(data) } ref={el => self.selector = el}/>
            <div className="osc-question-selector-minlabel" dangerouslySetInnerHTML={{ __html: labelBelowA || '' }}></div>
            <div className="osc-question-selector-maxlabel" dangerouslySetInnerHTML={{ __html: labelBelowB || '' }}></div>
          </div>);
        break;

      case 'enum-radio':
        selectorHTML = (
          <div className="osc-question-selector">
            { data.values && Array.isArray(data.values) && data.values.map((entry, i) => {
              let key = parseInt(1000000 * Math.random());
              let checked = false;
              if (typeof data.value == 'object') {
                checked = true;
                Object.keys(data.value).forEach((key) => {
                  if (data.value[key] !== entry.value[key]) checked = false;
                });
              } else {
                if (data.value === entry.value) checked = true;
              }
              let value = data.value != 'undefined' ? data.value : this.state.value;
              return (
                <div key={`div-value-${key}`} className="osc-radio-container">
                  <div className={`osc-radio-input${checked ? ' osc-radio-input-checked' : '' }`}>
                    <input name={`enum-radio-${data.id}`} type="radio" onChange={() => self.onChangeHandler(entry.value)} id={`button-value-${key}`} key={`button-value-${key}`}/>
                  </div>
                  <div className="osc-radio-text"><label for={`button-value-${key}`}>{entry.text}</label></div>
                </div>
              );
            })}
          </div>
        );
        break;

      case 'enum-buttons':
        selectorHTML =
          <div className="osc-question-selector">
            { data.values && data.values.map((entry, i) => {
              return <button onClick={() => self.onChangeHandler(entry.value)} key={`button-value-${i}`}>{entry.text}</button>;
            })}
          </div>;
        break;
        
      case 'input':
        selectorHTML =
          <div className="osc-question-selector">
            <div className="osc-radio-container">
                  <div className={`osc-text-input`}>
                    <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', validation: data.validation, ...data.validation }} value={value} onChange={ data => self.onChangeHandler(data.value, false) } ref={el => self.titleField = el}/>
                  </div>
                  <div className="osc-text-text">{data.values.text}</div>
                </div>
            
            </div>;
        break;
        
      case 'textarea':
        selectorHTML =
          <div className="osc-question-selector">
            <div className="osc-radio-container">
                  <div className={`osc-text-input`}>
                    <OpenStadComponentForms.InputWithCounter config={{ inputType: 'textarea', validation: data.validation, ...data.validation }} value={value} onChange={ data => self.onChangeHandler(data.value, false) } ref={el => self.titleField = el}/>
                  </div>
                  <div className="osc-text-text">{data.values.text}</div>
                </div>
            
            </div>;
        break;
        
      case 'multiple-choice':
        selectorHTML = (
          <div className="osc-question-selector">
            <OpenStadComponentForms.Checkboxes config={{ id: data.id, choices: data.values, showOtherInputField: data.extraConfig && data.extraConfig.showOther === 'true' ? true : false, validation: data.validation }} value={value} onChange={ newState => self.onMultipleChoiceChangeHandler(newState)} ref={el => self.titleField = el}/>
          </div>
        );
        break;

      default:
        selectorHTML = (<div>Type {data.type} is (nog) niet geimplementeerd.</div>);

    }

    let errorHTML = null;
    if (isError) {
      errorHTML = <div className="osc-error-text">{self.state.error}</div>;
    }

    return (
      <div id={self.props.config.divId} className={`osc-question osc-question-${data.type}${isError ? ' osc-error' : ''}`}>
        {imageHTML}
        <div className="osc-question-content" id={self.props.config.divId + '-content'}>
          <h3 className="osc-question-title"> {data.title}</h3>
          {questionHTML}
          {selectorHTML}
          {errorHTML}
        </div>
      </div>
    );

  }

}
