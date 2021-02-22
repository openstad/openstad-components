'use strict';

import OpenStadComponent from '../../component/index.jsx';

export default class OpenStadComponentDefaultInput extends OpenStadComponent {

  constructor(props, defaultConfig = {}) {

    super(props, {
      choices: [],
			name: '',
      placeholder: '',
      disabled: false,
      required: false,
		}, defaultConfig);

		let self = this;

    self.state = {
      value: props.value || '',
      error: null,
		};

    this.onChange = props.onChange;

  }

	validate({ showErrors }) {
		let isValid = this.config.required ? !!this.state.value : true;
    let error = '';
    if (!isValid && showErrors) error = true;
    this.setState({ isValid, error })
    console.log('xx', isValid, error);
		return isValid;
	}

	handleOnChange(data) {
		let self = this;
    data = data || {};
		self.setState(data, () => {
      // self.validate({});
    })
		if (typeof self.onChange == 'function') {
			self.onChange({ name: self.config.name, value: data.value });
		}
	}

}
