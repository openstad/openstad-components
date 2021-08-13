'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentNumberplates from './numberplates.jsx';

export default class OpenStadComponentNumberplateButton extends OpenStadComponent {

  constructor(props) {

    super(props, {
      number: 0,
      url: null,
      caption: null,
    });

    this.state = {
      number: typeof props.number != 'undefined' ? props.number : this.config.number,
    };

  }

  updateNumber(value) {
    this.setState({ number: value });
  }

  render() {

    let self = this;

    let numberplatesHTML = (<OpenStadComponentNumberplates number={self.state.number} ref={(el) => { self.numberplates = el; }}/>);

    let captionHTML = null;
    if (self.config.caption) {
      captionHTML = <div className="osc-numberplate-button-caption"><div className="osc-elipsis">{self.config.caption}</div></div>
    }

    if (self.config.url) {
      return (
        <a href={self.config.url} id={self.divId} className={self.props.className || 'osc-numberplate-button'}>
          {numberplatesHTML}
          {captionHTML}
        </a>
      );
    } else {
      return (
        <div id={self.divId} className={self.props.className || 'osc-numberplate-button'}>
          {numberplatesHTML}
          {captionHTML}
        </div>
      );
    }

  }

}
