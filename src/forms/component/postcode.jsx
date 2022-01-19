'use strict';

import OpenStadComponentDefaultInput from './default-input.jsx';

export default class OpenStadComponentPostcode extends OpenStadComponentDefaultInput {

	validate({ showErrors }) {
		let isValid = true;
    let error = '';
    if (this.state.value) {
      if (!this.state.value.match(/^\s*\d{4}\s*[a-zA-Z][a-zA-Z]\s*$/)) {
        isValid = false;
        if (showErrors) error = 'Dit is geen postcode';
      }
    } else {
      if (this.config.required) {
        isValid = false;
        if (showErrors) error = 'Je hebt nog niets ingevuld';
      }
    }
    this.setState({ isValid, error })

		return isValid;
	}
  
  render() {

		let self = this;

    let errorHTML = null;
    if (self.state.error) {
      errorHTML = (<div className="osc-form-error osc-form-field-error">{self.state.error}</div>)
    }
    
    return (
			<div className="osc-textinput">
			  <input type="text" value={this.state.value} disabled={this.props.disabled} placeholder={this.config.placeholder} onChange={e => self.handleOnChange({ value: self.input.value })} ref={el => (self.input = el)}/>
        {errorHTML}
		  </div>
    );

  }

}
