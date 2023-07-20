'use strict';

import OpenStadComponentDefaultInput from './default-input.jsx';

export default class OpenStadComponentText extends OpenStadComponentDefaultInput {

	render() {
    
    let errorHTML = null;
    if (this.state.error) {
      errorHTML = (<div className="osc-form-error osc-form-field-error">Je hebt nog niets ingevuld</div>)
    }
    
    const className = this.props.className ? "osc-textinput " + this.props.className : "osc-textinput";
    const autoFocus = this.props.autoFocus ? true : false;
    
    return (
			<div className={className}>
			  <input type="text" value={this.state.value} autoFocus={autoFocus} disabled={this.props.disabled} placeholder={this.config.placeholder} required={this.props.required} onChange={e => this.handleOnChange({ value: this.input.value })} ref={el => (this.input = el)}/>
        {errorHTML}
		  </div>
    );

  }

}
