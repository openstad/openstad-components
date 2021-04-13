'use strict';

import merge from 'merge';

import OpenStadComponent from '../../../component/index.jsx';
import OpenStadComponentForms from '../../../forms/index.jsx';

export default class ChoicesGuideForm extends OpenStadComponent {

  constructor(props) {
    super(props);
  }

  handleFieldChange(data) {
    let self = this;
    let parsedData;
    let changed = false;
    if (typeof data.isActive != 'undefined') {
      changed = self.props.currentTarget.choicesGuideConfig.isActive != data.isActive;
      parsedData = { choicesGuideConfig: merge.recursive({}, self.props.currentTarget.choicesGuideConfig) };
      parsedData.choicesGuideConfig.isActive = data.isActive
    }
    if (typeof data.submissionType != 'undefined') {
      changed = self.props.currentTarget.choicesGuideConfig.submissionType != data.submissionType;
      parsedData = { choicesGuideConfig: merge.recursive({}, self.props.currentTarget.choicesGuideConfig) };
      parsedData.choicesGuideConfig.submissionType = data.submissionType
    }
    if (typeof data.withExisting != 'undefined') {
      changed = self.props.currentTarget.choicesGuideConfig.withExisting != data.withExisting;
      parsedData = { choicesGuideConfig: merge.recursive({}, self.props.currentTarget.choicesGuideConfig) };
      parsedData.choicesGuideConfig.withExisting = data.withExisting
    }
    if (typeof data.requiredUserRole != 'undefined') {
      changed = self.props.currentTarget.choicesGuideConfig.requiredUserRole != data.requiredUserRole;
      parsedData = { choicesGuideConfig: merge.recursive({}, self.props.currentTarget.choicesGuideConfig) };
      parsedData.choicesGuideConfig.requiredUserRole = data.requiredUserRole || null;
    }
    parsedData = parsedData || data;
    self.props.onChange(parsedData, changed)    
  }

  
  render() {

    let self = this;
    let config = self.props.currentTarget.choicesGuideConfig || {};

    let moreConfigHTML = null;

    if (config.isActive == "true") {

      let requiredUserRoleConfigHTML = null;  
      if (config.submissionType == "form") {
        let withExistingConfigHTML = null;  
        if (config.requiredUserRole == "member") {
          withExistingConfigHTML = (
            <div>
              <h4>Als er al een inzending is voor deze gebruiker</h4>
              <OpenStadComponentForms.Select config={{ choices: [{ value: "replace", description: "Overschrijf het bestaande resultaat" }, { value: "error", description: "Geef een foutmelding" }] }} value={ config.withExisting } onChange={ data => self.handleFieldChange({ withExisting: data.value }) } ref={el => self.withExistingField = el}/>
            </div>
          );
        }
        requiredUserRoleConfigHTML = (
          <div>
            <h4>Om te kunnnen insturen moet een gebruiker ingelogd zijn</h4>
            <OpenStadComponentForms.Select config={{ choices: [{ value: null, description: "Nee"}, { value: 'member', description: "Ja"}] }} value={ config.requiredUserRole } onChange={ data => self.handleFieldChange({ requiredUserRole: data.value }) } ref={el => self.requiredUserRoleField = el}/>
            {withExistingConfigHTML}
          </div>
        );
      }
      moreConfigHTML = (
        <div>
          <h4>Opslaan van de resultaten</h4>
          <OpenStadComponentForms.Select config={{ choices: [ { value: "none", description: "Niet opslaan" }, { value: "auto", description: "Automatisch opslaan" }, { value: "form", description: "Laat eerst een formulier invullen" }] }} value={ config.submissionType } onChange={ data => self.handleFieldChange({ submissionType: data.value }) } ref={el => self.submissionTypeField = el}/>
          {requiredUserRoleConfigHTML}
        </div>
      );


      
    }

    return (
      <div className="openstad-form">
        <h3>Naam</h3>
        <div className="osc-form-description">Geef deze keuzewijzer een naam, zodat deze makkelijk terug te vinden is in de 'Keuzewijzer' en 'Keuzewijzer resultaat' widget.</div>
        <OpenStadComponentForms.InputWithCounter key="x1" config={{ inputType: 'input', minLength: 2, maxLength: 255 }} value={self.props.currentTarget.title} onChange={ data => self.handleFieldChange({ title: data.value }) } ref={el => { self.titleField = el; }}/>
        <h4>Deze keuzewijzer is actief</h4>
        <OpenStadComponentForms.Select config={{ choices: [{ value: "true", description: "Ja"}, { value: "false", description: "Nee"}] }} value={ config.isActive } onChange={ data => self.handleFieldChange({ isActive: data.value }) } ref={el => self.isActiveField = el}/>
        {moreConfigHTML}
      </div>
    )
    ;

  }

}
