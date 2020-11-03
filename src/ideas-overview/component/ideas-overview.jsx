import merge from 'merge';
import React from 'react';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import IdeasList from './ideas-list.jsx';
import IdeasFilterbar from './ideas-filterbar.jsx';
import IdeaTile from './idea-tile.jsx';
import IdeasSort from './ideas-sort.jsx';

// TODO:
// fixed set of ids
// filter
// search
// sort positioneren
// hidesortbutton kan er uit; die hoort in de parent (ideas-on-map)

'use strict';

export default class IdeasOverview extends OpenStadComponent {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {
      siteId: null,
      title: 'Inzendingen',
      display: {
      },
      idea:{
        titleField: 'title',
        summaryField: 'summary',
      },
      sort: {
        showSort: true,
        defaultValue: 'createdtime,desc',
      },
      filter: [],
      types: [],
      typeLabel: 'Thema',
		};

		this.config = merge.recursive(defaultConfig, this.config, this.props.config || {})
    if (!this.config.shareChannelsSelection) this.config.shareChannelsSelection = ["facebook","twitter","mail","whatsapp"];

    this.state = {
      ideas: this.props.ideas || [],
      filters: {},
      search: null,
      // hideSortButton: true,
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

	  document.addEventListener('osc-ideas-filter-onchange', function(event) {
      self.updateFilter(event.detail);
    });

	  document.addEventListener('osc-ideas-search-onchange', function(event) {
      self.updateSearch(event.detail);
    });

	  document.addEventListener('osc-ideas-sort-onchange', function(event) {
      self.updateSort(event.detail);
    });

    self.fetchData();
	}

  componentWillUnmount() {
  }
  
  fetchData() {

    let self = this;

    let url = `${ self.config.api.url }/api/site/${  self.config.siteId  }/idea?summary=1&includeVoteCount=1&includeArgsCount=1`;
    let headers = OpenStadComponentLibs.api.getHeaders(self.config);
		
    fetch(url, { headers })
      .then((response) => {
        if (!response.ok) throw Error('Error fechting detail');
        return response.json();
      })
      .then( json => {

        let ideas = json;
        ideas = self.sorter.doSort(ideas);
        self.setState({ ideas }, function() {
        });

      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });

  }

  updateFilter(filter) {
    // console.log('update filter', filter);
    let filters = { ...this.state.filters };
    if (filter.value) {
      filters[filter.fieldName] = { value: filter.value, doFilter: filter.doFilter };
    } else {
      delete filters[filter.fieldName];
    }
    this.setState({ filters });
  }

  updateSearch(search) {
    // console.log('update search', search);
    if (search.value) {
      search = { value: search.value, doSearch: search.doSearch };
    } else {
      search = null;
    }
    this.setState({ search });
  }

  updateSort(ideas) {
    this.setState({ ideas });
  }

	render() {

    let self = this;
    let ideas = self.state.ideas || [];

    let filteredIdeas = ideas;
    Object.keys(self.state.filters).forEach((key) => {
      let filter = self.state.filters[key];
      filteredIdeas = filter.doFilter(filteredIdeas);
    });
    if (self.state.search) {
      console.log('filter by search');
      filteredIdeas = self.state.search.doSearch(filteredIdeas);
    }

    let titleHML = (<h3 className="osc-title">{self.config.title} ({filteredIdeas.length})</h3>);

    return (
			<div id={self.id} className={`osc-ideas-overview ${self.props.className || ''}`}>

        <IdeasFilterbar config={{ search: self.config.search, filter: self.config.filter }} className="osc-ideas-filterbar"/>
        <IdeasSort config={{ ...self.config.sort, showSort: self.config.sort.showSort && !self.state.hideSortButton }} ideas={ideas} className="osc-align-right-container" ref={el => self.sorter = el}/>
        
        {titleHML}

        <IdeasList config={self.config} ideas={filteredIdeas} className=""/>

			</div>
    );

  }

}



