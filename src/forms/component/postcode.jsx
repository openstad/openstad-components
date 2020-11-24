'use strict';

import OpenStadComponentDefaultInput from './default-input.jsx';

export default class OpenStadComponentPostcode extends OpenStadComponentDefaultInput {

	validate({ showErrors }) {
    
		let isValid = true;
    let error = '';
    if (!this.state.value || !this.state.value.match(/^\s*\d{4}\s*[a-zA-Z][a-zA-Z]\s*$/)) {
      isValid = false;
      if (showErrors) error = 'Dit is geen postcode';
    }
    if (this.config.required && !this.state.value) {
      isValid = false;
      if (showErrors) error = 'Je hebt nog niets ingevuld';
    }
    this.setState({ isValid, error })
		return isValid;
	}

  render() {

		let self = this;

    let errorHTML = null;
    if (self.state.error) {
      errorHTML = (<div className="osc-form-error">{self.state.error}</div>)
    }
    
    return (
			<div className="osc-textinput">
			  <input type="text" value={this.props.value} disabled={this.props.disabled} placeholder={this.config.placeholder} onChange={e => self.handleOnChange({ value: self.input.value })} ref={el => (self.input = el)}/>
        {errorHTML}
		  </div>
    );

  }

}
