import merge from 'merge';

'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentFormField from './form-field.jsx';

export default class OpenStadComponentForm extends OpenStadComponent {

  constructor(props) {
    super(props);

		let self = this;

		self.defaultConfig = {
      // validateAction: null,
      // submitAction: null,
      title: null,
      intro: null,
      fields: [],
		};
		self.config = merge.recursive(self.defaultConfig, self.config, props.config || {})

    self.state = {
      values: props.values|| {},
		};

    self.handleOnChange = self.handleOnChange.bind(this);

    self.fields = [];

  }
  
	getValues() {
    return this.state.values;
	}

	validate({ showErrors }) {
    let self= this;
    let isValid = true;
    let firstInvalid = null
    self.fields.forEach((field) => {
      if (!field.validate({ showErrors })) {
        isValid = false;
        if (!firstInvalid) firstInvalid = field;
      }
    });

    if (firstInvalid && firstInvalid.instance && firstInvalid.instance.scrollIntoView) firstInvalid.instance.scrollIntoView({behavior: 'smooth'});
    // console.log(isValid);
    return isValid;    

	}

	handleOnChange(data) {
    // console.log("formchange", data);
    let self = this;
    let values = { ...this.state.values };
    values[data.name] = data.value;
		this.setState({ values });
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
            return <OpenStadComponentFormField config={fieldConfig} onChange={self.handleOnChange} ref={el => (self.input = el)} key={`osc-form-field-${i}`}  ref={el => { self.fields[i] = el; }}/>
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
