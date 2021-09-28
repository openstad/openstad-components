'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentNumberplates from './numberplates.jsx';

export default class OpenStadComponentNumberplateButton extends OpenStadComponent {

  constructor(props) {

    super(props, {
      number: 0,
      url: null,
      label: null,
    });

    this.state = {
      number: this.config.number,
      url: this.config.url,
      label: this.config.label,
    };

  }

  updateNumber(value) {
    this.setState({ number: value });
  }

  render() {

    let self = this;

    let number = parseInt(typeof self.props.number != 'undefined' ? self.props.number : self.state.number);
    let numberplatesHTML = (<OpenStadComponentNumberplates number={number} ref={(el) => { self.numberplates = el; }}/>);

    let labelHTML = null;
    if (self.config.label) {
      let label = typeof self.props.label != 'undefined' ? self.props.label : self.state.label;
      labelHTML = <div className="osc-numberplate-button-label"><div className="osc-elipsis">{self.config.label}</div></div>
    }

    let url = typeof self.props.url != 'undefined' ? self.props.url : self.state.url;
    if (url) {
      return (
        <a href={url} id={self.divId} className={self.props.className || 'osc-numberplate-button'}>
          {numberplatesHTML}
          {labelHTML}
        </a>
      );
    }

    let onClick = typeof self.props.onClick != 'undefined' ? self.props.onClick : self.state.onClick || null;
    return (
      <div id={self.divId} onClick={onClick} className={self.props.className || 'osc-numberplate-button'}>
        {numberplatesHTML}
        {labelHTML}
      </div>
    );

  }

}
