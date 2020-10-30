import merge from 'merge';
import React from 'react';

import OpenStadComponentLibs from '../../../libs/index.jsx';
import OpenStadComponentImage from '../../../idea-image/index.jsx';

'use strict';

// todo: selectedidea moet via idea-overview.tile gaan werken

export default class Preview extends React.Component {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {
      display: {
        type:'idea-selection',
      },
      api: {
      },
      content: {
        noSelectionLoggedInHTML: '<div class=\"osc-info-block-default-block\"><div class=\"osc-info-block-default-block-line osc-line-1\">Klik op een plek op de kaart om een nieuw punt toe te voegen.</div><div class=\"osc-info-block-default-block-line osc-line-2\">Selecteer een inzending op de kaart om meer informatie over de inzending te bekijken.</div><div class=\"osc-info-block-default-block-line osc-line-3\">Bekijk hieronder de inzendingen die nu zichtbaar zijn op de kaart.</div></div>',
        noSelectionNotLoggedInHTML: '<div class=\"osc-info-block-default-block\"><div class=\"osc-info-block-default-block-line osc-line-1\">Klik op een plek op de kaart om een nieuw punt toe te voegen.</div><div class=\"osc-info-block-default-block-line osc-line-2\">Selecteer een inzending op de kaart om meer informatie over de inzending te bekijken.</div><div class=\"osc-info-block-default-block-line osc-line-3\">Bekijk hieronder de inzendingen die nu zichtbaar zijn op de kaart.</div></div>',
        selectionActiveLoggedInHTML: 'Ingelogd: er is een punt geselecteerd binnen de polygon, met een adres: {address} en {addButton}.',
        selectionInactiveLoggedInHTML: 'Ingelogd: er is een punt geselecteerd buiten de polygon, met een {address}',
        selectionActiveNotLoggedInHTML: 'Niet ingelogd: er is een punt geselecteerd binnen de polygon, met een adres: {address} en {loginButton} of <a href="{loginLink}">login link</a>.',
        selectionInactiveNotLoggedInHTML: 'Niet ingelogd: er is een punt geselecteerd buiten de polygon, met een {address}',
        mobilePreviewLoggedInHTML: 'Een locatie vlakbij <h4>{address}</h4>{addButton}',
        mobilePreviewNotLoggedInHTML: 'Een locatie vlakbij <h4>{address}</h4><div>Wilt u een nieuw punt toevoegen? Dan moet u eerst <a href="{loginLink}">inloggen</a>.</div>',
        showNoSelectionOnMobile: false,
      },
      idea: {
        canAddNewIdeas: true,
        showVoteButtons: true,
      },
		};
    this.config = merge.recursive(defaultConfig, this.config, props.config || {})
    this.config.loginUrl = this.config.loginUrl || '/oauth/login?returnTo=' + encodeURIComponent(document.location.href);

    // tmp voor oude data
    props.config.content = props.config.content || {};
    if (props.config.content.noSelectionHTML && !props.config.content.noSelectionLoggedInHTML) {
      this.config.content.noSelectionLoggedInHTML = props.config.content.noSelectionHTML
    }
    if (props.config.content.noSelectionHTML && !props.config.content.noSelectionNotLoggedInHTML) {
      this.config.content.noSelectionNotLoggedInHTML = props.config.content.noSelectionHTML
    }

