import merge from 'merge';

'use strict';

import OpenStadComponent from '../../component/index.jsx';

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

      case 'select':
        fieldHTML = <OpenStadComponentSelect config={self.config} onChange={self.handleOnChange} ref={el => (self.input = el)}/>
        break;

      case 'text':
        fieldHTML = <OpenStadComponentText config={self.config} onChange={self.handleOnChange} ref={el => (self.input = el)}/>
        break;

      case 'textarea':
        fieldHTML = <OpenStadComponentTextArea config={self.config} onChange={self.handleOnChange} ref={el => (self.input = el)}/>
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
