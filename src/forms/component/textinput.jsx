import merge from 'merge';
import React from 'react';
import ReactDOM from 'react-dom';

'use strict';

import OpenStadComponentDefaultInput from './default-input.jsx';

export default class OpenStadComponentSelect extends OpenStadComponentDefaultInput {

	render() {

		let self = this;

    let errorHTML = null;
    if (self.state.error) {
      errorHTML = (<div className="osc-form-error">Je hebt nog geen niets ingevuld</div>)
    }
    
    return (
			<div className="osc-textinput">
			  <input type="text" value={this.state.value} disabled={this.props.disabled} placeholder={this.config.placeholder} onChange={e => self.handleOnChange({ value: self.input.value })} ref={el => (self.input = el)}/>
        {errorHTML}
		  </div>
    );

  }

}
