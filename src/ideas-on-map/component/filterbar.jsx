import merge from 'merge';
import React from 'react';

import { IdeasFilterbar, IdeasFilter, IdeasSearch } from '../../ideas-overview/index.jsx';
import Search from './search.jsx';

'use strict';

export default class Filterbar extends IdeasFilterbar {

	render() {

    let self = this;

    let searchHTML = null;
		if (self.config.search) {
			// searchHTML = (
			//   <div className={`osc-ideas-search-container`}>
			//   	<div className="osc-ideas-search-button" onClick={() => self.toggleMobileActiveSelector('search')}></div>
			//   	<IdeasSearch config={ self.config.search } className={`${self.state.mobileActiveSelector == 'search' ? ' osc-is-active' : ''}`} ref={el => self.search = el}/>
			//   </div>
			// );

      searchHTML = (
        <div className="osc-search-container">
          <div className="osc-search-button" onClick={() => self.toggleMobileActiveSelector('search')}></div>
				  <Search config={{ ...this.config }} className={`osc-search${self.state.mobileActiveSelector == 'search' ? ' osc-is-active' : ''}`}/>
        </div>);
		}

    // TODO: configurable?
    let resetButtonHTML = null;
    resetButtonHTML = (
      <button value="reset" onClick={() => self.resetAll()} className="osc-button osc-reset-button">Alles tonen</button>
    );

    let filterHTML = null;
    if (self.config.filter.length) {
      let isActive = self.filters && self.filters.find( filter => filter.state.currentValue );
      self.filters = [];
      filterHTML = (
        <div className="osc-ideas-filters-and-button-container">
          <div className={`osc-ideas-filter-button${ isActive ? ' osc-active' : '' }`} onClick={() => self.toggleMobileActiveSelector('filters')}></div>
          <div className={`osc-ideas-filters-container${self.state.mobileActiveSelector == 'filters' ? ' osc-is-active' : ''}`}>
            { self.config.filter.map(( filterConfig, i ) => {
              return (
                <IdeasFilter config={filterConfig} className="osc-align-right-container" key={`osc-ideas-filter-${i}`} ref={el => self.filters[i] = el}/>
              );
            })}
          </div>
        {resetButtonHTML}
        </div>
      );
    }

    let filtersAndButtonsHTML = null;
    filtersAndButtonsHTML = (
      <div className="osc-ideas-filters-and-reset-button-container">
        {filterHTML}
      </div>
    )

    return (
      <div className={`osc-ideas-filterbar ${self.props.className || ''}`}>
        {searchHTML}
        {filtersAndButtonsHTML}
      </div>
    );

  }

}
