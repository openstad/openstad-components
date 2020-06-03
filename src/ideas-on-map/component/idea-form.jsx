import merge from 'merge';
import React from 'react';

import OpenStadComponentLibs from '../../libs/index.jsx';

import OpenStadComponentForms from '../../forms/index.jsx';

// import OpenStadComponentImageUpload from './openstad-component-formelements/image-upload.jsx';
// import OpenStadComponentFormelementsInputWithCounter from './openstad-component-formelements/input-with-counter.jsx';

'use strict';

export default class IdeasForm extends React.Component {

  constructor(props) {

    super(props);

		let self = this;

		self.defaultConfig = {
      user: {},
			ideaId: null,
      titleMinLength: 10,
      titleMaxLength: 20,
      summaryMinLength: 20,
      summaryMaxLength: 140,
      descriptionMinLength: 140,
      descriptionMaxLength: 5000,
      fields: [],
    };
		self.config = merge.recursive(self.defaultConfig, self.config, props.config || {})

    let fields = self.config.fields;

    if (!self.props.idea.extraData) self.props.idea.extraData = {};

    if (fields) {

      let state = { formfields: {
        id: self.props.idea.id || '',
        user: self.props.idea.user || {},
      }};
      fields.forEach((field) => {
        if (field.name) {
          state.formfields[field.name] = eval('self.props.idea.' + field.name);
          field.value = eval('self.props.idea.' + field.name);
        }
      });
      self.state = state;

      let titleField = fields.find(field => field.name == 'title');
      if (titleField) {
		    titleField.minLength = self.config.titleMinLength;
		    titleField.maxLength = self.config.titleMaxLength;
      }

      let summaryField = fields.find(field => field.name == 'summary');
      if (summaryField) {
		    summaryField.minLength = self.config.summaryMinLength;
		    summaryField.maxLength = self.config.summaryMaxLength;
      }

      let descriptionField = fields.find(field => field.name == 'description');
      if (descriptionField) {
		    descriptionField.minLength = self.config.descriptionMinLength;
		    descriptionField.maxLength = self.config.descriptionMaxLength;
      }

      let imageField = fields.find(field => field.inputType == 'image-upload'); // TODO: multiple images?
      if (imageField) {
		    imageField.imageserver = self.config.imageserver;
      }

      // dit moet anders want nu tekent hij er elke keer 1 bij
      // if (self.config.user && self.config.user.role == 'admin') {
      //   self.config.fields.push({
      //     name: "modBreak",
      //     title: "Moderator reactie",
      //     value: state.formfields.modBreak,
      //     inputType: "textarea-with-counter",
			//     minLength: 0,
			//     maxLength: 2000,
      //   })
      // }

    }
    
  }

	componentDidMount(prevProps, prevState) {
  }

  // todo: als hanlefieldchange met meerder waarden in een { key: value } formaat gaat werken dan kan deze weg
  handleLocationChange({location, address}) {
    let state = { ...this.state };
    state.formfields['location'] = { coordinates: [ location.lat, location.lng ] };
    state.formfields['address'] = address;
    this.setState(state)
    this.dispatchUpdateEditIdea(state.formfields)
  }

  dispatchUpdateEditIdea(idea) {
		var event = new window.CustomEvent('updateEditIdea', { detail: { idea } });
		document.dispatchEvent(event);
  }

  validateIdea() {

    var self = this;
    
	  var isValid = true;

	  // location
	  if (self.state.formfields['location']) {
			self['form-warning-location'].style.display = 'none';
		} else {
			self['form-warning-location'].style.display = 'block';
			isValid = false;
		}

	  // // images
	  // if (!self.imageField.validate()) {
		//   self['form-warning-image'].style.display = 'block';
		//   isValid = false;
	  // } else {
		//   self['form-warning-image'].style.display = 'none';
    // }

	  return isValid;

  }

  submitIdea() {

    let self = this;

    let formValues = self.form.getValues();
    // console.log(formValues);

    let isValid = self.form.validate({ showErrors: true });

	  if ( !isValid  || !self.validateIdea() ) { // validateIdea doet nog locatie en images
      self.setState({ showFormErrorsWarning: true });
      return;
    }

    self.setState({ showFormErrorsWarning: false });

	  if (!self.config.api.isUserLoggedIn) return alert('Je bent niet ingelogd');

	  var url = self.config.api.url + '/api/site/' + self.config.siteId + '/idea';
      let headers = OpenStadComponentLibs.api.getHeaders(self.config);


    let body = {
      location: JSON.stringify({ "type": "Point", ...self.state.formfields['location'] }),
    };
    Object.keys(formValues).forEach(key => {
      let match = key.match(/^extraData\.(.+)/)
      if (match) {
        if (!body.extraData) body.extraData = {};
        body.extraData[match[1]] = formValues[key];
      } else {
        body[key] = formValues[key];
      }
    });

    // if ( self.config.user && self.config.user.role == 'admin' ) {
    //   body.modBreak = self.state.formfields['modBreak'];
    // }

    console.log('--------------------');
    console.log(body);

    let method = 'POST';
    if (typeof this.state.formfields.id == 'number') {
      method = 'PUT';
      url = url + '/' + this.state.formfields.id;
    }

    fetch(url, {
      method,
      headers,
      body: JSON.stringify(body) // body data type must match "Content-Type" header
    })
      .then((response) => {
        if (!response.ok) throw Error(response)
        return response.json();
      })
      .then( json => {
		    var event = new window.CustomEvent('newIdeaStored', { detail: { idea: json } });
		    document.dispatchEvent(event);
      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });

  }
  
	render() {

    let self = this;

    let formErrorsWarningHTML = null;
    if (self.state.showFormErrorsWarning) {
      formErrorsWarningHTML = (
        <div className="osc-form-errors-warning">
          Niet alle velden zijn correct ingevuld. Scroll naar boven om te zien wat er mis gaat.
        </div>
      );
    }

    let formHTML = null;
    formHTML = (
      <OpenStadComponentForms.Form config={ self.config }  ref={(el) => { self.form = el;}}/>
    )

    return (
			<div id={self.id} className={self.props.className || 'osc-info-block-idea-form'} ref={el => (self.instance = el)}>

			  <div className="osc-spacer"></div>

        <form className="osc-form">

				  <h1>Nieuw punt toevoegen</h1>

          <div className="osc-form-group">
					  <h2>
              Naam
					  </h2>
            {self.state.formfields.user && self.state.formfields.user.fullName}
          </div>

          <div className="osc-form-group">
					  <h2>
            Een locatie vlakbij
					  </h2>
            {self.state.formfields.address || 'Geen adres gevonden'}
						<div className="osc-form-warning" style={{ display: 'none' }} ref={ el => this['form-warning-location'] = el  }>Geen locatie geselecteerd</div>
          </div>

          {formHTML}

          <br/>
          {formErrorsWarningHTML}
          <br/>
          <a className="osc-button osc-button-blue" onClick={() => self.submitIdea()} ref={el => (self.submitButton = el)}>Versturen</a>
          <br/>
          <br/>
          <br/>

        </form>

			</div>
    );

  }

}
