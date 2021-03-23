'use strict';

import OpenStadComponent from '../../component/index.jsx';

export default class OpenStadComponentModalPopup extends OpenStadComponent {

  constructor(props) {

    super(props, {});

    this.state = {
      width: 300,
      height: 200,
      title: 'Titel',
      text: 'Tekst',
      buttonAction: () => alert("Knop actie"),
      buttonText: 'Knop tekst',
      cancelText: 'Annuleren',
    };

  }

	componentDidMount(prevProps, prevState) {

    let self = this;

    // start on event
    self.showModalPopupListener = function(event) {
      self.showModalPopup(event.detail);
    };
		document.addEventListener('osc-show-modal-popup', self.showModalPopupListener);

    // move to root
    document.body.appendChild(this.instance);

  }

  componentWillUnmount() {
		document.removeEventListener('osc-show-modal-popup', this.showModalPopupListener);
  }

  showModalPopup(data) {
    let self = this;
    self.setState({ ...data }, () => {
      self.instance.style.display = 'block'
    })
  }

  hideModalPopup() {
    this.instance.style.display = 'none'
  }

	render() {

		let self = this;

    let content = self.state.content || null;
    if (!content) {
      content = (
        <div className="osc-modal-popup-content">
          <div className="osc-modal-popup-header">
            {self.state.title}
          </div>
          <div className="osc-modal-popup-text">
            {self.state.text}
          </div>
          <div className="osc-modal-popup-buttons">
            <button onClick={self.state.buttonAction} className="osc-button-blue">{self.state.buttonText}</button>
            <button onClick={() => self.hideModalPopup()} className="osc-button-white">Annuleren</button>
          </div>
        </div>
      );
    }

    return (
			<div id="osc-modal-popup-container" ref={el => (self.instance = el)}>
        <div id="osc-modal-popup" style={{ top: `calc(50% - ( ${self.state.height2} / 2 )px)`, left: `calc(50% - ( ${self.state.width} / 2 )px)`, width: self.state.width, height: self.state.height }}>
          {content}
          <div className="osc-close-button" onClick={() => self.hideModalPopup()}></div>
			  </div>
			</div>
    );

  }

}

