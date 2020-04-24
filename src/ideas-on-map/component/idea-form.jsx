import React from 'react';
import OpenStadComponentImageUpload from './openstad-component-formelements/image-upload.jsx';
import OpenStadComponentFormelementsInputWithCounter from './openstad-component-formelements/input-with-counter.jsx';

'use strict';

export default class IdeasForm extends React.Component {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {
      user: {},
			ideaId: null,
      titleMinLength: 10,
      titleMaxLength: 20,
      summaryMinLength: 20,
      summaryMaxLength: 140,
      descriptionMinLength: 140,
      descriptionMaxLength: 5000,
    };

    // todo: normaal oplossen
		this.config = Object.assign(defaultConfig, this.config, this.props.config || {})

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

    this.handleFieldChange = this.handleFieldChange.bind(this);

  }

	componentDidMount(prevProps, prevState) {
	}

  handleFieldChange(name, value) {
    let state = { ...this.state };
    state.formfields[name] = value;
    this.setState(state)
    this.dispatchUpdateEditIdea(state.formfields)

	  // tmp: type
	  if (name == 'type') {
      if (this.state.formfields['type']) {
		    this['form-warning-type'].style.display = 'none';
	    }
	  }

	  // tmp: theme
	  if (name == 'theme') {
      if (this.state.formfields['theme']) {
		    this['form-warning-theme'].style.display = 'none';
	    }
	  }

	  // tmp: userWhat
	  if (name == 'userWhat') {
	    if (this.state.formfields['userWhat']) {
		    this['form-warning-userWhat'].style.display = 'none';
	    }
	  }

	  // tmp: userAge
	  if (name == 'userAge') {
	    if (this.state.formfields['userAge']) {
		    this['form-warning-userAge'].style.display = 'none';
	    }
	  }

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
		var event = new CustomEvent('updateEditIdea', { detail: { idea } });
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

	  // title
	  if (!self.titleField.validate()) {
		  isValid = false;
	  }

	  // summary
	  if (!self.summaryField.validate()) {
		  isValid = false;
	  }

	  // description
	  if (!self.descriptionField.validate()) {
		  isValid = false;
	  }

	  // type
	  if (!self.state.formfields['type']) {
		  self['form-warning-type'].style.display = 'block';
		  isValid = false;
	  } else {
		  self['form-warning-type'].style.display = 'none';
	  }

	  // theme
	  if (!self.state.formfields['theme']) {
		  self['form-warning-theme'].style.display = 'block';
		  isValid = false;
	  } else {
		  self['form-warning-theme'].style.display = 'none';
	  }

	  // userWhat
	  if (!self.state.formfields['userWhat']) {
		  self['form-warning-userWhat'].style.display = 'block';
		  isValid = false;
	  } else {
		  self['form-warning-userWhat'].style.display = 'none';
	  }

	  // userAge
	  if (!self.state.formfields['userAge']) {
		  self['form-warning-userAge'].style.display = 'block';
		  isValid = false;
	  } else {
		  self['form-warning-userAge'].style.display = 'none';
	  }

	  // images
	  if (!self.imageField.validate()) {
		  self['form-warning-image'].style.display = 'block';
		  isValid = false;
	  } else {
		  self['form-warning-image'].style.display = 'none';
    }

	  // time ?

	  return isValid;

  }

  submitIdea() {

    var self = this;

	  if ( !self.validateIdea() ) {
      self.setState({ showFormErrorsWarning: true });
      return;
    }

    self.setState({ showFormErrorsWarning: false });

	  if (!self.config.api.isUserLoggedIn) return alert('Je bent niet ingelogd');

	  var url = self.config.api.url + '/api/site/' + self.config.siteId + '/idea';
		let headers = Object.assign(( self.config.api && self.config.api.headers || {} ), { "Content-type": "application/json" });

	  var body = {
			title: self.state.formfields['title'],
			summary: self.state.formfields['summary'],
			description: self.state.formfields['description'],
      location: JSON.stringify({ "type": "Point", ...self.state.formfields['location'] }),
			extraData: {
				type: self.state.formfields['type'],
				theme: self.state.formfields['theme'],
  			images: self.state.formfields['images'],
  			userWhat: self.state.formfields['userWhat'],
  			userAge: self.state.formfields['userAge'],
			},
	  }

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
		    var event = new CustomEvent('newIdeaStored', { detail: { idea: json } });
		    document.dispatchEvent(event);
      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });

  }
  
	render() {

    let self = this;

    let modBreakHTML = null
    if (self.config.user && self.config.user.role == 'admin') {
      modBreakHTML = (
          <div className="osc-form-group">
					  <h2>
						  Moderator reactie
					  </h2>
				    <OpenStadComponentFormelementsInputWithCounter ref={el => (self.input = el)} config={{ name: "modBreak", inputType: 'textarea', minLength: 0, maxLength: 2000 }} value={this.state.formfields.modBreak} onChange={(data) => self.handleFieldChange('modBreak', data.value)} ref={el => (self.modBreakField = el)}/>
          </div>
      );
    }

    let formErrorsWarningHTML = null;
    if (self.state.showFormErrorsWarning) {
      formErrorsWarningHTML = (
        <div className="osc-form-errors-warning">
          Niet alle velden zijn correct ingevuld. Scroll naar boven om te zien wat er mis gaat.
        </div>
      );
    }

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

          <div className="osc-form-group">
					  <h2>
						  Titel
					  </h2>
					  <div className="osc-form-info">
						  Geef uw inzending een duidelijke naam, zodat anderen deze gemakkelijk kunnen vinden en direct snappen waar het over gaat.
					  </div>
				    <OpenStadComponentFormelementsInputWithCounter ref={el => (self.input = el)} config={{ name: "titel", minLength: self.config.titleMinLength, maxLength: self.config.titleMaxLength }} value={this.state.formfields.title} onChange={(data) => self.handleFieldChange('title', data.value)} ref={el => (self.titleField = el)}/>
          </div>

          <div className="osc-form-group">
					  <h2>
						  Gaat dit goed of kan dit beter?
					  </h2>
					  <div className="osc-form-info">
						  Wilt u deze inzending bestempelen als iets dat goed gaat of iets dat beter kan in de buurt?
					  </div>
            <select className="osc-default-select" value={this.state.formfields.type} onChange={() => self.handleFieldChange('type', self.typeField.value)} ref={el => (self.typeField = el)}>
              <option value="">Maak een keuze</option>
              <option value="Kans">Dit gaat goed</option>
              <option value="Knelpunt">Dit kan beter</option>
            </select>
						<div className="osc-form-warning" style={{ display: 'none' }} ref={ el => this['form-warning-type'] = el  }>Je hebt nog geen keuze gemaakt</div>
          </div>

          <div className="osc-form-group">
					  <h2>
						  Thema
					  </h2>
					  <div className="osc-form-info">
						  Onder welk thema valt uw inzending?
					  </div>
            <select className="osc-default-select" value={this.state.formfields.theme} onChange={() => self.handleFieldChange('theme', self.themeField.value)} ref={el => (self.themeField = el)}>
              <option value="">Maak een keuze</option>
              <option value="Auto">Auto</option>
              <option value="Fiets">Fiets</option>
              <option value="Voetganger">Voetganger</option>
              <option value="Recreëren">Recreëren</option>
              <option value="Schoon">Schoon</option>
              <option value="Groen">Groen</option>
              <option value="Geluid">Geluid</option>
              <option value="Overig">Overig</option>
            </select>
						<div className="osc-form-warning" style={{ display: 'none' }} ref={ el => this['form-warning-theme'] = el  }>Je hebt geen thema geseleceteerd</div>
          </div>

          <div className="osc-form-group">
					  <h2>
						  Samenvatting
					  </h2>
					  <div className="osc-form-info">
              Geef hier eerst een korte samenvatting. In de volgende stap heeft u ruimte om uw inzending uitgebreider toe te lichten.
					  </div>
				    <OpenStadComponentFormelementsInputWithCounter ref={el => (self.input = el)} config={{ name: "samenvatting", inputType: 'textarea', minLength: self.config.summaryMinLength, maxLength: self.config.summaryMaxLength }} value={this.state.formfields.summary} onChange={(data) => self.handleFieldChange('summary', data.value)} ref={el => (self.summaryField = el)}/>
          </div>

          <div className="osc-form-group">
					  <h2>
						  Beschrijving
					  </h2>
					  <div className="osc-form-info">
						  Gebruik de ruimte hieronder om uw inzending uitgebreider te beschrijven.
					  </div>
				    <OpenStadComponentFormelementsInputWithCounter ref={el => (self.input = el)} config={{ name: "bechrijving", inputType: 'textarea', minLength: self.config.descriptionMinLength, maxLength: self.config.descriptionMaxLength }} value={this.state.formfields.description} onChange={(data) => self.handleFieldChange('description', data.value)} ref={el => (self.descriptionField = el)}/>
          </div>

          <div className="osc-form-group">
            <OpenStadComponentImageUpload config={{ title: 'Afbeeldingen', infoText: 'Let op: Stuur alleen een foto in die u zelf gemaakt heeft. Foto’s van anderen kunnen auteursrechtelijk beschermd zijn. U heeft toestemming nodig van de fotograaf om die foto te uploaden.' }} name="images" value={this.state.formfields.title} handleFieldChange={self.handleFieldChange} ref={el => (self.imageField = el)}/>
				    <div className="osc-form-warning" style={{ display: 'none' }} ref={ el => this['form-warning-image'] = el  }>Afbeelding upload is nog niet afgerond</div>
          </div>

          <br/>
          <div className="osc-form-group">
					  <h2>
						  Wilt u ons helpen?
					  </h2>
					  <div className="osc-form-info">
						  We willen graag weten of we alle doelgroepen in de buurt bereiken. Daarom vragen we u of u in de buurt woont of werkt, of de buurt regelmatig bezoekt, en in welke leeftijdscategorie u valt. Wilt u dit liever niet delen? Kies dan de optie 'Zeg ik liever niet'.
					  </div>
					  <h4>
						  Woont of werkt u in de buurt?
					  </h4>
            <select className="osc-default-select" value={this.state.formfields.userWhat} onChange={() => self.handleFieldChange('userWhat', self.userWhatField.value)} ref={el => (self.userWhatField = el)}>
              <option value="">Maak een keuze</option>
              <option value="Ik woon in de buurt">Ik woon in de buurt</option>
              <option value="Ik werk in de buurt">Ik werk in de buurt</option>
              <option value="Ik ben een bezoeker van de buurt">Ik ben een bezoeker van de buurt</option>
              <option value="Anders">Anders</option>
              <option value="Zeg ik liever niet">Zeg ik liever niet</option>
            </select>
						<div className="osc-form-warning" style={{ display: 'none' }} ref={ el => this['form-warning-userWhat'] = el  }>Je hebt nog geen keuze gemaakt</div>
          </div>
          <div className="osc-form-group">
					  <h4>
						  Wat is uw leeftijd?
					  </h4>
            <select className="osc-default-select" value={this.state.formfields.userAge} onChange={() => self.handleFieldChange('userAge', self.userAgeField.value)} ref={el => (self.userAgeField = el)}>
              <option value="">Maak een keuze</option>
              <option value="Jonger dan 18">Jonger dan 18</option>
              <option value="18 - 24">18 - 24</option>
              <option value="25 - 50">25 - 50</option>
              <option value="51 - 65">51 - 65</option>
              <option value="65+">65+</option>
              <option value="Zeg ik liever niet">Zeg ik liever niet</option>
            </select>
						<div className="osc-form-warning" style={{ display: 'none' }} ref={ el => this['form-warning-userAge'] = el  }>Je hebt nog geen keuze gemaakt</div>
          </div>

          {modBreakHTML}

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
