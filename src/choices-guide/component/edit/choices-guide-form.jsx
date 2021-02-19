'use strict';

import OpenStadComponent from '../../../component/index.jsx';
import OpenStadComponentForms from '../../../forms/index.jsx';

export default class ChoicesGuideForm extends OpenStadComponent {

  constructor(props) {
    super(props);
  }

  render() {
    let self = this;
    
    return (
      <div className="openstad-form">
        <h3>Naam</h3>
        <OpenStadComponentForms.InputWithCounter key="x1" config={{ inputType: 'input', minLength: 1, maxLength: 1000 }} value={self.props.currentTarget.title} onChange={ data => self.props.onChange({ title: data.value }) } ref={el => { self.titleField = el; }}/>
        <h3>Afbeelding boven de keuzewijzer</h3>
        <OpenStadComponentForms.ImageUpload key="i1" config={{ as: 'json', imageserver: self.config.imageserver }} value={self.props.currentTarget.images} onChange={ data => self.props.onChange({ images: data.value }) } ref={el => self.imagesField = el}/>
      </div>
    )
    ;

  }

}
