import merge from 'merge';
import React from 'react';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentImage from '../../idea-image/index.jsx';

// TODO: gridder display type
// TODO: show ranking
// TODO: status labels
// TODO: vote progress bar
// TODO: ellipsis op theme and area moet op beide apart

'use strict';

export default class IdeasOverview extends OpenStadComponent {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {

      idea:{
        showVoteButtons: true, // TODO: dit is een stomme config parameter
        titleField: 'title',
        summaryField: 'summary',
      },

      argument: {
        isActive: true,
        ignoreReactionsForIdeaIds: '',
      },

      vote: {
        isViewable: true,
        voteValues: [ { value: "yes" }, { value: "no" } ],
      },
      
      types: [],
      typeField: 'typeId',

		};
    // type specific default config
    switch (props.config.display && props.config.display.type) {
      case 'list':
        defaultConfig.display = {
          columns: 1,
          showStatusLabel: false,
          showTheme: false,
          showArea: false,
          showVoteProgressbar: false,
          showStats: true,
          showTypeIcon: true,
        };
        break;
      case 'grid':
        defaultConfig.display = {
          columns: 3,
          showStatusLabel: false,
          showTheme: true,
          showArea: true,
          showVoteProgressbar: false,
          showStats: false,
          showTypeIcon: false,
        };
        break;
      default:
        defaultConfig.display = {
          type: 'tiles',
          columns: 4,
          showStatusLabel: true,
          showTheme: false,
          showArea: false,
          showVoteProgressbar: true,
          showStats: true,
          showTypeIcon: false,
        };
    }

		this.config = merge.recursive(defaultConfig, this.config, this.props.config || {})

    this.state = {
      idea: this.props.idea || {},
    };
        
  }

  dispatchIdeaTileClick(event, idea) {
    event.stopPropagation();
		let newEvent = new window.CustomEvent('osc-idea-tile-click', { detail: { ideaId: idea.id } } );
		document.dispatchEvent(newEvent);
  }

  dispatchIdeaTileMouseOver(event, idea) {
    event.stopPropagation();
		let newEvent = new window.CustomEvent('osc-idea-tile-mouse-over', { detail: { ideaId: idea.id } } );
		document.dispatchEvent(newEvent);
  }

  dispatchIdeaTileMouseOut(event, idea) {
    event.stopPropagation();
		let newEvent = new window.CustomEvent('osc-idea-tile-mouse-out', { detail: { ideaId: idea.id } } );
		document.dispatchEvent(newEvent);
  }

	render() {

    let self = this;
    let idea = self.state.idea;

    // status label
    let statusLabelHTML = null;
    if (self.config.display.showStatusLabel) {
    }

    // theme and area
    let themeAndAreaHTML = null;
    if (self.config.display.showTheme || self.config.display.showArea) {
      let areaHTML = null;
      if (self.config.display.showArea && idea.extraData.area) {
        areaHTML = <div className="osc-area">{idea.extraData.area}</div>
      }
      themeAndAreaHTML = (
        <div className="osc-theme-and-area">
          { self.config.display.showTheme && idea.extraData.theme && (<div className="osc-theme">{idea.extraData.theme}</div>) }
          { self.config.display.showTheme && idea.extraData.theme && self.config.display.showArea && idea.extraData.area && (<div className="osc-divider"></div>) }
          { self.config.display.showArea && idea.extraData.area && (<div className="osc-area">{idea.extraData.area}</div>) }
        </div>);
    }

    // stats: no of votes and reactions
    let statsHTML = null;
    if (self.config.display.showStats) {
      let stats = [];
      if ( this.config.idea.showVoteButtons && this.config.vote.isViewable == true && this.config.vote.voteValues.find(val => val.value === 'yes' ) ) {
        stats.push(
          <div className="osc-yes-votes">
            {idea.yes || 0}
          </div>);
      }
      if ( this.config.idea.showVoteButtons && this.config.vote.isViewable == true && this.config.vote.voteValues.find(val => val.value === 'no' ) ) {
        stats.push(
          <div className="osc-no-votes">
            {idea.no || 0}
          </div>);
      }
      let argcountHTML = null;
      if (this.config.argument.isActive && !this.config.argument.ignoreReactionsForIdeaIds.match(new RegExp(`(?:^|\\D)${idea.id}(?:\\D|$)`))) {
        stats.push(
          <div className="osc-reactions">
            {idea.argCount || 0}
          </div>);
      }
      statsHTML = (
        <div className="osc-idea-stats-container">
          { stats.map((statHTML, i) => {
            return <div className="osc-stat" key={`osc-stat-${idea.id}-${i}`}>{statHTML}</div>
          })}
        </div>
      )
    }

    let voteProgressHTML = null;
    if (self.config.display.showVoteProgressbar) {
      voteProgressHTML = (
        <div>GENOEGSTEMMNBALK</div>
      );
    }

    // type icon
    let typeIconHTML = null;
    if (self.config.display.showTypeIcon) {
      let ideaTypeValue;
		  try {
			  ideaTypeValue = eval(`idea.${self.config.typeField}`);
		  } catch (err) {
			  ideaTypeValue = '';
		  }
		  let typeDef = self.config.types.find(entry => ideaTypeValue && ( entry.id == ideaTypeValue || entry.name == ideaTypeValue ));
		  if (!typeDef || !typeDef.listicon) { typeDef = { listicon: { html: '' } }; } // console.log(idea.extraData.theme + ' niet gevonden'); }
      try {
        if ( typeof typeDef.listicon == 'string' ) typeDef.listicon = JSON.parse(typeDef.listicon);
      } catch(err) {}
      if (typeDef.listicon.html) {
        typeIconHTML = (
          <div className="osc-typeicon">
            <div className="osc-typeicon-content" dangerouslySetInnerHTML={{ __html: typeDef.listicon.html }}></div>
          </div>);
      }
      console.log(typeIconHTML);
    }

    // render
    return (
			<div id={self.divId} className={`osc-idea-tile osc-displaytype-${self.config.display.type} ${self.props.className || ''}`} onClick={event => self.dispatchIdeaTileClick(event, idea)} onMouseOver={event => self.dispatchIdeaTileMouseOver(event, idea)} onMouseOut={event => self.dispatchIdeaTileMouseOut(event, idea)}>
        <div className="osc-idea-image-container">
          <OpenStadComponentImage config={{}} idea={idea} key={'image-' + idea.id}/>
        </div>
        <div className="osc-idea-tile-content">
          {statusLabelHTML}
          <h4 className="osc-title">{ eval(`idea.${self.config.idea.titleField}`) }</h4>
          {themeAndAreaHTML}
          <div className="osc-summary">
            { eval(`idea.${self.config.idea.summaryField}`) }
          </div>
          {voteProgressHTML}
          {statsHTML}
          {/*
             <div className="osc-type">
             <div className="osc-type-content" dangerouslySetInnerHTML={{ __html: typeDef.listicon.html }}></div>
             </div>*/}
        </div>
        {typeIconHTML}
      </div>
    );

  }

}
