import merge from 'merge';
import React from 'react';

import OpenStadComponent from '../../component/index.jsx';

'use strict';

export default class IdeasSort extends OpenStadComponent {

  constructor(props) {

    super(props);

		let defaultConfig = {
      label: null,
      sortOptions: [{ value: 'createdtime,desc', label: 'Nieuwste eerst' }, { value: 'createdtime,asc', label: 'Oudste eerst' }, { value: 'title', label: 'Titel' }, { value: 'random', label: 'Willekeurig' }, { value: 'likes,desc', label: 'Meeste likes' }, { value: 'likes,asc', label: 'Minste likes' }, { value: 'args,desc', label: 'Meeste reacties' }, { value: 'args,asc', label: 'Minste reacties' }, { value: 'ranking,asc', label: 'Ranglijst' }],
      defaultValue: 'createdtime,desc',
      showSort: true,
			center: {
				latitude: 52.37104644463586,
				longitude: 4.900402911007405,
			},
		};
		this.config = merge.recursive(defaultConfig, this.config, this.props.config || {})

    this.state = {
      currentValue: this.config.defaultValue,
    };
        
  }

  doSort(ideas, sortOrder) {

    sortOrder = sortOrder || this.state.currentValue;

		switch(sortOrder){
			case 'title':
				ideas = ideas.sort( function(a,b) { if (a.title.toLowerCase() < b.title.toLowerCase()) { return -1; } if (b.title.toLowerCase() < a.title.toLowerCase()) { return 1; } return 0; });
				break;
			case 'ranking,asc':
				ideas = ideas.sort( function(a,b) { return a.ranking - b.ranking });
				break;
			case 'likes,asc':
				ideas = ideas.sort( function(a,b) { return a.yes - b.yes });
				break;
			case 'likes,desc':
				ideas = ideas.sort( function(a,b) { return b.yes - a.yes });
				break;
			case 'createdtime,desc':
				ideas = ideas.sort( function(a,b) { return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() });
				break;
			case 'createdtime,asc':
				ideas = ideas.sort( function(a,b) { return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() });
				break;
			case 'distance':
				ideas = ideas
          .map( idea => { idea._distance = Math.sqrt( Math.pow( idea.location.coordinates[0] - center.lat, 2 ) + Math.pow( idea.location.coordinates[1] - center.lng, 2 ) ); return idea; } )
          .sort( function(a,b) { return a._distance - b._distance })
				break;
			case 'args,desc':
				ideas = ideas.sort( function(a,b) { return b.argCount - a.argCount })
				break;
			case 'args,asc':
				ideas = ideas.sort( function(a,b) { return a.argCount - b.argCount })
				break;
			case 'random':
			default:
				ideas = ideas.sort( function(a,b) { return Math.random() - 0.5 });
				break;
		}

    return ideas;
    
  }

  setSortOrder({ sortOrder }) {

    let self = this;
    let ideas = self.props.ideas || [];

    ideas = self.doSort(ideas, sortOrder);

    this.setState({
      ideas,
      currentValue: sortOrder,
    }, function() {
      let event = new window.CustomEvent('osc-ideas-sort-onchange', { detail: ideas });
		  document.dispatchEvent(event);
    });

  }

	render() {

    let self = this;
    let ideas = self.props.ideas || [];

    if (!self.config.showSort) {
      return null;
    }

    let labelHTML = null;
    if ( self.config.label ) labelHTML = (<div className="osc-sort-label">{self.config.label}:</div>)

    return (
      <div className={`osc-ideas-sort ${self.props.className || ''}`}>
        {labelHTML}
        <select defaultValue={self.state.currentValue} onChange={() => self.setSortOrder({ sortOrder: self.sortSelector.value })} className="osc-default-select" ref={el => (self.sortSelector = el)}>
          { self.config.sortOptions.map((option, i) => {
            let selected = null;
            return <option value={ option.value } key={'sort-option-' + i}>{ option.label }</option>;
          })}
        </select>
      </div>
    );

  }

}
