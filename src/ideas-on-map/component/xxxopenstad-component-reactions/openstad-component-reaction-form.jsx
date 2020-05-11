import merge from 'merge';
import React from 'react';
import ReactDOM from 'react-dom';

import OpenStadComponentLibs from '../../../libs/index.jsx';
import OpenStadComponentFormelementsInputWithCounter from '../openstad-component-formelements/input-with-counter.jsx';

'use strict';

export default class OpenStadComponentReactions extends React.Component {

  constructor(props) {
    super(props);

		let self = this;
		self.id = props.id || 'osc-reaction-form-' + parseInt( 1000000 * Math.random() )

		self.defaultConfig = {
      argumentId: null,
      api: {
        url: null,
        headers: null,
        isUserLoggedIn: false,
      },
      user: {},
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      requiredUserRole: 'member',
      formIntro: '',
      placeholder: '',
		};

		self.config = merge.recursive(self.defaultConfig, props.config || {})

    self.state = {
      description: self.config.description || '',
		};

  }

	handleOnChange(data) {
    data = data || {};
		this.setState(data)
	}

  isUserLoggedIn() {
    let requiredUserRole = this.config.requiredUserRole;
    let userRole = this.config.user && this.config.user.role;
    return this.config.api.isUserLoggedIn && 
      (( requiredUserRole == 'anonymous' && userRole ) ||
       ( requiredUserRole == 'member' && ( userRole == 'member' || userRole == 'admin' ) ) ||
       ( requiredUserRole == 'admin' && userRole == 'admin' ));
      }

	submitForm() {

		let self = this;

		let isValid = self.description.validate();
		if (!isValid) return;

	  if (!self.isUserLoggedIn()) return alert('Je bent niet ingelogd');

		let url = ( self.config.api && self.config.api.url ) + "/api/site/" + self.config.siteId + "/idea/" + self.config.ideaId + "/argument" + ( self.config.argumentId ? '/' + self.config.argumentId : ''  );
    let headers = OpenStadComponentLibs.api.getHeaders(self.config);
    let method = self.config.argumentId ? 'PUT' : 'POST';

		let body = {
			sentiment: self.config.sentiment,
			description: self.state.description,
		}

		fetch(url, {
			method,
      headers,
			body: JSON.stringify(body),
		})
			.then( function (response) {
				if (response.ok) {
					return response.json()
				}
				throw response.text();
			})
			.then(function (json) {

				if (typeof self.config.onSubmit == 'function') {
					self.config.onSubmit({ description: self.state.description });
				}

        self.setState({ description: '' }, () => {
		      var event = new window.CustomEvent('reactionStored', { detail: json });
		      document.dispatchEvent(event);
        });


			})
			.catch(function (error) {
				console.log(error);
				error.then(function (messages) { return console.log(messages)} );
			});

	}

	render() {

		let self = this;

		let config = {
			descriptionMinLength: self.config.descriptionMinLength || 30,
			descriptionMaxLength: self.config.descriptionMaxLength || 500,
		}

    // todo: config of je ingelogd moet zijn
    let submitButtonHTML = (
      <div className="osc-align-right-container">
        <button onClick={() => { OpenStadComponentLibs.localStorage.set('osc-reactions-login-pending', true); document.location.href = '/oauth/login?returnTo=' + encodeURIComponent(document.location.href) }} className="osc-button-blue osc-not-logged-in-button">Inloggen</button>
      </div>
    );
    if (self.isUserLoggedIn()) {
      submitButtonHTML = (
        <div className="osc-align-right-container">
			    <button onClick={e => self.submitForm()} className="osc-button-blue" disabled={ self.state.isValid ? true : null }>Verzenden</button>
        </div>
      );
    }

    let formIntro = null;
    if (self.config.formIntro) {
      formIntro = (
        <div className="osc-intro">{self.config.formIntro}</div>
      );
    }

    return (
			<div id={self.id} className="osc-reaction-form osc-form" ref={el => (self.instance = el)} >
        {formIntro}
        <div className="osc-form-group">
				  <OpenStadComponentFormelementsInputWithCounter ref={el => (self.input = el)} disabled={this.isUserLoggedIn() ? null : true} config={{ inputType: 'textarea', minLength: config.descriptionMinLength, maxLength: config.descriptionMaxLength, placeholder: self.config.placeholder }} value={self.state.description} onChange={ (data) => self.handleOnChange({ description: data.value }) } ref={el => (self.description = el)}/>
        </div>
        {submitButtonHTML}
			</div>
    );

  }

}
