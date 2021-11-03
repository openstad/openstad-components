'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentFormField from './form-field.jsx';

export default class OpenStadComponentForm extends OpenStadComponent {

  constructor(props) {

    super(props, {
      title: null,
      intro: null,
      fields: [],
		});

		let self = this;

    let initValues = props.values;
    if ( !initValues && self.config.fields && self.config.fields.length) {
      initValues = {};
      self.config.fields.map((fieldConfig, i) => {
        let name = fieldConfig.name || fieldConfig.title.toLowerCase();
        initValues[name] = fieldConfig.value;
      });
    }
    
    self.state = {
      values: initValues || {},
		};

    self.handleOnChange = self.handleOnChange.bind(this);

    self.fields = [];

  }
  

  getValues() {
    return this.state.values;
	}

	validate({ showErrors, scrollTo }) {
    let self= this;
    let isValid = true;
    let firstInvalid = null
    self.fields.forEach((field) => {
      if (!field.validate({ showErrors })) { 
        isValid = false;
        if (!firstInvalid) firstInvalid = field;
      }
    });

    if (scrollTo && firstInvalid && firstInvalid.instance && firstInvalid.instance.scrollIntoView) firstInvalid.instance.scrollIntoView({behavior: 'smooth'});
    return isValid;    

	}

	handleOnChange(data) {
    let self = this;
    let values = { ...this.state.values };
    values[data.name] = data.value;
		this.setState({ values }, () => {
      if (typeof this.props.onChange == 'function') this.props.onChange(data)
    });
	}

	render() {

		let self = this;

    let titleHTML = null;
    if (self.config.title) {
      titleHTML = <h2 className="osc-form-title">{self.config.title}</h2>
    }

    let introHTML = null;
    if (self.config.intro) {
      introHTML = <div className="osc-form-intro" dangerouslySetInnerHTML={{ __html: self.config.intro }}></div>
    }

    let fieldsHTML = null;
    if (self.config.fields && self.config.fields.length) {
      fieldsHTML =
        <div className="osc-form-fields">
          { self.config.fields.map((fieldConfig, i) => {
            return <OpenStadComponentFormField config={fieldConfig} initValue={fieldConfig.value} onChange={self.handleOnChange} ref={el => (self.input = el)} key={`osc-form-field-${i}`} ref={el => { self.fields[i] = el; }}/>
          })}
        </div>
    }

    return (
			<div id={self.divId} className="osc-form" ref={el => (self.instance = el)}>
				{titleHTML}
				{introHTML}
				{fieldsHTML}
			</div>
    );

  }

}
