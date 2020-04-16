import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentForms from '../../forms/index.jsx';

'use strict';

export default class OpenStadComponentQuestion extends OpenStadComponent {

  constructor(props) {

    super(props);

    this.questionId = props.data.id;
    this.answerDimensions = props.answerDimensions || 1;
    this.onLiveUpdates = this.config.liveUpdatesFunction;

    this.state = {
      value: 50,
      isAnswered: false,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);

  }

  onChangeHandler(value) {
    let state = { value: value, isAnswered: true };
    state.error = undefined;
    this.setState(state, () => {
      this.liveUpdates();
    });
  }

  isValid() {

    let data = this.props.data || {};
    let wasAlreadyAnswered = typeof data.value != 'undefined';

    if (wasAlreadyAnswered || this.state.isAnswered) return true;

    this.setState({error: 'Je hebt nog geen keuze gemaakt'});
    return false;

  }

  getAnswer() {

    if (!this.state.isAnswered) return; // null

    // TODO: mutliple dimension anwser methodes

    let data = this.props.data || {};
    let values = data.values || {};

    let result;
    if (typeof this.state.value == 'number' || typeof this.state.value == 'string') {
      result = { x: this.state.value };
      if ( this.answerDimensions > 1 ) result.y = this.state.value;
      if ( this.answerDimensions > 2 ) result.z = this.state.value;
    } else {
      result = { x: this.state.value.x };
      if ( this.answerDimensions > 1 ) result.y = this.state.value.y;
      if ( this.answerDimensions > 2 ) result.z = this.state.value.z;
    }

    return result;

  }

  liveUpdates() {
    if (this.onLiveUpdates) this.onLiveUpdates();
  }

  render() {

    let self = this;
    let data = self.props.data || {};

    let isError = false;
    if (self.state.error) isError = true;

    let isAnswered = self.state.isAnswered;
    let value = typeof data.value == 'object' ? data.value.x : ( typeof data.value != 'undefined' ? data.value : 'not defined' );
    if (value === 'not defined') {
      value = this.state.value;
    } else {
      isAnswered = true;
    }


    let imageHTML = null;
    let images = data.images;
    if (images) {
      if (!Array.isArray(images)) images = [images];
      let image = images[0];
      imageHTML = (
        <img className="osc-question-image" src={image.src}/>
      );
    }

    let questionHTML = (<div className="osc-question-description"><div className="osc-question-description-text" dangerouslySetInnerHTML={{ __html: data.description }}></div></div>);
    let selectorHTML = null;
    switch (data.type) {

      case 'continuous':
        selectorHTML =
          <div className="osc-question-selector">
            <OpenStadComponentForms.Slider min='0' max='100' step='1' value={value} className="osc-question-selector-slider" config={{}} touched={isAnswered} onChange={ data => self.onChangeHandler(data) } ref={el => self.selector = el}/>
            <div className="osc-question-selector-minlabel" dangerouslySetInnerHTML={{ __html: data.minLabel }}></div>
            <div className="osc-question-selector-maxlabel" dangerouslySetInnerHTML={{ __html: data.maxLabel }}></div>
          </div>
        ;
        break;

      case 'a-to-b':
        let labelA = data.values && data.values.A && data.values.A.label || 'A';
        let labelB = data.values && data.values.B && data.values.B.label || 'B';
        let questionTextA = data.values && data.values.A && data.values.A.questionText;
        let questionTextB = data.values && data.values.B && data.values.B.questionText;
        if (questionTextA && questionTextB) {
          questionHTML = (
            <div className="osc-question-description">
              <div className="osc-question-description-text" dangerouslySetInnerHTML={{ __html: data.description }}></div>
              <div className="osc-question-description-text">
                <div className="osc-question-description-label">{labelA}</div><div className="osc-question-description-labeled-text">{questionTextA}</div>
              </div>
              <div className="osc-question-description-text">
                <div className="osc-question-description-label">{labelB}</div><div className="osc-question-description-labeled-text">{questionTextB}</div>
              </div>
            </div>
          );
        }
        let questionImageA = data.values && data.values.A && data.values.A.questionImage;
        let questionImageB = data.values && data.values.B && data.values.B.questionImage;
        if (questionImageA && questionImageB) {
          questionHTML = (
            <div className="osc-question-description">
              <div className="osc-question-description-text" dangerouslySetInnerHTML={{ __html: data.description }}></div>
              <div className="osc-question-description-image-container osc-question-description-image-container-a">
                <div className="osc-question-description-label osc-question-description-label-a">{labelA}</div>
                <img className="osc-question-description-image" src={questionImageA.src}/>
              </div>
              <div className="osc-question-description-image-container osc-question-description-image-container-b">
                <div className="osc-question-description-label osc-question-description-label-b">{labelB}</div>
                <img className="osc-question-description-image" src={questionImageB.src}/>
              </div>
            </div>
          );
        }
        selectorHTML =
          <div className="osc-question-selector">
            <div className="osc-question-selector-label-a">{labelA}</div>
            <div className="osc-question-selector-label-b">{labelB}</div>
            <OpenStadComponentForms.Slider  min='0' max='100' step='1' value={value} className="osc-question-selector-slider" config={{}} touched={isAnswered} onChange={ data => self.onChangeHandler(data) } ref={el => self.selector = el}/>
            <div className="osc-question-selector-minlabel" dangerouslySetInnerHTML={{ __html: data.minLabel }}></div>
            <div className="osc-question-selector-maxlabel" dangerouslySetInnerHTML={{ __html: data.maxLabel }}></div>
          </div>
        ;
        break;

      case 'enum-radio':
        selectorHTML = (
          <div className="osc-question-selector">
            { data.values.map((entry, i) => {
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
                    <input name={`enum-radio-${data.id}`} type="radio" onChange={() => self.onChangeHandler(entry.value)} key={`button-value-${key}`}/>
                  </div>
                  <div className="osc-radio-text">{entry.text}</div>
                </div>
              );
            })}
          </div>
        );
        break;

      case 'enum-buttons':
        selectorHTML =
          <div className="osc-question-selector">
            { data.values.map((entry, i) => {
              return <button onClick={() => self.onChangeHandler(entry.value)} key={`button-value-${entry.value}`}>{entry.text}</button>;
            })}
          </div>;
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
