import merge from 'merge';
import React from 'react';

import Preview from './preview.jsx';
import IdeasList from './ideas-list.jsx';

import IdeaDetails from '../../../idea-details/index.jsx';
import IdeaForm from './idea-form.jsx';

import OpenStadComponentLibs from '../../../libs/index.jsx';
import OpenStadComponentImage from '../../../idea-image/index.jsx';

'use strict';

// details en form worden nu langs hier getekend, maar de rest moet nog heel erg opgeschoond
// ook hier woren nog funcies meegetuurd die via events moeten lopen

export default class InfoBar extends React.Component {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {
      display: {
        type: 'list',
      },
      idea: {
        canAddNewIdeas: true,
        showVoteButtons: true,
      },
      argument: {
        isActive: true,
        ignoreReactionsForIdeaIds: '',
      },
      types: [],
		};

    this.config = merge.recursive(defaultConfig, this.config, props.config || {})

    this.config.loginUrl = this.config.loginUrl || '/oauth/login?returnTo=' + encodeURIComponent(document.location.href);
    // tmp voor oude data
    if (props.config.content.noSelectionHTML && !props.config.content.noSelectionLoggedInHTML) {
      this.config.content.noSelectionLoggedInHTML = props.config.content.noSelectionHTML
    }
    if (props.config.content.noSelectionHTML && !props.config.content.noSelectionNotLoggedInHTML) {
      this.config.content.noSelectionNotLoggedInHTML = props.config.content.noSelectionHTML
    }

    this.state = {
      currentSortOrder: this.config.defaultSortOrder,
      selectedIdea: undefined,
      newIdea: undefined,
      ideas: [],
      mobileState: props.mobileState || 'closed',
    };

  }

	componentDidMount(prevProps, prevState) {

    let self = this;

		document.addEventListener('osc-set-selected-idea', function(event) {
      self.setSelectedIdea(event.detail);
    });
		document.addEventListener('osc-set-selected-location', function(event) {
      self.setNewIdea(event.detail);
    });

  }
  
  updateIdeas({ ideas = this.state.ideas, sortOrder = this.state.currentSortOrder, hideSortButton, center = { lat: 52.37104644463586, lng: 4.900402911007405 }, maxLength }) {
    this.setState({ ideas });
    this.list && this.list.updateIdeas({ ideas, sortOrder, hideSortButton, center, maxLength });
  }

 // todo: dit moet helemaal weg; hij moet controlled worden
  setSelectedIdea(idea) {
    this.setState({ ...this.state, selectedIdea: idea, newIdea: null });
  }

  setNewIdea(idea) {
    this.setState({ ...this.state, newIdea: idea, selectedIdea: null });
  }

  dispatchOnIdeaClick(e, idea) {
    e.stopPropagation();
		var event = new window.CustomEvent('ideaClick', { detail: { idea } });
		document.dispatchEvent(event);
  }
  
  dispatchClickMobileSwitcher(e) {
    e.stopPropagation();
		var event = new window.CustomEvent('osc-click-mobile-switcher', { detail: {} });
		document.dispatchEvent(event);
  };
  
  render() {

    let self = this;
    
    let config = {...self.config};
    // TODO: tmp gerard dou
    if ( this.props.idea && this.props.idea.extraData && this.props.idea.extraData.type && ( this.props.idea.extraData.type == 'Kans' || this.props.idea.extraData.type == 'Knelpunt' ) ) {
      config.types = [{"name": "Kans","label": "Dit gaat goed","value": "Kans","buttonLabel": "Ik wil een idee posten","backgroundColor": "#bed200","textColor": "black"},{"name": "Knelpunt","label": "Dit kan beter","value": "Knelpunt","backgroundColor": "#ff9100","textColor": "black"}];
      config.showLabels = true;
    }

    switch (self.props.displayType) {

        // idea detail
      case 'details':
        return (
          <IdeaDetails config={config} idea={this.props.idea} className={self.props.className || 'osc-infobar-idea-details'} ref={el => (this.ideadetails = el)}/>
        );
        break;

        // idea form
      case 'form':
        return (
			    <IdeaForm config={config} idea={this.props.idea} className="osc-ideas-on-map-info" ref={el => (this.ideaform = el)}/>
        );
        
        break;

        
    // ideas in list
      default:

    }

    

    
    

    


    

    

    let titleAddition = '';
    let mobileSwitcherHTML = null;
    let mobileTitle = '';

    // new idea
    if (self.state.newIdea) {
      titleAddition = 'in de buurt';
      mobileTitle = 'Meer details en acties';
    }

    // selected idea
    if (self.state.selectedIdea) {
      titleAddition = 'in de buurt';
      mobileTitle = 'Meer details';
    }

    if (!titleAddition) titleAddition = 'in dit gebied';


    // wat doet dit? het was was if (!newIdeaHTML && !selectedIdeaHTML) {
    if (!self.state.newIdea && !self.state.selectedIdea) {
      mobileTitle = `${self.config.ideaName} in dit gebied (${self.state.ideas && self.state.ideas.length || 0})`;
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
			<div id={self.props.id} className={self.props.className || 'osc-infobar'} ref={el => (self.instance = el)}>
        {mobileSwitcherHTML}
			  <div className="osc-info-content">
          <Preview config={self.config} selectedIdea={self.state.selectedIdea} selectedLocation={self.state.newIdea}/>
			    <IdeasList config={{ ...self.config, onIdeaClick: ( event, idea ) => self.dispatchOnIdeaClick(event, idea) }} ideas={self.state.ideas} title={self.config.ideaName + ' ' + titleAddition} key={`osc-ideas-list-321`} ref={el => (self.list = el)}/>
			  </div>
			</div>

    );

  }

}
