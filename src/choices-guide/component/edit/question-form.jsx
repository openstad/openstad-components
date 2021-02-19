'use strict';

import OpenStadComponent from '../../../component/index.jsx';
import OpenStadComponentForms from '../../../forms/index.jsx';

export default class QuestionForm extends OpenStadComponent {

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
        <h3>Label minimale waarde</h3>
        <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 1, maxLength: 1000 }} value={self.props.currentTarget.minLabel} onChange={ data => self.props.onChange({ minLabel: data.value }) } ref={el => self.minLabelField = el}/>
        <h3>Label maximale waarde</h3>
        <OpenStadComponentForms.InputWithCounter config={{ inputType: 'input', minLength: 1, maxLength: 1000 }} value={self.props.currentTarget.maxLabel} onChange={ data => self.props.onChange({ maxLabel: data.value }) } ref={el => self.maxLabelField = el}/>
        <h3>Type</h3>
        <select key={`dezemoetnogweg${  self.props.currentTarget.questionGroupId}`} value={self.props.currentTarget.type} onChange={ () => self.props.onChange({ type: self.typeField.value }) } ref={el => self.typeField = el}>
          <option value="continuous">continue</option>
          <option value="a-to-b">van a naar b</option>
          <option value="enum-buttons">multiple choice - buttons</option>
          <option value="enum-radio">multiple choice - radio</option>
        </select>
        <h3>Dimensions</h3>
        <OpenStadComponentForms.Text config={{}} value={self.props.currentTarget.dimensions} onChange={ data => self.props.onChange({ dimensions: data.value }) } ref={el => self.dimensionsField = el}/>
        <h3>Waarden</h3>
        <OpenStadComponentForms.Textarea config={{}} value={self.props.currentTarget.values} onChange={ data => self.props.onChange({ values: data.value }) } ref={el => self.valuesField = el}/>
        <h3>Volgorde nummer</h3>
        <OpenStadComponentForms.Text config={{}} value={self.props.currentTarget.seqnr} onChange={ data => self.props.onChange({ seqnr: data.value }) } ref={el => self.seqnrField = el}/>
      </div>)
    ;

  }

}
