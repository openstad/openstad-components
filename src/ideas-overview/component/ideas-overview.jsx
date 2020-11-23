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
// search is nu as you type, dat zou ook met suggestions moeten kunnen en dan configurabel zijn
// gebruik default een configurabele link-to-plan-url denk ik
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
        showFilterbar: true,
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

    this.state = {
      ideas: this.props.ideas || [],
      filters: {},
      search: null,
    };
        
  }

	componentDidMount(prevProps, prevState) {
    let self = this;
    
    self.ideasFilterOnchangeListener = function(event) {
      self.updateFilter(event.detail);
    };
    document.addEventListener('osc-ideas-filter-onchange', self.ideasFilterOnchangeListener)

    self.ideasSearchOnchangeListener = function(event) {
      self.updateSearch(event.detail);
    };
    document.addEventListener('osc-ideas-search-onchange', self.ideasSearchOnchangeListener)

    self.ideasSortOnchangeListener = function(event) {
      self.updateSort(event.detail);
    };
    document.addEventListener('osc-ideas-sort-onchange', self.ideasSortOnchangeListener)

    if (typeof self.props.ideas == 'undefined') {
      self.fetchData();
    }

	}

  componentWillUnmount() {
    document.removeEventListener('osc-ideas-filter-onchange', this.ideasFilterOnchangeListener)
    document.removeEventListener('osc-ideas-search-onchange', this.ideasSearchOnchangeListener)
    document.removeEventListener('osc-ideas-sort-onchange', this.ideasSortOnchangeListener)
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
        ideas = self.sorter.doSort({ ideas });
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

    let ideas = typeof self.props.ideas != 'undefined' ? self.props.ideas : self.state.ideas || [];

    let filteredIdeas = ideas;
    Object.keys(self.state.filters).forEach((key) => {
      let filter = self.state.filters[key];
      filteredIdeas = filter.doFilter(filteredIdeas);
    });
    if (self.state.search) {
      filteredIdeas = self.state.search.doSearch(filteredIdeas);
    }
    if (this.props.maxLength) {
      filteredIdeas = ideas.slice(0, this.props.maxLength);
    }

    let titleHML = (<h3 className="osc-title">{self.config.title} ({filteredIdeas.length})</h3>);

    return (
			<div id={self.id} className={`osc-ideas-overview ${self.props.className || ''}`}>

        <IdeasFilterbar config={self.config} showFilterbar={self.props.showFilterbar} className="osc-ideas-filterbar"/>
        <IdeasSort config={{ ...self.config.sort }} ideas={ideas} showSort={!self.props.hideSortButton} className="osc-align-right-container" ref={el => self.sorter = el}/>
        
        {titleHML}

        <IdeasList config={self.config} ideas={filteredIdeas} className=""/>

			</div>
    );

  }

}



