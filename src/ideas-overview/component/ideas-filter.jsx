'use strict';

import OpenStadComponent from '../../component/index.jsx';

export default class IdeasFilter extends OpenStadComponent {

  constructor(props) {

    super(props);

    this.doFilter = this.doFilter.bind(this);
    this.setFilter = this.setFilter.bind(this);

    this.state = {
      currentValue: this.config.defaultValue,
    };
        
  }

	componentDidMount(prevProps, prevState) {
    if (this.state.currentValue) this.setFilter({ value: this.state.currentValue })
  }

  doFilter(ideas, value) {

    let self = this;
    value = value || this.state.currentValue;
    // console.log('doFilter', value);

    ideas = ideas.filter(idea => {
      let fieldName = self.config.fieldName;
      let fieldValue = eval(`idea.${fieldName}`);
      return fieldValue == value;
    })

    return ideas;
    
  }

  setFilter({ value }) {

    let self = this;

    this.setState({
      currentValue: value,
    }, function() {
      let event = new window.CustomEvent('osc-ideas-filter-onchange', { detail: { fieldName: self.config.fieldName, value, doFilter: self.doFilter } });
		  document.dispatchEvent(event);
    });

  }

	render() {

    let self = this;

    if (self.config.showFilter == false) {
      return null;
    }

    let labelHTML = null;
    if ( self.config.label ) labelHTML = (<div className="osc-filter-label">{self.config.label}:</div>)

    return (
      <div className={`osc-ideas-filter ${self.props.className || ''}`}>
        {labelHTML}
        <select value={self.state.currentValue} onChange={() => self.setFilter({ value: self.filterSelector.value })} className="osc-default-select" ref={el => (self.filterSelector = el)}>
          { self.config.filterOptions.map((option, i) => {
            let selected = null;
            return <option value={ option.value } key={'filter-option-' + i}>{ option.label }</option>;
          })}
        </select>
      </div>
    );

  }

}
