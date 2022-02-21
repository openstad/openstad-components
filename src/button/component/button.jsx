'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentNumberplates from './numberplates.jsx';

export default class OpenStadComponentButton extends OpenStadComponent {

  constructor(props) {

    super(props, {
      number: null,
      icon: null,
      url: null,
      label: null,
    });

    this.state = {
      number: this.config.number,
      icon: this.config.icon,
      url: this.config.url,
      label: this.config.label,
    };

  }

  updateNumber(value) {
    this.setState({ number: value });
  }

  render() {

    let self = this;

    let className = `${self.props.className} osc-button-component`;

    let number = parseInt(typeof self.props.number != 'undefined' ? self.props.number : self.state.number);
    let numberplatesHTML = null;
    if (number || number == 0) {
      className += ' osc-numberplate-button'
      numberplatesHTML = (<OpenStadComponentNumberplates number={number} ref={(el) => { self.numberplates = el; }}/>);
    }

    let iconHTML = null;
    if (self.config.icon) {
      let icon = typeof self.props.icon != 'undefined' ? self.props.icon : self.state.icon;

      console.log(icon);

      className += ' osc-icon-button'
      iconHTML = <div className="osc-icon"><img src={icon.url} style={{ width: icon.width, height: icon.height, marginTop: icon.top, marginLeft: icon.left }}/></div>
    }

    let labelHTML = null;
    if (self.config.label) {
      let label = typeof self.props.label != 'undefined' ? self.props.label : self.state.label;
      labelHTML = <div className="osc-button-label"><div className="osc-elipsis">{self.config.label}</div></div>
    }

    let url = typeof self.props.url != 'undefined' ? self.props.url : self.state.url;
    if (url) {
      return (
        <a href={url} id={self.divId} className={className}>
          {numberplatesHTML}
          {iconHTML}
          {labelHTML}
        </a>
      );
    }

    let onClick = typeof self.props.onClick != 'undefined' ? self.props.onClick : self.state.onClick || null;
    return (
      <div id={self.divId} onClick={onClick} className={className}>
        {numberplatesHTML}
        {iconHTML}
        {labelHTML}
      </div>
    );

  }

}
