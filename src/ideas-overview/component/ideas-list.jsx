import merge from 'merge';
import React from 'react';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import IdeaTile from './idea-tile.jsx';

// TODO:
// display-type
// Status labels
// genoeg stemmen balk
// thema icon
// theme & area

'use strict';

export default class IdeasList extends OpenStadComponent {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {
      display: {
        title: 'Inzendingen',
        // type: 'grid-on-one-page',
        // type: 'linked-tiles',
        type: 'linked-list',
        columns: 3,
      },
      idea:{
        titleField: 'title',
        summaryField: 'summary',
      },
      sort: {
        sortOptions: [{ value: 'createdtime,desc', label: 'Nieuwste eerst' },{ value: 'createdtime,asc', label: 'Oudste eerst' }],
        showSort: true,
        defaultValue: 'createdtime,desc',
      },
      types: [],
      typeLabel: 'Thema',
		};

		this.config = merge.recursive(defaultConfig, this.config, this.props.config || {})
    if (!this.config.shareChannelsSelection) this.config.shareChannelsSelection = ["facebook","twitter","mail","whatsapp"];

    this.state = {
      //currentSortOrder: this.config.idea.sort.defaultValue,
      //hideSortButton: !this.config.idea.sort.hideSortButton,
    };
        
  }

	componentDidMount(prevProps, prevState) {
    let self = this;

	  document.addEventListener('osc-idea-tile-click', function(event) {
      // self.onIdeaTileClick(event.detail);
    });
	  document.addEventListener('osc-idea-tile-mouse-over', function(event) {
      // self.onIdeaTileMouseOver(event.detail);
    });
	  document.addEventListener('osc-idea-tile-mouse-out', function(event) {
      // self.onIdeaTileMouseOut(event.detail);
    });

	}

  componentWillUnmount() {
  }
  
	render() {

    let self = this;
    let ideas = self.props.ideas || [];
    
    return (
      <div className={`osc-tile-list-container ${self.props.className || ''}`}>
        <div className="osc-tile-list">
          { ideas.map((idea, i) => {
            return (
              <IdeaTile config={self.config} idea={idea} className={`osc-${self.config.display.columns}-columns`} key={`osc-idea-tile-${idea.id}`}/>
            );
          })}
        </div>
      </div>
    );

  }

}
