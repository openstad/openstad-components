'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import { IdeaImage as OpenStadComponentIdeaImage } from '../../image/index.jsx';

// TODO: gridder display type
// TODO: show ranking
// TODO: status labels
// TODO: vote progress bar
// TODO: ellipsis op theme and area moet op beide apart

export default class IdeasOverview extends OpenStadComponent {

  constructor(props) {

    super(props, {

      idea:{
        showVoteButtons: true, // TODO: dit is een stomme config parameter
        titleField: 'title',
        summaryField: 'summary',
        minimumYesVotes: undefined,
      },

      display: {
        type: 'tiles',
        columns: 4,
        showStatusLabel: false,
        showTheme: false,
        showArea: false,
        showVoteProgressbar: false,
        showStats: false,
        showTypeIcon: false,
        onMouseOverTileFadeOthers: false,
      },
      
      image: {},

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

		});

    this.config.image.allowMultipleImages = false;

    this.state = {
      idea: this.props.idea || {},
    };
        
  }

  dispatchIdeaTileClick(event, idea) {
    event.stopPropagation();
		let newEvent = new window.CustomEvent('osc-idea-tile-click', { detail: { idea } } );
		document.dispatchEvent(newEvent);
  }

  dispatchIdeaTileMouseEnter(event, idea) {
    event.stopPropagation();
		let newEvent = new window.CustomEvent('osc-idea-tile-mouse-enter', { detail: { idea } } );
		document.dispatchEvent(newEvent);
  }

  dispatchIdeaTileMouseLeave(event, idea) {
    event.stopPropagation();
		let newEvent = new window.CustomEvent('osc-idea-tile-mouse-leave', { detail: { idea } } );
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
      console.log(idea.progress);
      voteProgressHTML = (
        <div className="osc-progress-container">
          <div className="osc-progress">
            <div className="osc-progress-bar osc-status-open" style={{ width: idea.progress + '%' }}></div>
            <div className="osc-progress-target">{self.config.idea.minimumYesVotes}</div>
          </div>
        </div>
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
    }

    // now render
    return (
			<div id={self.divId} className={`osc-idea-tile osc-displaytype-${self.config.display.type} osc-column osc-${self.config.display.columns}-columns ${self.props.className || ''}`} onClick={event => self.dispatchIdeaTileClick(event, idea)} onMouseEnter={event => self.dispatchIdeaTileMouseEnter(event, idea)} onMouseLeave={event => self.dispatchIdeaTileMouseLeave(event, idea)}>
        <div className="osc-idea-image-container">
          <OpenStadComponentIdeaImage config={this.config} idea={idea} key={'image-' + idea.id}/>
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
        </div>
        <div className="osc-idea-tile-content-alt">
          <div className="osc-idea-image-container">
            <OpenStadComponentIdeaImage config={this.config} idea={idea} key={'image-' + idea.id}/>
          </div>
          <h4 className="osc-title">{ eval(`idea.${self.config.idea.titleField}`) }</h4>
          { eval(`idea.${self.config.idea.summaryField}`) }
          {statsHTML}
        </div>
        {typeIconHTML}
      </div>
    );

  }

}
