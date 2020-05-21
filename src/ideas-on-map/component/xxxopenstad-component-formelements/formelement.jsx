import React from 'react';

'use strict';

export default class OpenStadComponentFormelement extends React.Component {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {
			title: 'Onbekend veld',
      infoText: null,
      minChars: null,
      maxChars: null,
		};
		this.config = Object.assign(defaultConfig, this.props.config || {})
		// this.config.onIdeaClick = this.config.onIdeaClick || this.onIdeaClick.bind(this);

    this.state = {
			ideaId: this.config.ideaId,
    };

  }

	componentDidMount(prevProps, prevState) {
	}

	render(elementHTML) {

    let self = this;

    let infoHTML = null;
    if (self.config.infoText) {
      infoHTML = (
				<div className="form-info">
  				{this.config.infoText}
				</div>
      );
    }

    let charsCounterHTML = null;
    if (this.config.minChars && this.config.maxChars) {
      charsCounterHTML = (
        <div id="charsLeftTitle" className="charsLeft">
          <div className="min error visible">Nog minimaal <span>2</span> tekens</div>
          <div className="max">Je hebt nog <span>0</span> tekens over.</div>
        </div>
      );
    }

    return (
      <div className="osc-form-group">
				<h2>
					{self.config.title}
				</h2>
        {infoHTML}
        {charsCounterHTML}
				{elementHTML}
			</div>
    );

  }

}
