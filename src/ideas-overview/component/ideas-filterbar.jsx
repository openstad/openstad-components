'use strict';

import OpenStadComponent from '../../component/index.jsx';
import IdeasFilter from './ideas-filter.jsx';
import IdeasSearch from './ideas-search.jsx';

export default class IdeasFilterbar extends OpenStadComponent {

  constructor(props) {

    super(props, {
      display: {},
		});

    this.doNextPendingResetAction = this.doNextPendingResetAction.bind(this);

    this.state = {
      pendingResetActions: [],
    };
        
  }

	componentDidMount(prevProps, prevState) {

    let self = this;

    self.ideasSearchOnchangeListener = function(event) {
      self.doNextPendingResetAction();
    }
	  document.addEventListener('osc-ideas-search-onchange', self.ideasSearchOnchangeListener);

    self.ideasFilterOnchangeListener = function(event) {
      self.hideMobileActiveSelector();
      self.doNextPendingResetAction();
    }      
	  document.addEventListener('osc-ideas-filter-onchange', self.ideasFilterOnchangeListener);

	}

  componentWillUnmount() {
    document.removeEventListener('osc-ideas-search-onchange', this.ideasSearchOnchangeListener)
    document.removeEventListener('osc-ideas-filter-onchange', this.ideasFilterOnchangeListener)
  }

  toggleMobileActiveSelector(which) {
    if (this.state.mobileActiveSelector != which) {
      this.showMobileActiveSelector(which);
    } else {
      this.hideMobileActiveSelector();
    }
  }

  showMobileActiveSelector(which) {
    this.setState({ mobileActiveSelector: which });
  }

  hideMobileActiveSelector() {
    this.setState({ mobileActiveSelector: null });
  }

  resetAll() {
    let self = this;
    self.search && self.state.pendingResetActions.push(self.search.setSearch);
    self.filters && self.filters.forEach((filter) => {
      self.state.pendingResetActions.push(filter.setFilter);
    });
    self.doNextPendingResetAction();
  }

  doNextPendingResetAction() {
    let resetAction = this.state.pendingResetActions.shift();
    resetAction && resetAction({ value: '' })
  }

	render() {

    let self = this;

    let showFilterbar = typeof self.props.showFilterbar != 'undefined' ? self.props.showFilterbar : self.config.display.showFilterbar;
    if (!showFilterbar) {
      return null;
    }

    let searchHTML = null;
    if (self.config.search) {
      searchHTML = (
        <div className={`osc-ideas-search-container`}>
          <div className="osc-ideas-search-button" onClick={() => self.toggleMobileActiveSelector('search')}></div>
          <IdeasSearch config={ self.config.search } className={`${self.state.mobileActiveSelector == 'search' ? ' osc-is-active' : ''}`} ref={el => self.search = el}/>
        </div>
      );
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