    // state
    this.state = {
    };

  }

  dispatchOnButtonIdeaClick(e, idea) {
		var event = new window.CustomEvent('osc-selection-button-click', { detail: { idea } });
		document.dispatchEvent(event);
  }

  dispatchNewIdeaClick(e, idea) {
		var event = new window.CustomEvent('osc-new-idea-click', { detail: { idea } });
		document.dispatchEvent(event);
  }

  dispatchSelectedIdeaClick() {
    console.log('dispatchSelectedIdeaClick moet nog');
  }
  
  dispatchClosePreview(e, what) {
    e.stopPropagation();
    let event;
    if (what == 'idea')     event = new window.CustomEvent('osc-set-selected-idea',     { detail: null });
    if (what == 'location') event = new window.CustomEvent('osc-set-selected-location', { detail: null });
		document.dispatchEvent(event);
  }
  
  render() {

    let self = this;

    // mobile popup
    if ( self.config.display.type == 'mobilePreview') {

      let contentHTML = this.config.api.isUserLoggedIn ? this.config.content.mobilePreviewLoggedInHTML : this.config.content.mobilePreviewNotLoggedInHTML;

      let addButton = null; let loginButton = null; let loginLink = null;
      if (this.config.api.isUserLoggedIn) {
        if (this.config.idea.canAddNewIdeas) {
          addButton = (
            <button className="osc-button osc-button-blue" onClick={(event) => { this.onClickMobileSwitcher(event); this.onNewIdeaClick(event)} } ref={el => (self.newIdeaButton = el)}>Nieuw punt toevoegen</button>
          );
        }
      } else {
        if (this.config.idea.canAddNewIdeas) {
          loginButton = (
            <button onClick={() => { document.location.href = '/oauth/login?returnTo=' + encodeURIComponent(document.location.href) }} className="osc-button-blue osc-not-logged-in-button">Inloggen</button>
          );
          loginLink = "javascript: document.location.href = '/oauth/login?returnTo=' + encodeURIComponent(document.location.href)";
        }
      }
      
      contentHTML = contentHTML.replace(/\{address\}/g, this.props.selectedLocation.address || '');
      contentHTML = contentHTML.replace(/\{loginLink\}/g, loginLink);
      
      contentHTML = OpenStadComponentLibs.reactTemplate({ html: contentHTML, addButton, loginButton })

      return (
				<div className="ocs-mobile-popup">
					{contentHTML}
				</div>
			);
      
    }

    // other

    let selectedLocationHTML = null;
    let selectedIdeaHTML = null;
    let titleAddition = '';
    let mobileSwitcherHTML = null;
    let mobileTitle = '';

    // knoppen
    let addButton = null; let loginButton = null; let loginLink = null;

    if (self.config.idea.canAddNewIdeas) {
      if (self.config.types && self.config.typeField == 'typeId') {
        addButton = (
          <span className="osc-new-idea-buttons">
            {self.config.types.map(
              type => {
                let typeDef = type;
                if (!typeDef.auth || ( typeDef.auth.createableBy && OpenStadComponentLibs.user.hasRole( self.config.user, typeDef.auth.createableBy ) )) {
                  let buttonBgHTML = typeDef ? <div className="osc-button-background-image" dangerouslySetInnerHTML={{ __html: typeDef.buttonicon && typeDef.buttonicon.html || '' }}></div> : null;
                  return (<button className="osc-button osc-button-white" onClick={(event) => self.dispatchNewIdeaClick(event, typeDef.id || typeDef.name)}>{buttonBgHTML}{ typeDef && typeDef.buttonLabel || 'Nieuw punt toevoegen' }</button>)
                } else return null;
              }
            )}
          </span>
        );
      } else {
        addButton = (
          <button className="osc-button osc-button-blue" onClick={(event) => self.dispatchNewIdeaClick(event)}>Nieuw punt toevoegen</button>
        );
      }
      loginButton = (
        <button onClick={() => { document.location.href = this.config.loginUrl }} className="osc-button-blue osc-not-logged-in-button">Inloggen</button>
      );
      loginLink = `javascript: document.location.href = '${this.config.loginUrl}'`;
    }

    // new idea
    if (self.props.selectedLocation) {
      let contentHTML = null;
      if (self.props.selectedLocation.isPointInPolygon) {
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

      contentHTML = contentHTML.replace(/\{address\}/g, self.props.selectedLocation.address || '');
      contentHTML = contentHTML.replace(/\{loginLink\}/g, loginLink);
      contentHTML = OpenStadComponentLibs.reactTemplate({ html: contentHTML, addButton, loginButton })

      selectedLocationHTML = (
			  <div className="osc-info-block-new-idea">
          <button className="osc-close-button-black" onClick={(event) => self.dispatchClosePreview(event, 'location')} ref={el => (self.resetButton = el)}/>
          {contentHTML}
        </div>
      );


      titleAddition = 'in de buurt';
      mobileTitle = 'Meer details en acties';
    }

    // selected idea
    if (self.props.selectedIdea) {
      let idea = self.props.selectedIdea;
      let ideaTypeValue;
      try {
        ideaTypeValue = eval(`idea.${self.config.typeField}`);
      } catch (err) {
        ideaTypeValue = '';
      }
      let typeDef = self.config.types.find(entry => entry.name == ideaTypeValue || entry.id == ideaTypeValue);
      if (!typeDef || !typeDef.listicon) { typeDef = { listicon: { html: '' } }; } // console.log(idea.extraData.theme + ' niet gevonden'); }
      let voteCountHTML = null;
      if (this.config.idea.showVoteButtons) {
        voteCountHTML = (
          <div className="osc-likes">
            {idea.yes || 0}
          </div>);
      }
      let argcountHTML = null;
      if (this.config.argument.isActive && !this.config.argument.ignoreReactionsForIdeaIds.match(new RegExp(`(?:^|\\D)${idea.id}(?:\\D|$)`))) {
        argcountHTML = (
          <div className="osc-reactions">
            {idea.argCount || 0}
          </div>);
      }
      selectedIdeaHTML = (
			  <div className="osc-info-block-selected-idea" onClick={(event) => self.dispatchSelectedIdeaClick(event, self.props.selectedIdea)}>
          <button className="osc-close-button-black" onClick={(event) => self.dispatchClosePreview(event, 'idea')} ref={el => (self.resetButton = el)}/>
          <h3>Geselecteerd</h3>
          <div className="osc-info-block-selected-idea-idea">
            <div className="osc-idea-image-container">
              <OpenStadComponentImage config={{}} idea={idea} key={'image-' + idea.id}/>
            </div>
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

    let defaultBlockHTML = null;
    if (!selectedLocationHTML && !selectedIdeaHTML) {
      let noSelectionHTML = self.config.content.noSelectionNotLoggedInHTML;
      if (self.config.api.isUserLoggedIn) noSelectionHTML = self.config.content.noSelectionLoggedInHTML;
      noSelectionHTML = noSelectionHTML.replace(/\{loginLink\}/g, loginLink);
      noSelectionHTML = OpenStadComponentLibs.reactTemplate({ html: noSelectionHTML, addButton, loginButton })
      defaultBlockHTML = (
			  <div className={`osc-info-block-default-block${ self.config.content.showNoSelectionOnMobile ? ' osc-visible-on-mobile' : '' }`}>{noSelectionHTML}</div>
      );
      mobileTitle = `${self.config.ideaName} in dit gebied (${self.state.ideas && self.state.ideas.length || 0})`;

    }

    // TODO: kan de key weg uit IdeasList
    return (
			<div className="osc-selection-block">
        {defaultBlockHTML}
        {selectedLocationHTML}
        {selectedIdeaHTML}
			</div>

    );

  }

}
