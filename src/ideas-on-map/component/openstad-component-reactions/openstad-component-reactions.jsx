import React from 'react';
import ReactDOM from 'react-dom';

import OpenStadComponentReactionForm from './openstad-component-reaction-form.jsx';
import OpenStadComponentReaction from './openstad-component-reaction.jsx';

'use strict';

export default class OpenStadComponentReactions extends React.Component {

  constructor(props) {
    super(props);

		let self = this;
		self.id = props.id || 'osc-reaction-form-' + parseInt( 1000000 * Math.random() )

		self.defaultConfig = {
      siteId: null,
      ideaId: null,
			title: null,
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      user: {},
      api: {
        url: null,
        headers: null,
        isUserLoggedIn: false,
      },
      requiredUserRole: 'member',
      placeholder: '',
      formIntro: '',
		};

		self.config = Object.assign(self.defaultConfig, self.config, props.config || {})

    self.state = {
			reactions: [],
		};

		self.fetch()
		
  }

	fetch () {

		let self = this;

		let url = ( self.config.api && self.config.api.url ) + '/api/site/' + self.config.siteId + '/idea/' + self.config.ideaId + '/argument?sentiment=' + self.config.sentiment + '&withUser=1&withUserVote=1&withVoteCount=1&includeReactionsOnReactions=1';
		let headers = Object.assign(( self.config.api && self.config.api.headers || {} ), { "Content-type": "application/json" });

		fetch(url, { headers })
			.then( function (response) {
				if (response.ok) {
					return response.json()
				}
				throw response.text();
			})
			.then(function (json){

				let state = { ...self.state };
				state.reactions = json;
				state.reactions.sort((a, b) => {
					return a.createdAt < b.createdAt;
				});
				self.setState(state)

			})
			.catch(function (error) {
				console.log(error);
				error.then(function (messages) { return console.log(messages)} );
			});

	}

	handleOnSubmit() {
		this.fetch()
	}

	render() {

		let self = this;

		let reactions =  (
      <ul className="osc-reactions-list">
        {self.state.reactions.map((reaction) => {

					let key = 'osc-reaction-key-' + ( reaction.id || parseInt( 1000000 * Math.random() ) );
          return (
            <li key={key}>
              <OpenStadComponentReaction config={self.config} data={reaction}/>
            </li>
          );

        })}
			</ul>);

		let title = self.config.title ? (<h3>{self.config.title}</h3>) : null;

		let config = Object.assign({
			onSubmit: self.handleOnSubmit.bind(this),
		}, self.config || {});

    return (
			<div id={this.id} className={self.props.className || 'osc-reactions'} ref={el => (this.instance = el)} >

				{title}

        <OpenStadComponentReactionForm config={config}/>
				
				{reactions}
        <br/><br/>
				
			</div>
    );

  }

}
