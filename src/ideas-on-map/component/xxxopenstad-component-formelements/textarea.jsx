import React from 'react';
import OpenStadComponentFormelement from './formelement.jsx';

'use strict';

export default class OpenStadComponentTextarea extends OpenStadComponentFormelement {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {
		};
		this.config = Object.assign(defaultConfig, this.props.config, this.config || {})
		// this.config.onIdeaClick = this.config.onIdeaClick || this.onIdeaClick.bind(this);

    this.name = this.props.name;
    

    this.state = {
			ideaId: this.config.ideaId,
    };

  }

	componentDidMount(prevProps, prevState) {
	}

	render() {

    let self = this;

    let inputElement = (
      <textarea type="text" name="summary" value={this.state.formfields.summary} onChange={() => this.handleFieldChange('summary', self.summaryField.value)} ref={el => (self.summaryField = el)}/>
    )

        return super.render(inputElement
    );

  }

}
