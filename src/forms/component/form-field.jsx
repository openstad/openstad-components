import merge from 'merge';

'use strict';

import OpenStadComponent from '../../component/index.jsx';

import OpenStadComponentImageUpload from './image-upload.jsx';
import OpenStadComponentInputWithCounter from './input-with-counter.jsx';
import OpenStadComponentPostcode from './postcode.jsx';
import OpenStadComponentSelect from './select.jsx';
import OpenStadComponentText from './textinput.jsx';
import OpenStadComponentTextArea from './textarea.jsx';

export default class OpenStadComponentFormField extends OpenStadComponent {

  constructor(props) {
    super(props);

		let self = this;

		self.defaultConfig = {
      inputType: null,

      validateAction: null,
      changeAction: null,
      required: false,

      title: null,
      description: null,
      choices: [],
		};
		self.config = merge.recursive(self.defaultConfig, self.config, props.config || {})
    self.config.name = self.config.name || self.config.title.toLowerCase();

    self.state = {
      value: props.value || undefined,
		};

    self.handleOnChange = self.handleOnChange.bind(self);

    self.onChange = props.onChange;

  }
  
	validate({ showErrors }) {
    return this.input ? this.input.validate({ showErrors }) : true;
	}

	handleOnChange(data) {
    // console.log("form field change", data);
		if (typeof this.onChange == 'function') {
			this.onChange(data);
		}
	}

	render() {

		let self = this;

    let titleHTML = null;
    if (self.config.title) {
      titleHTML = <h3 className="osc-form-title">{self.config.title}</h3>
    }

    let descriptionHTML = null;
    if (self.config.description) {
      descriptionHTML = <div className="osc-form-description" dangerouslySetInnerHTML={{ __html: self.config.description }}></div>
    }

    let fieldHTML = null;

    switch (self.config.inputType) {

      case 'html-with-counter':
      case 'htmlarea-with-counter':
        fieldHTML = <OpenStadComponentInputWithCounter config={{ ...self.config, inputType: 'htmlarea' }} value={ this.props.value || this.config.value } onChange={self.handleOnChange} ref={el => (self.input = el)}/>
        break;

      case 'image-upload':
        fieldHTML = <OpenStadComponentImageUpload config={self.config} value={ this.props.value || this.config.value } onChange={self.handleOnChange} ref={el => (self.input = el)}/>
        break;

      case 'input-with-counter':
      case 'text-with-counter':
        fieldHTML = <OpenStadComponentInputWithCounter config={{ inputType: 'input', ...self.config }} value={ this.props.value || this.config.value } onChange={self.handleOnChange} ref={el => (self.input = el)}/>
        break;

      case 'postcode':
        fieldHTML = <OpenStadComponentPostcode config={self.config} onChange={self.handleOnChange} ref={el => (self.input = el)}/>
        break;

      case 'select':
      case 'multiple-choice':
        fieldHTML = <OpenStadComponentSelect config={self.config} value={ this.props.value || this.config.value } onChange={self.handleOnChange} ref={el => (self.input = el)}/>
        break;

      case 'text':
        fieldHTML = <OpenStadComponentText config={self.config} value={ this.props.value || this.config.value } onChange={self.handleOnChange} ref={el => (self.input = el)}/>
        break;

      case 'textarea':
        fieldHTML = <OpenStadComponentTextArea config={self.config} value={ this.props.value || this.config.value } onChange={self.handleOnChange} ref={el => (self.input = el)}/>
        break;

      case 'textarea-with-counter':
        fieldHTML = <OpenStadComponentInputWithCounter config={{ ...self.config, inputType: 'textarea' }} value={ this.props.value || this.config.value } onChange={self.handleOnChange} ref={el => (self.input = el)}/>
        break;

      default:
    }

    return (
			<div id={self.id} ref={el => (self.instance = el)} className="osc-form-field">
				{titleHTML}
				{descriptionHTML}
				{fieldHTML}
			</div>
    );

  }

}
