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
      number: this.config.number,
      url: this.config.url,
      caption: this.config.caption,
    };

  }

  updateNumber(value) {
    this.setState({ number: value });
  }

  render() {

    let self = this;

    let number = parseInt(typeof self.props.number != 'undefined' ? self.props.number : self.state.number);
    let numberplatesHTML = (<OpenStadComponentNumberplates number={number} ref={(el) => { self.numberplates = el; }}/>);

    let captionHTML = null;
    if (self.config.caption) {
      let caption = typeof self.props.caption != 'undefined' ? self.props.caption : self.state.caption;
      captionHTML = <div className="osc-numberplate-button-caption"><div className="osc-elipsis">{self.config.caption}</div></div>
    }

    let url = typeof self.props.url != 'undefined' ? self.props.url : self.state.url;
    if (url) {
      return (
        <a href={url} id={self.divId} className={self.props.className || 'osc-numberplate-button'}>
          {numberplatesHTML}
          {captionHTML}
        </a>
      );
    }

    let onClick = typeof self.props.onClick != 'undefined' ? self.props.onClick : self.state.onClick || null;
    return (
      <div id={self.divId} onClick={onClick} className={self.props.className || 'osc-numberplate-button'}>
        {numberplatesHTML}
        {captionHTML}
      </div>
    );

  }

}
