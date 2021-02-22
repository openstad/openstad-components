'use strict';

import OpenStadComponent from '../../../component/index.jsx';
import OpenStadComponentForms from '../../../forms/index.jsx';

export default class QuestionGroupForm extends OpenStadComponent {

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
        <h3>Aantal dimensies voor antwoorden</h3>
        <OpenStadComponentForms.Select config={{ choices: [{ value: "1", description: "1 - liniair" }, { value: "2", description: "2 - vlak" }]  }} value={ self.props.currentTarget.answerDimensions } onChange={ data => self.props.onChange({ answerDimensions: data.value }) } ref={el => self.answerDimensionsField = el}/>
        <h3>Volgorde nummer</h3>
        <OpenStadComponentForms.Text config={{}} value={self.props.currentTarget.seqnr} onChange={ data => self.props.onChange({ seqnr: data.value }) } ref={el => self.seqnrField = el}/>
      </div>
)
    ;

  }

}
