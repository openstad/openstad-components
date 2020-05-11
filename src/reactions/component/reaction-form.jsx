import merge from 'merge';
import React from 'react';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';

import OpenStadComponentForms from '../../forms/index.jsx';

'use strict';

export default class OpenStadComponentReactionForm extends OpenStadComponent {

  constructor(props) {
    super(props);

    let self = this;

    self.defaultConfig = {
      argumentId: null,
      api: {
        url: null,
        headers: null,
      },
      user: {},
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      requiredUserRole: 'member',
      formIntro: '',
      placeholder: '',
    };

    self.config = merge.recursive(self.defaultConfig, props.config || {});

    self.state = {
      description: self.config.description || '',
      isValid: false,
      isBusy: false,
    };

  }

  handleOnChange(data) {
    data = data || {};
    if (data.description) data.isValid = this.description.isValid();
    this.setState(data);
  }

  canSubmit() {
    let requiredUserRole = this.config.requiredUserRole;
    let userRole = this.props.user && this.props.user.role;
    // todo: nieuwe rollen structuur
    return  requiredUserRole == 'anonymous' && userRole  ||
             requiredUserRole == 'member' && ( userRole == 'member' || userRole == 'admin' )  ||
             requiredUserRole == 'admin' && userRole == 'admin';
  }

  submitForm() {

    let self = this;

    self.setState({ isBusy: true }, () => {

      let isValid = self.description.validate({ showWarning: true });
      if (!isValid) {
        self.setState({ isBusy: false, isValid: false });
        return;
      }

      if (!self.canSubmit()) return alert('Je bent niet ingelogd');

      let url = `${self.config.api && self.config.api.url   }/api/site/${  self.config.siteId  }/idea/${  self.config.ideaId  }/argument${   self.config.argumentId ? `/${  self.config.argumentId}` : ''}`;
      let headers = OpenStadComponentLibs.api.getHeaders(self.config);
      let method = self.config.argumentId ? 'PUT' : 'POST';

      let body = {
        parentId: self.config.parentId,
        sentiment: self.config.sentiment,
        description: self.state.description,
      };

      fetch(url, {
        method,
        headers,
        body: JSON.stringify(body),
      })
        .then( function(response) {
          if (response.ok) {
            return response.json();
          }
          throw response.text();
        })
        .then(function(json) {

          if (typeof self.config.onSubmit == 'function') {
            self.config.onSubmit({ description: self.state.description });
          }

          self.setState({ description: '', isBusy: false, isValid: false }, () => {
            if (self.config.argumentId) {
		          let event = new CustomEvent('osc-reaction-edited', { detail: json });
		          document.dispatchEvent(event);
            } else {
		          let event = new CustomEvent('osc-new-reaction-stored', { detail: json });
		          document.dispatchEvent(event);
            }
          });


        })
        .catch(function(error) {
          error.then(function(messages) { alert(messages); return console.log(messages);} );
          self.setState({ isBusy: false, isValid: false });
        });

    });

  }

  render() {

    let self = this;

    let config = {
      descriptionMinLength: self.config.descriptionMinLength || 30,
      descriptionMaxLength: self.config.descriptionMaxLength || 500,
    };

    let formIntro = null;
    if (self.config.formIntro) {
      formIntro = (
        <div className="osc-intro">{self.config.formIntro}</div>
      );
    }

    let submitButtonHTML = null;
    if (self.canSubmit()) {
      submitButtonHTML = (
        <div className="osc-align-right-container">
			    <button onClick={(e) => { if (!self.state.isBusy) self.submitForm(); }} className={`osc-button-blue${ !self.state.isValid || self.state.isBusy ? ' osc-disabled' : '' }`} >Verzenden</button>
        </div>
      );
    } else {
      submitButtonHTML = (
        <div className="osc-align-right-container">
          <button onClick={() => { OpenStadComponentLibs.localStorage.set('osc-reactions-login-pending', true); document.location.href = self.config.loginUrl; }} className="osc-button-blue osc-not-logged-in-button">Inloggen</button>
        </div>
      );
    }

    return (
      <div id={self.divId} className="" ref={el => (self.instance = el)} >
        {formIntro}
        <OpenStadComponentForms.InputWithCounter disabled={this.canSubmit() ? null : true} config={{ inputType: 'textarea', minLength: config.descriptionMinLength, maxLength: config.descriptionMaxLength, placeholder: self.config.placeholder }} value={self.state.description} onChange={ data => self.handleOnChange({ description: data.value }) } ref={el => (self.description = el)}/>
        {submitButtonHTML}
      </div>
    );

  }

}
