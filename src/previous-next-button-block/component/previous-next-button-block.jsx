'use strict';

import OpenStadComponent from '../../component/index.jsx';

export default class OpenStadComponentPreviousNextButtonBlock extends OpenStadComponent {

  constructor(props) {

    super(props, {});

  }

	render() {

		let self = this;

    let previousButtonHTML;
    let previousAction = this.props.previousAction || this.config.previousAction;
    let previousUrl = this.props.previousUrl || this.config.previousUrl;
    let previousIsDisabled = this.props.previousIsDisabled || this.config.previousIsDisabled;
    let previousLabel = this.props.previousLabel || this.config.previousLabel;
    
    if (previousUrl) previousAction = () => { document.location.href = `${previousUrl}` };
    if ( previousAction ) {
      previousButtonHTML = <div className={`osc-previous-button${previousIsDisabled ? ' osc-disabled' : ''}`} onClick={(args) => previousAction(args) }>{previousLabel}</div>
    }

    let nextButtonHTML;
    let nextAction = this.props.nextAction || this.config.nextAction;
    let nextUrl = this.props.nextUrl || this.config.nextUrl;
    let nextIsDisabled = this.props.nextIsDisabled || this.config.nextIsDisabled;
    let nextLabel = this.props.nextLabel || this.config.nextLabel;

    if (nextUrl) nextAction = () => { document.location.href = `${nextUrl}` };
    if ( nextAction ) {
      nextButtonHTML = <div className={`osc-next-button${nextIsDisabled ? ' osc-disabled' : ''}`} onClick={(args) => nextAction(args) }>{nextLabel}</div>
    }

    return (
			<div className="osc-previous-next-button-block" ref={el => (self.instance = el)}>
				{previousButtonHTML}
				{nextButtonHTML}
			</div>
    );

  }

}
