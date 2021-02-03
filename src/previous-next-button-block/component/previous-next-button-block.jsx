'use strict';

import OpenStadComponent from '../../component/index.jsx';

export default class OpenStadComponentPreviousNextButtonBlock extends OpenStadComponent {

  constructor(props) {

    super(props, {});

  }

	render() {

		let self = this;

    let previousButtonHTML;
    let previousAction = this.props.previousAction;
    if (this.props.previousUrl) previousAction = () => { document.location.href = `${this.props.previousUrl}` };
    if ( previousAction ) {
      previousButtonHTML = <div className={`osc-previous-button${this.props.previousIsDisabled ? ' osc-disabled' : ''}`} onClick={(args) => previousAction(args) }>{this.props.previousLabel}</div>
    }

    let nextButtonHTML;
    let nextAction = this.props.nextAction;
    if (this.props.nextUrl) nextAction = () => { document.location.href = `${this.props.nextUrl}` };
    if ( nextAction ) {
      nextButtonHTML = <div className={`osc-next-button${this.props.nextIsDisabled ? ' osc-disabled' : ''}`} onClick={(args) => nextAction(args) }>{this.props.nextLabel}</div>
    }

    return (
			<div className="osc-previous-next-button-block" ref={el => (self.instance = el)}>
				{previousButtonHTML}
				{nextButtonHTML}
			</div>
    );

  }

}
