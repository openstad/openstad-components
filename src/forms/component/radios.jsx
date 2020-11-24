'use strict';

import OpenStadComponentDefaultInput from './default-input.jsx';

export default class OpenStadComponentRadios extends OpenStadComponentDefaultInput {

	render() {

		let self = this;

    let errorHTML = null;
    if (self.state.error) {
      errorHTML = (<div className="osc-form-error">Je hebt nog geen keuze gemaakt</div>)
    }

    return (
			<div className="osc-radios">
        {self.config.choices.map( choice => {
          if (choice.dangerousDescription) {
            return <div className="osc-radio-container" key={choice.value}><div className={`osc-radio-input${ self.state.value == choice.value ? ' osc-radio-input-checked' : ''}`}><input type="radio" name={self.divId} value={choice.value} onChange={e => self.handleOnChange({ value: choice.value })} /></div><div className="osc-radio-text" dangerouslySetInnerHTML={{ __html: choice.dangerousDescription }}/></div>
          } else {
            return <div className="osc-radio-container" key={choice.value}><div className={`osc-radio-input${ self.state.value == choice.value ? ' osc-radio-input-checked' : ''}`}><input type="radio" name={self.divId} value={choice.value} onChange={e => self.handleOnChange({ value: choice.value })} /></div><div className="osc-radio-text">{choice.dangerousDescription ? null : choice.description || choice.title || choice.value}</div></div>
          }
        })}
        {errorHTML}
		  </div>
    );

  }

}
