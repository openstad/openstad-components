'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';

export default class IdeasSort extends OpenStadComponent {

  constructor(props) {

    super(props, {
      label: null,
      sortOptions: [{ value: 'createdtime,desc', label: 'Nieuwste eerst' }, { value: 'createdtime,asc', label: 'Oudste eerst' }, { value: 'title', label: 'Titel' }, { value: 'random', label: 'Willekeurig' }, { value: 'likes,desc', label: 'Meeste likes' }, { value: 'likes,asc', label: 'Minste likes' }, { value: 'args,desc', label: 'Meeste reacties' }, { value: 'args,asc', label: 'Minste reacties' }, { value: 'ranking,asc', label: 'Ranglijst' }],
      defaultValue: 'createdtime,desc',
      showSort: true,
			center: {
				latitude: 52.37104644463586,
				longitude: 4.900402911007405,
			},
		});

    this.state = {
      currentValue: this.config.defaultValue,
    };
        
  }

  doSort({ ideas, sortOrder, center }) {
    sortOrder = sortOrder || this.state.currentValue;
    center = center || this.config.center;
    return OpenStadComponentLibs.ideasSort({ ideas, sortOrder, center });
  }

  setSortOrder({ sortOrder }) {

    let self = this;
    let ideas = self.props.ideas || [];

    ideas = self.doSort({ ideas, sortOrder });

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

    let showSort = ( self.config.sortOptions && self.config.sortOptions.length ) && ( typeof self.props.showSort != 'undefined' ? self.props.showSort : self.config.showSort );
    if (!showSort) {
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
