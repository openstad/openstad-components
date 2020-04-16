import React from 'react';
import ReactDOM from 'react-dom';

'use strict';

export default class FormfieldTextarea extends React.Component {

  constructor(props) {
    super(props);

		let self = this;
		self.id = props.id || 'osc-formfield-textarea-' + parseInt( 1000000 * Math.random() )

		self.defaultConfig = {
			name: 'tekst',
      placeholder: '',
		};

		self.config = Object.assign(self.defaultConfig, self.config, props.config || {})

    self.state = {
      value: props.value || '',
		};

    self.key = props.useKey || ( self.id || 'osc-formfield-textarea-' ) + parseInt( 10000000 * Math.random );

    this.onChange = props.onChange;

  }

	validate() {
		let isValid = true;
		this.setState({ isValid })
		return isValid;
	}

	handleOnChange(data) {
    data = data || {};
		this.setState(data)
		if (typeof this.onChange == 'function') {
			this.onChange(data);
		}
	}

	render() {

		let self = this;

    let inputHTML = (
			<textarea key={self.key} ref={el => (self.input = el)} value={this.state.value} disabled={this.props.disabled} placeholder={this.config.placeholder} onChange={e => self.handleOnChange({ value: self.input.value })} >{this.state.value}</textarea>
    );

    return (
			<div id={self.id} ref={el => (self.instance = el)} className="osc-formfield-textarea-container">
				{inputHTML}
			</div>
    );

  }

}
