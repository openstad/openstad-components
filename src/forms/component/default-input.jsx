import merge from 'merge';
import React from 'react';
import ReactDOM from 'react-dom';

import OpenStadComponent from '../../component/index.jsx';

'use strict';

export default class OpenStadComponentDefaultInput extends OpenStadComponent {

  constructor(props) {

    super(props);

		let self = this;

		self.defaultConfig = {
      choices: [],
			name: '',
      placeholder: '',
      disabled: false,
      required: false,
		};
		self.config = merge.recursive(self.defaultConfig, self.config, props.config || {})

    self.state = {
      value: props.value,
      error: null,
		};

    this.onChange = props.onChange;

  }

	validate({ showErrors }) {
		let isValid = this.config.required ? !!this.state.value : true;
    let error = '';
    if (!isValid && showErrors) error = true;
    this.setState({ isValid, error })
		return isValid;
	}

	handleOnChange(data) {
		let self = this;
    data = data || {};
		self.setState(data, () => {
      self.validate({});
    })
		if (typeof self.onChange == 'function') {
			self.onChange({ name: self.config.name, value: data.value });
		}
	}

}
