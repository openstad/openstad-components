'use strict';

import OpenStadComponent from '../../../component/index.jsx';
import OpenStadComponentForms from '../../../forms/index.jsx';

export default class ChoiceForm extends OpenStadComponent {

  constructor(props) {
    super(props);
  }

  render() {
    let self = this;
    return (
      <div className="openstad-form">
        <h3>Titel</h3>
        <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 1, maxLength: 1000 }} value={self.props.currentTarget.title} onChange={ data => self.props.onChange({ title: data.value }) } ref={el => self.titleField = el}/>
        <h3>Beschrijving</h3>
        <OpenStadComponentForms.InputWithCounter config={{ inputType: 'textarea', minLength: 1, maxLength: 1000 }} value={self.props.currentTarget.description} onChange={ data => self.props.onChange({ description: data.value }) } ref={el => self.descriptionField = el}/>
        <h3>Afbeeldingen</h3>
        <OpenStadComponentForms.ImageUpload key="i1" config={{ as: 'json', imageserver: self.config.imageserver }} value={self.props.currentTarget.images} onChange={ data => self.props.onChange({ images: data.value }) } ref={el => self.imagesField = el}/>
        <h3>Antwoorden</h3>
        <OpenStadComponentForms.Text config={{}} value={self.props.currentTarget.answers} onChange={ data => self.props.onChange({ answers: data.value }) } ref={el => self.answersField = el}/>
        <h3>Volgorde nummer</h3>
        <OpenStadComponentForms.Text config={{}} value={self.props.currentTarget.seqnr} onChange={ data => self.props.onChange({ seqnr: data.value }) } ref={el => self.seqnrField = el}/>
      </div>
    )
    ;

  }

}
