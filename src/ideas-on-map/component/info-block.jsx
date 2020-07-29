import merge from 'merge';
import React from 'react';
import IdeasList from './ideas-list.jsx';

import OpenStadComponentLibs from '../../libs/index.jsx';

// TODO: na verandering op verandering denk ik dat dit een status moet gaan krijgen ipv. de new en selected versie.
// TODO: setNewIdea refactoren naar setSelectedLocation
// TODO: events worden via document gestuurd; dat kan ook intern

'use strict';

export default class InfoBlock extends React.Component {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {
      content: {
        noSelectionHTML: '<div class=\"osc-info-block-default-block\"><div class=\"osc-info-block-default-block-line osc-line-1\">Klik op een plek op de kaart om een nieuw punt toe te voegen.</div><div class=\"osc-info-block-default-block-line osc-line-2\">Selecteer een inzending op de kaart om meer informatie over de inzending te bekijken.</div><div class=\"osc-info-block-default-block-line osc-line-3\">Bekijk hieronder de inzendingen die nu zichtbaar zijn op de kaart.</div></div>',
        selectionActiveLoggedInHTML: 'Ingelogd: er is een punt geselecteerd binnen de polygon, met een adres: {address} en {addButton}.',
        selectionInactiveLoggedInHTML: 'Ingelogd: er is een punt geselecteerd buiten de polygon, met een {address}',
        selectionActiveNotLoggedInHTML: 'Niet ingelogd: er is een punt geselecteerd binnen de polygon, met een adres: {address} en {loginButton} of <a href="{loginLink}">login link</a>.',
        selectionInactiveNotLoggedInHTML: 'Niet ingelogd: er is een punt geselecteerd buiten de polygon, met een {address}',
        ignoreReactionsForIdeaIds: '',
      },
      idea: {
        canAddNewIdeas: true,
        showVoteButtons: true,
      },
      argument: {
        isActive: true,
      },
		};

    this.config = merge.recursive(defaultConfig, this.config, props.config || {})

