import React from 'react';

'use strict';

export default class IdeasList extends React.Component {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {
      types: [],
      titleField: 'title',
      summaryField: 'summary',
      // sortOptions: [{ value: 'random', name: 'Random' }, { value: 'ranking', name: 'Ranking' }, { value: 'newest', name: 'Nieuwste eerst' }, { value: 'oldest', name: 'Oudste eerst' }, { value: 'distance', name: 'Afstand' }],
      sortOptions: [{ value: 'newest', name: 'Nieuwste eerst' }, { value: 'oldest', name: 'Oudste eerst' }],
      showSortButton: true,
      idea: {
        showVoteButtons: true,
      },
      defaultSortOrder: 'newest',
		};
		this.config = Object.assign(defaultConfig, this.props.config || {})
		this.config.onIdeaClick = this.config.onIdeaClick || this.onIdeaClick.bind(this);

    this.state = {
      currentSortOrder: this.config.defaultSortOrder,
      ideas: this.props.ideas || [],
      showSortButton: this.config.showSortButton,
      currentMouseOverIdea: null,
    };

  }

	componentDidMount(prevProps, prevState) {
	}

  updateIdeas({ ideas = this.state.ideas, sortOrder = this.state.currentSortOrder, showSortButton = this.state.showSortButton, center = { lat: 52.37104644463586, lng: 4.900402911007405 }, maxLength }) {

    let self = this;
    let state = { ...self.state };

		switch(sortOrder){
			case 'ranking':
				ideas = ideas.sort( function(a,b) { return a.ranking - a.ranking });
				break;
			case 'newest':
				ideas = ideas.sort( function(a,b) { return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() });
				break;
			case 'oldest':
				ideas = ideas.sort( function(a,b) { return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() });
				break;
			case 'distance':
				ideas = ideas
          .map( idea => { idea._distance = Math.sqrt( Math.pow( idea.location.coordinates[0] - center.lat, 2 ) + Math.pow( idea.location.coordinates[1] - center.lng, 2 ) ); return idea; } )
          .sort( function(a,b) { return a._distance - b._distance })
				break;
			case 'random':
			default:
				ideas = ideas.sort( function(a,b) { return Math.random() - 0.5 });
				break;
		}

    state.ideas = maxLength ? ideas.slice(0, maxLength): ideas;

    state.showSortButton = showSortButton;

    self.setState(state);

  }

  setSortOrder({ sortOrder }) {
    this.setState({
      ...this.state,
      currentSortOrder: sortOrder
    }, function() {
      this.updateIdeas({ sortOrder })
    });
  }

  onIdeaClick(e) {
    // placeholder
  }

  dispatchMouseOverListItem(e, idea) {
    e.stopPropagation();
    let newMouseOverIdeaId = idea.id;
    if (!this.state.currentMouseOverIdea || newMouseOverIdeaId != this.state.currentMouseOverIdea.id) {
      this.setState({ currentMouseOverIdea: idea.id });
		  var event = new window.CustomEvent('mouseOverListItem', { detail: { idea: idea } });
		  document.dispatchEvent(event);
    }
  };
  
  dispatchMouseOutListItem(e) {
    e.stopPropagation();
    if (this.state.currentMouseOverIdea) {
      this.setState({ currentMouseOverIdea: null });
		  var event = new window.CustomEvent('mouseOutListItem', {});
		  document.dispatchEvent(event);
    }
  }

	render() {

    let self = this;

    let sortSelector = null;
    if (this.state.showSortButton) {
      sortSelector = (
        <div className="osc-sort osc-align-right-container osc-margin-right">
          Sorteer op:&nbsp;&nbsp;&nbsp;&nbsp;
          <select value={self.state.currentSortOrder} onChange={() => self.setSortOrder({ sortOrder: self.sortSelector.value })} className="osc-default-select" ref={el => (self.sortSelector = el)}>
            { self.config.sortOptions.map((option, i) => {
              return <option value={ option.value } key={'sort-option-' + i}>{ option.name }</option>;
            })}
          </select>
        </div>
      );
    } else {
      sortSelector = (<div style={{height: 20}}></div>)
    }

    let titleHML = (<h3 className="osc-title">{self.props.title} ({self.state.ideas.length})</h3>);

    return (
			<div id={self.id} className={self.props.className || 'osc-info-block-ideas-list'} ref={el => (self.instance = el)}>

        {sortSelector}

        {titleHML}

        { self.state.ideas.map((idea, i) => {
          if (!idea) {
            console.log('idea is undef', i, self.state.ideas);
          }
          let typeDef = self.config.types.find(entry => idea.extraData && entry.name == idea.extraData.theme); // TODO: use typefield
          if (!typeDef || !typeDef.listicon) { typeDef = { listicon: { html: '' } }; } // console.log(idea.extraData.theme + ' niet gevonden'); }
          let voteCountHTML = null;
          if (this.config.idea.showVoteButtons) {
            voteCountHTML = (
              <div className="osc-likes">
                {idea.yes || 0}
              </div>);
          }
          let argcountHTML = null;
          if (this.config.argument.isActive && !this.config.argument.ignoreReactionsForIdeaIds.match(new RegExp(`(?:^|\\D)${idea.id}(?:\\D|$)`))) {
            argcountHTML = (
              <div className="osc-reactions">
                {idea.argCount || 0}
              </div>);
          }
          return (
            <div className={`osc-info-block-ideas-list-idea${self.state.currentMouseOverIdea && self.state.currentMouseOverIdea != idea.id ? ' osc-opacity-25' : ''}`} onClick={(event) => self.config.onIdeaClick(event, idea)} key={'info-block-' + i} onMouseOver={e => self.dispatchMouseOverListItem(e, idea)} onMouseOut={e => self.dispatchMouseOutListItem(e)}>
              <div className="osc-content">
                <div className="osc-image" style={{ backgroundImage: `url(${idea.image})` }}></div>
                <h4 className="osc-title">{ eval(`idea.${self.config.titleField}`) }</h4>
                <div className="osc-summary">
                  { eval(`idea.${self.config.summaryField}`) }
                </div>
                <div className="osc-stats">
                  {voteCountHTML}
                  {argcountHTML}
                  <div className="osc-type">
                    <div className="osc-type-content" dangerouslySetInnerHTML={{ __html: typeDef.listicon.html }}></div>
                  </div>
                </div>
              </div>
              <div className="osc-clear-both"></div>
            </div>
          );
        })}
			</div>
    );

  }

}
