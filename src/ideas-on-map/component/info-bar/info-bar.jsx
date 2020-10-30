import merge from 'merge';
import React from 'react';

import Preview from './preview.jsx';
import IdeasList from './ideas-list.jsx';

import OpenStadComponentLibs from '../../../libs/index.jsx';
import OpenStadComponentImage from '../../../idea-image/index.jsx';

'use strict';

export default class InfoBar extends React.Component {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {
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
    console.log();
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

    // handle infoblock changes
		document.addEventListener('osc-set-selected-idea', function(event) {
      self.setSelectedIdea(event.detail);
    });
		document.addEventListener('osc-set-selected-location', function(event) {
      self.setNewIdea(event.detail);
    });

  }
  
  updateIdeas({ ideas = this.state.ideas, sortOrder = this.state.currentSortOrder, hideSortButton, center = { lat: 52.37104644463586, lng: 4.900402911007405 }, maxLength }) {
    this.setState({ ideas });
    this.list.updateIdeas({ ideas, sortOrder, hideSortButton, center, maxLength });
  }

 // todo: dit moet helemaal weg; hij moet controlled worden
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
  
  dispatchNewIdeaClick(e, typeId) {
    e.stopPropagation();
		var event = new window.CustomEvent('newIdeaClick', { detail: { typeId } });
		document.dispatchEvent(event);
  };
  
  dispatchClickMobileSwitcher(e) {
    e.stopPropagation();
		var event = new window.CustomEvent('clickMobileSwitcher', { detail: {} });
		document.dispatchEvent(event);
  };
  
  render() {

    let self = this;

    // ideas in list

    
    
    // idea detail


    
    
    // idea form


    


    

    

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
			<div id={self.props.id} className={self.props.className || 'osc-info-block'} ref={el => (self.instance = el)}>
        {mobileSwitcherHTML}
			  <div className="osc-info-content">
          <Preview config={self.config} selectedIdea={self.state.selectedIdea} selectedLocation={self.state.newIdea}/>
			    <IdeasList config={{ ...self.config, onIdeaClick: ( event, idea ) => self.dispatchOnIdeaClick(event, idea) }} ideas={self.state.ideas} title={self.config.ideaName + ' ' + titleAddition} key={`osc-ideas-list-321`} ref={el => (self.list = el)}/>
			  </div>
			</div>

    );

  }

}
