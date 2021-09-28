'use strict';

import OpenStadComponent from '../../component/index.jsx';

import OpenStadComponentLibs from '../../libs/index.jsx';
import { IdeaImage as OpenStadComponentIdeaImage } from '../../image/index.jsx';
import { IdeaTile as OpenStadComponentIdeaTile } from '../../ideas-overview/index.jsx';

// todo: dit moet nog heel erg opgeschoond
// todo: selectedidea weergave kan met idea-overview.tile gaan werken

export default class Preview extends OpenStadComponent {

  constructor(props) {

    super(props, {
      display: {
        type:'idea-selection',
      },
      api: {
      },
      content: {
        // noSelectionLoggedInHTML: '<div class=\"osc-infobar-default-block\"><div class=\"osc-infobar-default-block-line osc-line-1\">Klik op een plek op de kaart om een nieuw punt toe te voegen.</div><div class=\"osc-infobar-default-block-line osc-line-2\">Selecteer een inzending op de kaart om meer informatie over de inzending te bekijken.</div><div class=\"osc-infobar-default-block-line osc-line-3\">Bekijk hieronder de inzendingen die nu zichtbaar zijn op de kaart.</div></div>',
        // noSelectionNotLoggedInHTML: '<div class=\"osc-infobar-default-block\"><div class=\"osc-infobar-default-block-line osc-line-1\">Klik op een plek op de kaart om een nieuw punt toe te voegen.</div><div class=\"osc-infobar-default-block-line osc-line-2\">Selecteer een inzending op de kaart om meer informatie over de inzending te bekijken.</div><div class=\"osc-infobar-default-block-line osc-line-3\">Bekijk hieronder de inzendingen die nu zichtbaar zijn op de kaart.</div></div>',
        // default now is: show nothing
        noSelectionLoggedInHTML: '',
        noSelectionNotLoggedInHTML: '',
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
		});

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

	componentDidMount(prevProps, prevState) {

    let self = this;

		self.updateLocationListener = function(event) {
      self.updateLocation(event.detail && event.detail.location);
    }
    document.addEventListener('osc-update-location', self.updateLocationListener);

  }

  componentWillUnmount() {
    document.removeEventListener('osc-update-location', this.updateLocationListener);
  }

  updateLocation(location) {
    if (!location) return;
    this.setState({ location, address: location.address })
  }

  dispatchOnButtonIdeaClick(e, idea) {
		var event = new window.CustomEvent('osc-selection-button-click', { detail: { idea } });
		document.dispatchEvent(event);
  }

  dispatchNewIdeaClick(e, idea) {
		var event = new window.CustomEvent('osc-new-idea-click', { detail: { idea } });
		document.dispatchEvent(event);
  }

  openPreviewWindow() {
    var event = new window.CustomEvent('osc-click-mobile-switcher');
    document.dispatchEvent(event);
  }

  dispatchSelectedIdeaClick(e, idea) {
		var event = new window.CustomEvent('osc-selected-idea-click', { detail: { idea } });
		document.dispatchEvent(event);
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
            <button className="osc-button osc-button-blue" onClick={(event) => { self.openPreviewWindow(); self.dispatchNewIdeaClick(event); }} ref={el => (self.newIdeaButton = el)}>Nieuw punt toevoegen</button>
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

      let address = this.state.address || this.props.selectedLocation.address || '[adres wordt gezocht...]';
      contentHTML = contentHTML.replace(/\{address\}/g, address || '');
      contentHTML = contentHTML.replace(/\{loginLink\}/g, loginLink);

      contentHTML = OpenStadComponentLibs.reactTemplate({ html: contentHTML, addButton, loginButton })

      return (
				<div className="osc-mobile-popup">
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
              (type, i) => {
                let typeDef = type;
                if (!typeDef.auth || ( typeDef.auth.createableBy && OpenStadComponentLibs.user.hasRole( self.config.user, typeDef.auth.createableBy ) )) {
                  let buttonBgHTML = typeDef ? <div className="osc-button-background-image" dangerouslySetInnerHTML={{ __html: typeDef.buttonicon && typeDef.buttonicon.html || '' }}></div> : null;
                  return (<button className={'osc-button osc-button-white' + ( typeDef && typeDef.auth && typeDef.auth.createableBy ? ` osc-button-required-role-is-${typeDef.auth.createableBy}` : '' )} onClick={(event) => self.dispatchNewIdeaClick(event, {typeId: typeDef.id || typeDef.name})} key={`osc-button-${i}`}>{buttonBgHTML}{ typeDef && typeDef.buttonLabel || 'Nieuw punt toevoegen' }</button>)
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
      let loginUrl = OpenStadComponentLibs.auth.getLoginUrl(self.config);
      loginButton = (
        <button onClick={() => { document.location.href = loginUrl }} className="osc-button-blue osc-not-logged-in-button">Inloggen</button>
      );
      loginLink = `javascript: document.location.href = '${loginUrl}'`;
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

      let address = this.state.address || this.props.selectedLocation.address || '[adres wordt gezocht...]';
      contentHTML = contentHTML.replace(/\{address\}/g, address || '');
      contentHTML = contentHTML.replace(/\{loginLink\}/g, loginLink);
      contentHTML = OpenStadComponentLibs.reactTemplate({ html: contentHTML, addButton, loginButton })

      selectedLocationHTML = (
			  <div className="osc-infobar-new-idea">
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
      let config = { ... self.config };
      config.display.showStats = true;
      config.display.showTypeIcon = true;
      selectedIdeaHTML = (
			  <div className="osc-infobar-selected-idea" onClick={(event) => self.dispatchSelectedIdeaClick(event, self.props.selectedIdea)}>
          <button className="osc-close-button-black" onClick={(event) => self.dispatchClosePreview(event, 'idea')} ref={el => (self.resetButton = el)}/>
          <h3>Geselecteerd</h3>
          <OpenStadComponentIdeaTile config={config} idea={idea} className={`osc-${self.config.display.columns}-columns${this.config.display.onMouseOverTileFadeOthers && self.state.highLightIdeaId && self.state.highLightIdeaId != idea.id ? ' osc-opacity-65' : ''}`} key={`osc-idea-tile-${idea.id}`}/>
        </div>
      );
      titleAddition = 'in de buurt';
      mobileTitle = 'Meer details';
    }

    let defaultBlockHTML = null;
    if (!selectedLocationHTML && !selectedIdeaHTML) {
      let noSelectionHTML = self.config.api.isUserLoggedIn ? self.config.content.noSelectionLoggedInHTML : self.config.content.noSelectionNotLoggedInHTML
      noSelectionHTML = noSelectionHTML || null;
      if (noSelectionHTML) {
        noSelectionHTML = noSelectionHTML.replace(/\{loginLink\}/g, loginLink);
        noSelectionHTML = OpenStadComponentLibs.reactTemplate({ html: noSelectionHTML, addButton, loginButton })
        defaultBlockHTML = (
			    <div className={`osc-infobar-default-block${ self.config.content.showNoSelectionOnMobile ? ' osc-visible-on-mobile' : '' }`}>{noSelectionHTML}</div>
        );
      }
      mobileTitle = `${self.config.ideaName} in dit gebied (${self.state.ideas && self.state.ideas.length || 0})`;

    }

    if (!selectedLocationHTML && !selectedIdeaHTML && !defaultBlockHTML) {
      return null;
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
