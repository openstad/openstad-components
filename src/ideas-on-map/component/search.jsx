import React from 'react';

'use strict';

export default class Search extends React.Component {

  constructor(props) {

    super(props);

		let defaultConfig = {
		};
		this.config = Object.assign(defaultConfig, this.props.config || {})
    this.config.searchIn = props.config.searchIn || ['ideas', 'addresses'];
    this.config.placeholder = props.config.placeholder || 'Zoek op trefwoord';

    this.config.doSearchFunction = this.config.doSearchFunction || this.doSearchx.bind(this);
    this.updateSearchResult = this.updateSearchResult.bind(this);

    this.state = {
			searchValue: '',
			searchResult: { locations: [], ideas: [] },
			showSuggestions: false,
    }

  }

	componentDidMount(prevProps, prevState) {
	}

  handleChange(value) {

    this.updateSearchValue(value);

		if (value.length >=3) {
			this.config.doSearchFunction(value, this.updateSearchResult);
		}

		// dispatch an event
		//var event = new window.CustomEvent('typeFilterUpdate', { detail: { value: value } });
		//this.instance.dispatchEvent(event);

  }

  handleButtonClick(event) {
		let self = this;
    if (self.state.searchValue) {
      self.setState({ searchValue: '' }, () => {
        self.inputfield.focus();
      });
    }
  }

  updateSearchValue(value) {
    this.setState({
			searchValue: value,
			showSuggestions: value.length >=3 ? true : false,
		});
  }

  showSuggestions() {
    this.setState({ showSuggestions: this.state.searchValue.length >= 3 ? true : false });
	}

	hideSuggestions() {
		let self = this;
		// TODO: dit moet anders; het gaat er om dat de onclick op suggesties niet doorkomt omdat hij deze eerst doet
		setTimeout(function(){self.setState({ showSuggestions: false });}, 500);
	}

	updateSearchResult(searchValue, searchResult) {
    this.setState({...this.state, searchResult, showSuggestions: searchValue.length >= 3 ? true : false });
	}

	doSearchx(value) {
		console.log('search function not defined');
	}

  onSuggestionClick(text, event, next) {
    this.updateSearchValue(text)
    if (next) next(event)
  }

	render() {

    let self = this;

		let suggestionsHTML = null;
		if (self.state.showSuggestions) {
      let suggestionDividerHTML = null;
      if (this.config.searchIn.includes('ideas') && this.config.searchIn.includes('addresses')) {
        suggestionDividerHTML = (<div className="osc-search-suggestions-hr"/>);
      }
      let addressSuggestionsHTML = null;
      if (this.config.searchIn.includes('addresses')) {
        addressSuggestionsHTML = (
          <div>
					  Adressen:
            { self.state.searchResult.locations.map((result, i) => {
						  let text = result.text.replace(new RegExp(self.state.searchValue, 'ig'), ($0) => '<strong>' + $0 + '</strong>');
              return <div className="osc-search-suggestion osc-search-suggestion-idea" onClick={ event => self.onSuggestionClick(result.text, event, result.onClick) } key={'search-result-' + i} dangerouslySetInnerHTML={{__html: text}}></div>;
            })}
          </div>);
      }
      let ideasSuggestionsHTML = null;
      if (this.config.searchIn.includes('ideas')) {
        ideasSuggestionsHTML = (
          <div>
					  { this.config.ideaName }:
            { self.state.searchResult.ideas.map((result, i) => {
						  let text = result.text.replace(new RegExp(self.state.searchValue, 'ig'), ($0) => '<strong>' + $0 + '</strong>');
              return <div className="osc-search-suggestion osc-search-suggestion-idea" onClick={ event => self.onSuggestionClick(result.text, event, result.onClick) } key={'search-result-' + i} dangerouslySetInnerHTML={{__html: text}}></div>;
            })}
          </div>);
      }
			suggestionsHTML = (
				<div className="osc-search-suggestions" ref={el => (self.suggestions = el)}>
				  {addressSuggestionsHTML}
          {suggestionDividerHTML}
          {ideasSuggestionsHTML}
				</div>
			);
		}
		
    return (
			<div id={self.id} className={self.props.className || 'osc-search'} ref={el => (self.instance = el)}>

				{suggestionsHTML}
				<input type="text" value={this.state.searchValue} placeholder={self.config.placeholder} onChange={() => self.handleChange( self.inputfield.value )} onBlur={() => self.hideSuggestions()} onFocus={() => self.showSuggestions()} className="osc-default-input osc-search-input" ref={el => (self.inputfield = el)}/>
        <button className={`osc-search-button${ this.state.searchValue ? ' osc-active' : '' }`} onClick={(event) => self.handleButtonClick(event)} ref={el => (self.resetButton = el)}/>

			</div>
    );

  }

}
