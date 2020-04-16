import React from 'react';
import ReactDOM from 'react-dom';

'use strict';

export default class FormfieldInputWithCounter extends React.Component {

  constructor(props) {
    super(props);

		let self = this;
		self.id = props.id || 'osc-formfields-plaintext-with-counter-' + parseInt( 1000000 * Math.random() )

		self.defaultConfig = {
			name: 'tekst',
			inputType: 'input',
			minLength: 5,
			maxLength: 10,
      placeholder: '',
		};

		self.config = Object.assign(self.defaultConfig, self.config, props.config || {})

    self.state = {
			focused: false,
      value: props.value || '',
			valueLength: props.value && props.value.length || 0,
		};

    self.key = props.useKey || ( self.id || 'osc-input-with-counter-' ) + parseInt( 10000000 * Math.random );

    this.onChange = props.onChange;

  }

	validate() {
		let state = { ...this.state };
		state.isValid = true;
		state.warning = null;
		if (this.state.valueLength < this.config.minLength) {
			state.warning = `Je ${this.config.name} is te kort`;
			state.isValid = false;
		}
		if (this.state.valueLength > this.config.maxLength) {
			state.warning = `Je ${this.config.name} is te lang`;
			state.isValid = false;
		}
		state.showWarning = true;
		this.setState(state)
		return state.isValid;
	}

	showWarning() {
		let state = { ...this.state };
		state.showWarning = true;
		this.setState(state)
	}


	handleOnChange(data) {
    data = data || {};
		this.setState(data)
		if (typeof this.onChange == 'function') {
			this.onChange(data);
		}
	}

	handleInputFocus() {
		let state = { ...this.state };
		state.focused = true;
		state.showWarning = false;
		this.setState(state)
	}

	handleInputBlur() {
		let state = { ...this.state };
		state.focused = false;
		this.setState(state)
	}

	handleInputKeyUp() {
		let state = {};
		let valueLength = this.input.value.length;
		state.value = this.input.value;
		state.valueLength = valueLength;
		state.isValid = valueLength >= this.config.minLength && valueLength <= this.config.maxLength;
		this.setState(state)
	}

	render() {

		let self = this;

		let counter = null;
		let warning = null;
		if (self.state.focused) {
			if (self.state.valueLength < self.config.minLength) {
				counter = (<div className="osc-form-counter osc-form-error">Nog minimaal <span className="">{self.config.minLength - self.state.valueLength}</span> tekens</div>)
			} else {
				let error = self.state.valueLength > self.config.maxLength ? 'osc-form-error' : '';
				counter = (<div className={'osc-form-counter ' + error}>Je hebt nog <span className="">{self.config.maxLength - self.state.valueLength}</span> tekens over.</div>)
			}
		}

		if (self.state.showWarning && self.state.warning) {
			warning = (<div className="osc-form-warning" ref={ el => this['form-warning-theme'] = el  }>{self.state.warning}</div>)
		}

    let inputHTML = null;

    switch(self.config.inputType) {
      case 'textarea':
        inputHTML = (
				  <textarea key={self.key} ref={el => (self.input = el)} value={this.props.value} disabled={this.props.disabled} placeholder={this.config.placeholder} onChange={e => self.handleOnChange({ value: self.input.value })} onKeyUp={e => self.handleInputKeyUp(e)} onFocus={e => self.handleInputFocus(e)} onBlur={e => self.handleInputBlur(e)}></textarea>
        );
        break;

      case 'input':
      default:
        inputHTML = (
				  <input key={self.key} ref={el => (self.input = el)} value={this.props.value} disabled={this.props.disabled} placeholder={this.config.placeholder} onChange={e => self.handleOnChange({ value: self.input.value })} onKeyUp={e => self.handleInputKeyUp(e)} onFocus={e => self.handleInputFocus(e)} onBlur={e => self.handleInputBlur(e)}></input>
        );

    }
		
    return (
			<div id={self.id} ref={el => (self.instance = el)} className="osc-input-with-counter">
				<div className="osc-form-feedback">
					{inputHTML}
					{counter}
					{warning}
				</div>
			</div>
    );

  }

}
