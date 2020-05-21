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
      imageserver: {},
      titleMinLength: 10,
      titleMaxLength: 20,
      summaryMinLength: 20,
      summaryMaxLength: 140,
      descriptionMinLength: 140,
      descriptionMaxLength: 5000,
    };

		self.config = merge.recursive(self.defaultConfig, self.config, props.config || {})

    this.state = {
      formfields: {
        id: this.props.idea.id || '',
        title: this.props.idea.title || '',
        summary: this.props.idea.summary || '',
        description: this.props.idea.description || '',
        type: this.props.idea.extraData && this.props.idea.extraData.type || '',
        theme: this.props.idea.extraData && this.props.idea.extraData.theme || '',
  			userWhat: this.props.idea.extraData && this.props.idea.extraData['userWhat'],
  			userAge: this.props.idea.extraData && this.props.idea.extraData['userAge'],
        images: this.props.idea.extraData && this.props.idea.extraData.images || [],
        modBreak: this.props.idea.modBreak || '',
        user: this.props.idea.user || {},
      },
    };

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

    console.log('+++');
    console.log(formValues);
    let isValid = self.form.validate({ showErrors: true });

	  if ( !isValid  || !self.validateIdea() ) { // validateIdea doet nog locatie en images
      self.setState({ showFormErrorsWarning: true });
      return;
    }

    self.setState({ showFormErrorsWarning: false });

	  if (!self.config.api.isUserLoggedIn) return alert('Je bent niet ingelogd');

	  var url = self.config.api.url + '/api/site/' + self.config.siteId + '/idea';
      let headers = OpenStadComponentLibs.api.getHeaders(self.config);

	  var body = {
			title: formValues['title'],
			summary: formValues['summary'],
			description: formValues['description'],
      location: JSON.stringify({ "type": "Point", ...self.state.formfields['location'] }),
			extraData: {
				type: formValues['type'],
				theme: formValues['theme'],
  			images: self.state.formfields['images'],
  			userWhat: formValues['userWhat'],
  			userAge: formValues['userAge'],
			},
	  }

    console.log('====');
    console.log(body);

    if ( self.config.user && self.config.user.role == 'admin' ) {
      body.modBreak = self.state.formfields['modBreak'];
    }

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
    let formConfig = {
      "fields": [
        {
          name: "title",
          title: "Titel",
          value: this.state.formfields.title,
          description: "Geef uw inzending een duidelijke naam, zodat anderen deze gemakkelijk kunnen vinden en direct snappen waar het over gaat.",
          inputType: "input-with-counter",
			    minLength: self.config.titleMinLength,
			    maxLength: self.config.titleMaxLength,
          required: true,
        },{
          name: "type",
          title: "Gaat dit goed of kan dit beter?",
          value: this.state.formfields.type,
          description: "Wilt u deze inzending bestempelen als iets dat goed gaat of iets dat beter kan in de buurt?",
          inputType: "select",
          choices: [{
            "title": "Maak een keuze",
            "value": ""
          },{
            "title": "Dit gaat goed",
            "value": "Kans"
          },{
            "title": "Dit kan beter",
            "value": "Knelpunt"
          }],
          required: true,
        },{
          name: "theme",
          title: "Thema",
          value: this.state.formfields.theme,
          description: "Onder welk thema valt uw inzending?",
          inputType: "select",
          choices: [{
            "title": "Maak een keuze",
            "value": ""
          },{
            "title": "Dit gaat goed",
            "value": "Kans"
          },{
            "title": "Dit kan beter",
            "value": "Knelpunt"
          }],
          required: true,
        },{
          name: "summary",
          title: "Samenvatting",
          value: this.state.formfields.summary,
          description: "Geef hier eerst een korte samenvatting. In de volgende stap heeft u ruimte om uw inzending uitgebreider toe te lichten.",
          inputType: "textarea-with-counter",
			    minLength: self.config.summaryMinLength,
					maxLength: self.config.summaryMaxLength,
          required: true,
        },{
          name: "description",
          title: "Beschrijving",
          value: this.state.formfields.description,
          description: "Gebruik de ruimte hieronder om uw inzending uitgebreider te beschrijven.",
          inputType: "textarea-with-counter",
			    minLength: self.config.descriptionMinLength,
					maxLength: self.config.descriptionMaxLength,
          required: true,
        },{
          name: "image",
          title: "Afbeelding",
          value: this.state.formfields.image,
          description: "Deze moet nog",
          required: true,
        },{
          title: "Wilt u ons helpen",
          description: "We willen graag weten of we alle doelgroepen in de buurt bereiken. Daarom vragen we u of u in de buurt woont of werkt, of de buurt regelmatig bezoekt, en in welke leeftijdscategorie u valt. Wilt u dit liever niet delen? Kies dan de optie 'Zeg ik liever niet'.",
        },{
          name: "userWhat",
          title: "Woont of werkt u in de buurt?",
          value: this.state.formfields.userWhat,
          inputType: "select",
          choices: [{
            "title": "Maak een keuze",
            "value": ""
          },{
            title: "Ik woon in de buurt",
            value: "Ik woon in de buurt"
          },{
            title: "Ik werk in de buurt",
            value: "Ik werk in de buurt"
          },{
            title: "Ik ben een bezoeker van de buurt",
            value: "Ik ben een bezoeker van de buurt"
          },{
            title: "Anders",
            value: "Anders"
          },{
            title: "Zeg ik liever niet",
            value: "Zeg ik liever niet"
          }],
          required: true,
        },{
          name: "userAge",
          title: "Wat is uw leeftijd?",
          value: this.state.formfields.userAge,
          inputType: "select",
          choices: [{
            "title": "Maak een keuze",
            "value": ""
          },{
            title: "Jonger dan 18",
            value: "Jonger dan 18"
          },{
            title: "18 - 24",
            value: "18 - 24"
          },{
            title: "25 - 50",
            value: "25 - 50"
          },{
            title: "51 - 65",
            value: "51 - 65"
          },{
            title: "65+",
            value: "65+"
          },{
            title: "Zeg ik liever niet",
            value: "Zeg ik liever niet"
          }],
          required: true,
        }
      ],
    }
    if (self.config.user && self.config.user.role == 'admin') {
      formConfig.fields.push({
        name: "modBreak",
        title: "Moderator reactie",
        value: this.state.formfields.modBreak,
        inputType: "textarea-with-counter",
			  minLength: 0,
				maxLength: 2000,
      })
    }
    formHTML = (
      <OpenStadComponentForms.Form config={ formConfig }  ref={(el) => { self.form = el;}}/>
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
