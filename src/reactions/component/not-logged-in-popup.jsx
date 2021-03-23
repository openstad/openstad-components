'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentModalPopup from '../../modal-popup/index.jsx';

export default class OpenStadComponentReactionForm extends OpenStadComponent {

  constructor(props) {
    super(props, {
      loginUrl: '',
    });
  }
  
  showPopup() {
		// dispatch an event
		var event = new window.CustomEvent('osc-show-modal-popup', { detail: {
      title: 'Login om verder te gaan',
      text: 'Login om een argument te plaatsen, te reageren of een argument te liken',
      buttonAction: () => { OpenStadComponentLibs.localStorage.set('osc-reactions-login-pending', true); document.location.href = this.config.loginUrl; },
      buttonText: 'Inloggen',
    }});
		document.dispatchEvent(event);
  }
  
  render() {
    return (
      <OpenStadComponentModalPopup ref={el => (self.modalPopup = el)}/>
    );
  }

}
