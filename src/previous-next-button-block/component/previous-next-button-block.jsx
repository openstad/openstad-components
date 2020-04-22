import merge from 'merge';
import React from 'react';
import ReactDOM from 'react-dom';

'use strict';

export default class OpenStadComponentPreviousNextButtonBlock extends React.Component {

  constructor(props) {

    super(props);

		this.defaultConfig = {
      previousAction: props.previousAction,
      nextAction: props.nextAction,
      previousUrl: props.previousUrl,
      nextUrl: props.nextUrl,
      previousLabel: props.previousLabel || 'Vorige',
      nextLabel: props.nextLabel || 'Volgende',
		};
		this.config = merge.recursive(this.defaultConfig, this.config, props.config || {})

  }

	render() {

		let self = this;

    let previousButtonHTML;
    let previousAction = this.config.previousAction;
    if (this.config.previousUrl) previousAction = () => { document.location.href = `${this.config.previousUrl}` };
    if ( previousAction ) {
      previousButtonHTML = <div className="osc-previous-button" onClick={(args) => { previousAction(args) }}>{this.config.previousLabel}</div>
    }

    let nextButtonHTML;
    let nextAction = this.config.nextAction;
    if (this.config.nextUrl) nextAction = () => { document.location.href = `${this.config.nextUrl}` };
    if ( nextAction ) {
      nextButtonHTML = <div className="osc-next-button" onClick={(args) => { nextAction(args) }}>{this.config.nextLabel}</div>
    }

    return (
			<div className="osc-previous-next-button-block" ref={el => (self.instance = el)}>
				{previousButtonHTML}
				{nextButtonHTML}
			</div>
    );

  }

}
