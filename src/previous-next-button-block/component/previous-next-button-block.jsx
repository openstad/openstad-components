'use strict';

import OpenStadComponent from '../../component/index.jsx';

import {getIdeas} from "../../store/src/features/ideas/selector";
import {bindActionCreators} from "redux";
import {addIdea, fetchIdeas} from "../../store/src/features/ideas/ideasSlice";
import {connect} from "react-redux";

class OpenStadComponentPreviousNextButtonBlock extends OpenStadComponent {

  constructor(props) {

    super(props, {});
    this.nextAction = this.nextAction.bind(this)

  }

  doeIets() {
    this.props.addIdea({
      id: 2,
      name: 'one more plan',
      images: {
        heading: 'https://maps.googleapis.com/maps/api/streetview?size=500x500&location=52.3779893,4.8460973&heading=151.78&key=AIzaSyAU1BrnBc0QW9PDai7hpRU2yYpoGXNDnU4',
      },
      position: {lat: 52.3631163, lng: 4.9038573},
      link: 'https://google.nl',
      status: 'ACCEPTED',
      theme: 'Lazyness',
      budget: 15000,
    })
  }

  nextAction(action) {
    if (action == 'doeIets') {
      this.doeIets();
    } else {
      action()
    }
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
      nextButtonHTML = <div className={`osc-next-button${nextIsDisabled ? ' osc-disabled' : ''}`} onClick={(args) => self.nextAction(nextAction) }>{nextLabel}</div>
    }

    return (
			<div className="osc-previous-next-button-block" ref={el => (self.instance = el)}>
				{previousButtonHTML}
        Aantal ideeen: {self.props.ideas.length}
				{nextButtonHTML}
			</div>
    );

  }

}

const mapStateToProps = (state) => {
  return {
    ideas: getIdeas(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addIdea, fetchIdeas }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(OpenStadComponentPreviousNextButtonBlock)
