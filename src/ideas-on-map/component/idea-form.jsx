'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentForms from '../../forms/index.jsx';

// import OpenStadComponentImageUpload from './openstad-component-formelements/image-upload.jsx';
// import OpenStadComponentFormelementsInputWithCounter from './openstad-component-formelements/input-with-counter.jsx';

'use strict';

export default class IdeasForm extends OpenStadComponent {

  constructor(props) {

    super(props, {
      user: {},
			ideaId: null,
      idea: {
        titleMinLength: 10,
        titleMaxLength: 20,
        summaryMinLength: 20,
        summaryMaxLength: 140,
        descriptionMinLength: 140,
        descriptionMaxLength: 5000,
        fields: [],
      },
    });

		let self = this;

    let fields = self.config.idea.fields = [ ...self.config.idea.fields ];

    fields.forEach((field) => {
		  if ( field.inputType ==	 "image-upload" ) {
			  field.allowMultiple = self.config.image && self.config.image.allowMultipleImages;
		  }
	  });
    

    if (!self.props.idea.extraData) self.props.idea.extraData = {};

    let state = {
      formfields: {
        id: self.props.idea.id || '',
        user: self.props.idea.user || {},
      },
      showFormErrorsWarning: false,
      isBusy: false,
    };

    fields.forEach((field) => {
      if (field.name) {
        state.formfields[field.name] = eval('self.props.idea.' + field.name);
        field.value = eval('self.props.idea.' + field.name);
      }
    });

    let titleField = fields.find(field => field.name == 'title');
    if (titleField) {
		  titleField.minLength = self.config.idea.titleMinLength;
		  titleField.maxLength = self.config.idea.titleMaxLength;
    }

    let summaryField = fields.find(field => field.name == 'summary');
    if (summaryField) {
		  summaryField.minLength = self.config.idea.summaryMinLength;
		  summaryField.maxLength = self.config.idea.summaryMaxLength;
    }

    let descriptionField = fields.find(field => field.name == 'description');
    if (descriptionField) {
		  descriptionField.minLength = self.config.idea.descriptionMinLength;
		  descriptionField.maxLength = self.config.idea.descriptionMaxLength;
    }

    let imageField = fields.find(field => field.inputType == 'image-upload'); // TODO: multiple images?
    if (imageField) {
		  imageField.config = imageField.config || {};
		  imageField.config.image = self.config.image;
    }

    if (OpenStadComponentLibs.user.hasRole( self.config.user, 'editor' ) ) {

      // typeId
      if (self.config.types && self.config.typeField == 'typeId') {
        let choices = [];
        self.config.types.forEach(type => {
          let typeDef = type;
          if (!typeDef.auth || ( typeDef.auth.createableBy && OpenStadComponentLibs.user.hasRole( self.config.user, typeDef.auth.createableBy ) )) {
            choices.push({ title: typeDef.name, value: typeDef.id || typeDef.value})
          }
        });
        self.config.idea.fields.push({
				  name: "typeId",
				  title: "Type inzending",
				  value: self.props.idea.typeId,
          inputType: "multiple-choice",
          choices
			  })
        state.formfields.typeId = self.props.idea.typeId;
      }

      // moderator
      self.config.idea.fields.push({
				name: "modBreak",
				title: "Moderator reactie",
				value: self.props.idea.modBreak,
				inputType: "textarea-with-counter",
				minLength: 0,
				maxLength: 2000,
			})
      state.formfields.modBreak = self.props.idea.modBreak;

    } else {

      // hidden: typeId
      if (self.config.types && self.config.typeField == 'typeId') {
        self.config.idea.fields.push({
				  name: "typeId",
				  value: self.props.idea.typeId,
				  inputType: "hidden",
			  })
        state.formfields.typeId = self.props.idea.typeId;
      }

    }

    self.state = state;

  }

	componentDidMount(prevProps, prevState) {

    let self = this;

		self.updateLocationListener = function(event) {
      self.updateLocation(event.detail && event.detail.location);
    }
    document.addEventListener('osc-update-location', self.updateLocationListener);

  }

  componentWillUnmount() {
    document.removeEventListener('osc-update-location', this.updateLocationListener);
  }

  updateLocation(location) {
    if (!location) return;
    let state = { ...this.state };
    state.formfields['location'] = { coordinates: [ location.lat, location.lng ] };
    state.formfields['address'] = location.address;
    this.setState(state)
    // this.dispatchUpdateEditIdea(state.formfields)
  }

  // ik denk dat dit oud is
  // dispatchUpdateEditIdea(idea) {
	//   var event = new window.CustomEvent('osc-update-edit-idea', { detail: { idea } });
	//   document.dispatchEvent(event);
  // }

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

    self.setState({ isBusy: true }, () => {

      let formValues = self.form.getValues();

      let isValid = self.form.validate({ showErrors: true, scrollTo: true });

	    if ( !self.validateIdea() || !isValid ) { // validateIdea doet nog locatie en images
        self.setState({ isBusy: false, showFormErrorsWarning: true });
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
          if (!response.ok) {
            throw response;
          }
          return response.json();
        })
        .then( json => {
          self.setState({ isBusy: false }, () => {
		        var event = new window.CustomEvent('osc-idea-stored', { detail: { idea: json } });
		        document.dispatchEvent(event);
          })
        })
        .catch((err) => {
          console.log('Niet goed');
          console.log(err);
          if ( typeof err.json == 'function' ) {
            err.json().then(json => self.setState({ isBusy: false, showFormErrorsWarning: json.message }) );
          } else {
            self.setState({ isBusy: false, showFormErrorsWarning: err.message || err })
          }
        });
    })
    
  }
  
	render() {

    let self = this;

    let formErrorsWarningHTML = null;
    if (self.state.showFormErrorsWarning) {
      let text = 'Niet alle velden zijn correct ingevuld. Scroll naar boven om te zien wat er mis gaat.';
      if (typeof self.state.showFormErrorsWarning == 'string') {
        text = self.state.showFormErrorsWarning;
      }
      formErrorsWarningHTML = (
        <div className="osc-form-errors-warning">{ text }</div>
      );
    }

    let formHTML = null;
    formHTML = (
      <OpenStadComponentForms.Form config={{ fields: self.config.idea.fields }} values={{ typeId: self.state.formfields.typeId /* typeId is hidden */ }} ref={(el) => { self.form = el;}}/>
    )

    return (
			<div id={self.id} className={self.props.className || 'osc-infobar-idea-form'} ref={el => (self.instance = el)}>

			  <div className="osc-spacer"></div>

        <form className="osc-form">

				  <h1>Nieuw punt toevoegen</h1>

          <div className="osc-form-group">
					  <h2>
              Naam
					  </h2>
            {self.state.formfields.user && self.state.formfields.user.displayName}
          </div>

          <div className="osc-form-group">
					  <h2>
            Een locatie vlakbij
					  </h2>
            {self.state.formfields.address || 'Adres wordt gezocht...'}
						<div className="osc-form-warning" style={{ display: 'none' }} ref={ el => this['form-warning-location'] = el  }>Geen locatie geselecteerd</div>
          </div>

          {formHTML}

          <br/>
          {formErrorsWarningHTML}
          <br/>
          <a className={`osc-button osc-button-blue${ self.state.isBusy ? ' osc-disabled' : '' }`} onClick={() => { if (!self.state.isBusy) self.submitIdea() } } ref={el => (self.submitButton = el)}>Versturen</a>
          <br/>
          <br/>
          <br/>

        </form>

			</div>
    );

  }

}
