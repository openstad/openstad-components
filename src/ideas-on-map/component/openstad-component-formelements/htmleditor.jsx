import React from 'react';

'use strict';

export default class HTMLEditor extends React.Component {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {
			ideaId: null
		};
		this.config = Object.assign(defaultConfig, this.props.config || {})
		// this.config.onIdeaClick = this.config.onIdeaClick || this.onIdeaClick.bind(this);

    this.state = {
			ideaId: this.config.ideaId,
    };

  }

	componentDidMount(prevProps, prevState) {
	}

	render() {

    let self = this;

    return (
			<div id={self.id} className={self.props.className || 'osc-info-block-idea-details'} ref={el => (self.instance = el)}>

				<h3>HTML Editor</h3>
        
			</div>
    );

  }

}