    this.state = {
      currentSortOrder: this.config.defaultSortOrder,
      selectedIdea: undefined,
      newIdea: undefined,
      ideas: [],
      mobileState: props.mobileState || 'closed',
    };

  }

	componentDidMount(prevProps, prevState) {
    this.eventTarget = this.config.eventTarget || this.instance;
  }

  updateIdeas({ ideas = this.state.ideas, sortOrder = this.state.currentSortOrder, showSortButton, center = { lat: 52.37104644463586, lng: 4.900402911007405 }, maxLength }) {
    this.setState({ ideas });
    this.list.updateIdeas({ ideas, sortOrder, showSortButton, center, maxLength });
  }

  setSelectedIdea(idea) {
    this.setState({ ...this.state, selectedIdea: idea, newIdea: null });
  }

  setNewIdea(idea) {
    this.setState({ ...this.state, newIdea: idea, selectedIdea: null });
  }

  dispatchUpdateSelectedIdea(e, idea) {
    e.stopPropagation();
		var event = new window.CustomEvent('updateSelectedIdea', { detail: { idea } });
		document.dispatchEvent(event);
  }

  dispatchCloseSelectedLocation(e, idea) {
    e.stopPropagation();
		var event = new window.CustomEvent('closeSelectedLocation', { detail: { idea } });
		document.dispatchEvent(event);
  }
  
  dispatchSelectedIdeaClick(e, idea) {
    e.stopPropagation();
		var event = new window.CustomEvent('selectedIdeaClick', { detail: { idea } });
		document.dispatchEvent(event);
  };

  dispatchOnIdeaClick(e, idea) {
    e.stopPropagation();
		var event = new window.CustomEvent('ideaClick', { detail: { idea } });
		document.dispatchEvent(event);
  }
  
  dispatchNewIdeaClick(e) {
    e.stopPropagation();
		var event = new window.CustomEvent('newIdeaClick', { detail: {} });
		document.dispatchEvent(event);
  };
  
  dispatchClickMobileSwitcher(e) {
    e.stopPropagation();
		var event = new window.CustomEvent('clickMobileSwitcher', { detail: {} });
		document.dispatchEvent(event);
  };
  
	render() {

    let self = this;

    let newIdeaHTML = null;
    let selectedIdeaHTML = null;
    let titleAddition = '';
    let mobileSwitcherHTML = null;
    let mobileTitle = '';

    // new idea
    if (self.state.newIdea) {
      let contentHTML = null; let addButton = null; let loginButton = null; let loginLink = null;
      if (self.state.newIdea.isPointInPolygon) {
        if (self.config.api.isUserLoggedIn) {
          contentHTML = self.config.content.selectionActiveLoggedInHTML
        } else {
          contentHTML = self.config.content.selectionActiveNotLoggedInHTML
        }
      } else {
        if (self.config.api.isUserLoggedIn) {
          contentHTML = self.config.content.selectionInactiveLoggedInHTML
        } else {
          contentHTML = self.config.content.selectionInactiveNotLoggedInHTML
        }
      }

      if (self.config.api.isUserLoggedIn) {
        if (self.config.idea.canAddNewIdeas) {
          addButton = (
            <button className="osc-button osc-button-blue" onClick={(event) => self.dispatchNewIdeaClick(event)}>Nieuw punt toevoegen</button>
          );
        }
      } else {
        if (self.config.idea.canAddNewIdeas) {
          loginButton = (
            <button onClick={() => { document.location.href = '/oauth/login?returnTo=' + encodeURIComponent(document.location.href) }} className="osc-button-blue osc-not-logged-in-button">Inloggen</button>
          );
          loginLink = "javascript: document.location.href = '/oauth/login?returnTo=' + encodeURIComponent(document.location.href)";
        }
      }

      contentHTML = contentHTML.replace(/\{address\}/g, self.state.newIdea.address || '');
      contentHTML = contentHTML.replace(/\{loginLink\}/g, loginLink);
      contentHTML = OpenStadComponentLibs.reactTemplate({ html: contentHTML, addButton, loginButton })

      newIdeaHTML = (
			  <div className="osc-info-block-new-idea">
          <button className="osc-close-button-black" onClick={(event) => self.dispatchCloseSelectedLocation(event, null)} ref={el => (self.resetButton = el)}/>
          {contentHTML}
        </div>
      );


      titleAddition = 'in de buurt';
      mobileTitle = 'Meer details en acties';
    }

    // selected idea
    if (self.state.selectedIdea) {
      let idea = self.state.selectedIdea;
      let typeDef = self.config.types.find(entry => idea.extraData && entry.name == idea.extraData.theme);
      if (!typeDef || !typeDef.listicon) { typeDef = { listicon: { html: '' } }; } // console.log(idea.extraData.theme + ' niet gevonden'); }
      let voteCountHTML = null;
      if (this.config.idea.showVoteButtons) {
        voteCountHTML = (
          <div className="osc-likes">
            {idea.yes || 0}
          </div>);
      }
      let argcountHTML = null;
      if (this.config.argument.isActive && !this.config.content.ignoreReactionsForIdeaIds.match(new RegExp(`(?:^|\\D)${idea.id}(?:\\D|$)`))) {
        argcountHTML = (
          <div className="osc-reactions">
            {idea.argCount || 0}
          </div>);
      }
      selectedIdeaHTML = (
			  <div className="osc-info-block-selected-idea" onClick={(event) => self.dispatchSelectedIdeaClick(event, self.state.selectedIdea)}>
          <button className="osc-close-button-black" onClick={(event) => self.dispatchUpdateSelectedIdea(event, null)} ref={el => (self.resetButton = el)}/>
          <h3>Geselecteerd</h3>
          <div className="osc-info-block-selected-idea-idea">
            <div className="osc-image" style={{ backgroundImage: `url(${idea.image})` }}></div>
            <div className="osc-content">
              <h4>{ eval(`idea.${self.config.titleField}`) }</h4>
              <div className="osc-summary">
                { eval(`idea.${self.config.summaryField}`) }
              </div>
              <div className="osc-stats">
                {voteCountHTML}
                {argcountHTML}
                <div className="osc-type">
                  <div className="osc-type-content" dangerouslySetInnerHTML={{ __html: typeDef.listicon.html }}></div>
                </div>
              </div>
            </div>
            <div className="osc-clear-both"></div>
          </div>
        </div>
      );
      titleAddition = 'in de buurt';
      mobileTitle = 'Meer details';
    }

    if (!titleAddition) titleAddition = 'in dit gebied';

    let defaultBlockHTML = null;
    if (!newIdeaHTML && !selectedIdeaHTML) {
      let noSelectionHTML = self.config.content.noSelectionHTML;
      defaultBlockHTML = (
			  <div className="osc-info-block-default-block" dangerouslySetInnerHTML={{ __html: noSelectionHTML }}></div>
      );
      mobileTitle = `${self.config.title} in dit gebied (${self.state.ideas && self.state.ideas.length || 0})`;
    }

    if (self.state.mobileState == 'opened') {
      mobileTitle = 'Terug naar de kaart';
    }

    mobileSwitcherHTML = (
      <div className="osc-mobile-switcher" onClick={ e => self.dispatchClickMobileSwitcher(e) }>
        {mobileTitle}
      </div>
    );

    // TODO: kan de key weg uit IdeasList
    return (
			<div id={self.props.id} className={self.props.className || 'osc-info-block'} ref={el => (self.instance = el)}>
        {mobileSwitcherHTML}
			  <div className="osc-info-content">
          {defaultBlockHTML}
          {newIdeaHTML}
          {selectedIdeaHTML}
			    <IdeasList config={{ ...self.config, onIdeaClick: ( event, idea ) => self.dispatchOnIdeaClick(event, idea) }} ideas={self.state.ideas} title={self.config.title + ' ' + titleAddition} key={`osc-ideas-list-321`} ref={el => (self.list = el)}/>
			  </div>
			</div>

    );

  }

}
