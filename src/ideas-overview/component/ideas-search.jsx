'use strict';

import OpenStadComponent from '../../component/index.jsx';

// todo:
// button
// hij doet nu search as you type, ik denk dat je dat niet altijd wilt dus configurabel
// showSearch
// showButton
// showSuggestions

export default class IdeasSearch extends OpenStadComponent {

  constructor(props) {

    super(props, {
      placeholder: 'Zoeken',
      fieldNames: ['title', 'summary'],
      showSearch: true,
      showButton: false,
      showSuggestions: false,
      defaultValue: '',
		});

    this.doSearch = this.doSearch.bind(this);
    this.setSearch = this.setSearch.bind(this);

    this.state = {
      currentValue: this.config.defaultValue,
    };
        
  }

	componentDidMount(prevProps, prevState) {
    if (this.state.currentValue) this.setFilter({ value: this.state.currentValue })
  }

  doSearch(ideas, value) {

    let self = this;
    value = value || this.state.currentValue;

    ideas = ideas.filter(idea => {
      let found = false;
      self.config.fieldNames.forEach((fieldName) => {
        let fieldValue = eval(`idea.${fieldName}`);
        if ( fieldValue.match( new RegExp(value, 'i') ) ) found = true;
      });
      return found;
    })

    return ideas;
    
  }

  setSearch({ value }) {

    let self = this;

    this.setState({
      currentValue: value,
    }, function() {
      let event = new window.CustomEvent('osc-ideas-search-onchange', { detail: { value, doSearch: self.doSearch } });
		  document.dispatchEvent(event);
    });

  }

  showSuggestions(){
  }

  hideSuggestions(){
  }
  
	render() {

    let self = this;

    if (self.config.showSearch == false) {
      return null;
    }

    let labelHTML = null;
    if ( self.config.label ) labelHTML = (<div className="osc-search-label">{self.config.label}:</div>)

    // TODO
    let suggestionsHTML = null;

    return (
      <div className={`osc-ideas-search ${self.props.className || ''}`}>
        {labelHTML}
				{suggestionsHTML}
				<input type="text" value={this.state.currentValue} placeholder={self.config.placeholder} onChange={() => self.setSearch({ value: self.searchInput.value }) } onBlur={() => self.hideSuggestions()} onFocus={() => self.showSuggestions()} className="osc-default-input osc-ideas-search-input" ref={el => self.searchInput = el}/>
        <button className={`osc-ideas-search-button${ this.state.currentValue ? ' osc-active' : '' }`} onClick={(event) => self.setSearch({ value: '' })} ref={el => (self.resetButton = el)}/>
      </div>
    );

  }

}
