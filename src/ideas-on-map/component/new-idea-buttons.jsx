import React from 'react';

'use strict';

export default class newIdeaButtons extends React.Component {

  constructor(props) {

    super(props);

		let defaultConfig = {
		};
		this.config = Object.assign(defaultConfig, this.props.config || {})

    this.state = {
    }

  }

	componentDidMount(prevProps, prevState) {
	}

  handleButtonClick(event) {
		let self = this;
    if (self.state.searchValue) {
      self.setState({ searchValue: '' }, () => {
        self.inputfield.focus();
      });
    }
  }

	render() {

    let self = this;

		let suggestionsHTML = null;
		if (self.state.showSuggestions) {
			suggestionsHTML = (
				<div className="osc-search-suggestions" ref={el => (self.suggestions = el)}>
					Adressen:
          { self.state.searchResult.locations.map((result, i) => {
						let text = result.text.replace(new RegExp(self.state.searchValue, 'ig'), ($0) => '<strong>' + $0 + '</strong>');
            return <div className="osc-search-suggestion osc-search-suggestion-idea" onClick={ event => self.onSuggestionClick(result.text, event, result.onClick) } key={'search-result-' + i} dangerouslySetInnerHTML={{__html: text}}></div>;
          })}
					<div className="osc-search-suggestions-hr"/>
					{ this.config.title }:
          { self.state.searchResult.ideas.map((result, i) => {
						let text = result.text.replace(new RegExp(self.state.searchValue, 'ig'), ($0) => '<strong>' + $0 + '</strong>');
            return <div className="osc-search-suggestion osc-search-suggestion-idea" onClick={ event => self.onSuggestionClick(result.text, event, result.onClick) } key={'search-result-' + i} dangerouslySetInnerHTML={{__html: text}}></div>;
          })}
				</div>
			);
		}
		
    return (
			<div id={self.id} className={self.props.className || 'osc-search'} ref={el => (self.instance = el)}>

				{suggestionsHTML}
				<input type="text" value={this.state.searchValue} placeholder="Zoek op trefwoord" onChange={() => self.handleChange( self.inputfield.value )} onBlur={() => self.hideSuggestions()} onFocus={() => self.showSuggestions()} className="osc-default-input osc-search-input" ref={el => (self.inputfield = el)}/>
        <button className={`osc-search-button${ this.state.searchValue ? ' osc-active' : '' }`} onClick={(event) => self.handleButtonClick(event)} ref={el => (self.resetButton = el)}/>

			</div>
    );

  }

}
