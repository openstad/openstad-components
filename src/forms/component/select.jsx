import merge from 'merge';
import React from 'react';
import ReactDOM from 'react-dom';

'use strict';

import OpenStadComponentDefaultInput from './default-input.jsx';

export default class OpenStadComponentSelect extends OpenStadComponentDefaultInput {

  componentDidMount() {
    // init value
    let value = this.state.value || ( this.config.choices[0] && this.config.choices[0].value );
    this.handleOnChange({ value })
  }

	render() {

		let self = this;

    let errorHTML = null;
    if (self.state.error) {
      errorHTML = (<div className="osc-form-error">Je hebt nog geen keuze gemaakt</div>)
    }

    return (
			<div className="osc-select">
			  <select value={this.state.value || ''} disabled={this.props.disabled} placeholder={this.config.placeholder} onChange={e => self.handleOnChange({ value: self.input.value })} ref={el => (self.input = el)}>
          {self.config.choices.map( choice => {
            return <option value={choice.value || ''} key={choice.value}>{choice.description || choice.title || choice.value}</option>
          })}
        </select>
        {errorHTML}
		  </div>
    );

  }

}
