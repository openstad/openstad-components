import React from 'react';
import ReactDOM from 'react-dom';
import OpenStadComponentReactionForm from './openstad-component-reaction-form.jsx';

'use strict';

export default class OpenStadComponentReaction extends React.Component {

  constructor(props) {
    super(props);

		var self = this;
		self.id = props.id || 'osc-reaction-' + parseInt( 1000000 * Math.random() )

		self.defaultConfig = {
      siteId: null,
      ideaId: null,
			title: null,
      descriptionMinLength: 30,
      descriptionMaxLength: 500,
      api: {
        url: null,
        headers: null,
      },
		};

		self.config = Object.assign(self.defaultConfig, props.config || {})

    self.state = {
			id: props.data.id,
			userId: props.data.userId,
			description: props.data.description,
			user: props.data.user,
			sentiment: props.data.sentiment,
			hasUserVoted: props.data.hasUserVoted,
			yes: props.data.yes,
			can: props.data.can,
			reactions: props.data.reactions || [],
			createDateHumanized: props.data.createDateHumanized,
      isMenuActive: false,
      editMode: false,
		};

  }

  showMenu() {
    this.setState({ isMenuActive: true })
  }

  showEditForm(what) {
    this.setState({ editMode: what });
  }

  onSubmit(data) {
    data = data || {};
    this.setState({ editMode: false, description: data.description });
  }

  submitDelete() {

		let self = this;

		let url = ( self.config.api && self.config.api.url ) + '/api/site/' + self.config.siteId + '/idea/' + self.config.ideaId + '/argument/' + self.state.id;
		let headers = Object.assign(( self.config.api && self.config.api.headers || {} ), { 'Content-type': 'application/json' });

		let body = {};

		fetch(url, {
			method: 'DELETE',
      headers,
			body: JSON.stringify(body),
		})
			.then( function (response) {
				if (response.ok) {
					return response.json()
				}
				throw response.text();
			})
			.then(function (json){
        self.setState({ isDeleted: true });

		    var event = new CustomEvent('reactionDeleted', { detail: { ideaId: self.config.ideaId } });
		    document.dispatchEvent(event);

			})
			.catch(function (error) {
				console.log(error);
				error.then(function (messages) { return console.log(messages)} );
			});

  }

  submitLike() {

		let self = this;

	  if (!self.config.api.isUserLoggedIn) return alert('Je bent niet ingelogd');

		let url = ( self.config.api && self.config.api.url ) + '/api/site/' + self.config.siteId + '/idea/' + self.config.ideaId + '/argument/' + self.state.id + '/vote';
		let headers = Object.assign(( self.config.api && self.config.api.headers || {} ), { 'Content-type': 'application/json' });

		let body = {};

		fetch(url, {
			method: 'POST',
      headers,
			body: JSON.stringify(body),
		})
			.then( function (response) {
				if (response.ok) {
					return response.json()
				}
				throw response.text();
			})
			.then(function (json){
        self.setState({ ...json });
			})
			.catch(function (error) {
				console.log(error);
				error.then(function (messages) { return console.log(messages)} );
			});

  }

	render() {

		var self = this;

    if (self.state.isDeleted) return null;

    var menuHTML = null;
    if ( self.state.can.edit && self.state.can.delete ) {
      menuHTML =(
				<div className={ 'osc-reaction-menu' + ( self.state.isMenuActive ? ' osc-reaction-hamburger-active' : '' ) } onClick={ () => { self.showMenu(); }}>
					<button className="osc-reaction-delete" title="Argument verwijderen" onClick={ () => { if (confirm('Weet je het zeker?')) self.submitDelete() } }/>
					  <button className="osc-reaction-edit" title="Argument bewerken" onClick={ () => self.showEditForm(true) }/>
				</div>
      );
    }

    // voor nu staat dit uit
    // let likeButtonHTML = (
		//   <button className={ 'osc-reaction-like-button' + ( self.state.hasUserVoted ? ' osc-reaction-like-button-hasvoted' : '' ) } onClick={ () => self.submitLike() }>
		//   	Mee eens (<span>{self.state.yes | 0}</span>)
    //   </button>
    // );
    let likeButtonHTML = null;

    let descriptionHTML = (<div className="osc-reaction-description">{self.state.description}</div>);
    if (self.state.editMode) {
      descriptionHTML = (
        <div className="osc-reaction-description">
          <OpenStadComponentReactionForm config={{ ...self.config, description: self.state.description, argumentId: self.state.id, onSubmit: self.onSubmit.bind(self) }} ref={el => (self.editForm = el)}/>
        </div>
      );
    }

    return (
			<div id={`osc-reaction-${self.state.id}`} className="osc-reaction" ref={el => (this.instance = el)} >

        {menuHTML}

        <div className="osc-reaction-user">{self.state.user.nickName || self.state.user.fullName || self.state.user.firstName +' ' + self.state.user.lastName}</div>
				<div className="osc-reaction-date">{self.state.createDateHumanized}</div>
        {descriptionHTML}

        {likeButtonHTML}
			  
			  {/* <a href="" className="reply">Reageren</a> */}
			  
		  </div>

    );

  }

}
