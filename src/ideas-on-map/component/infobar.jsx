'use strict';

import OpenStadComponent from '../../component/index.jsx';
import IdeasOverview from './ideas-overview.jsx';
import IdeaDetails from '../../idea-details/index.jsx';
import IdeaForm from './idea-form.jsx';
import Preview from './preview.jsx';

'use strict';

// details en form worden nu langs hier getekend, maar de rest moet nog heel erg opgeschoond
// ook hier woren nog funcies meegetuurd die via events moeten lopen

export default class InfoBar extends OpenStadComponent {

  constructor(props) {

    super(props, {
      display: {
        columns: 1,
        showFilterbar: false,
      },
      idea: {
        canAddNewIdeas: true,
        showVoteButtons: true,
      },
      argument: {
        isActive: true,
        ignoreReactionsForIdeaIds: '',
      },
      types: [],
		});

		// config
    this.config.loginUrl = this.config.loginUrl || '/oauth/login?returnTo=' + encodeURIComponent(document.location.href);
    // tmp voor oude data
    if (props.config.content.noSelectionHTML && !props.config.content.noSelectionLoggedInHTML) {
      this.config.content.noSelectionLoggedInHTML = props.config.content.noSelectionHTML
    }
    if (props.config.content.noSelectionHTML && !props.config.content.noSelectionNotLoggedInHTML) {
      this.config.content.noSelectionNotLoggedInHTML = props.config.content.noSelectionHTML
    }

    this.state = {
      currentSortOrder: this.config.defaultValue,
      selectedIdea: undefined,
      newIdea: undefined,
      ideas: [],
      mobileState: props.mobileState || 'closed',
    };

  }

	componentDidMount(prevProps, prevState) {

    let self = this;

    self.setSelectedIdeaListener = function(event) {
      self.setSelectedIdea(event.detail);
    }
		document.addEventListener('osc-set-selected-idea', self.setSelectedIdeaListener);

    self.setSelectedLocationListener = function(event) {
      self.setNewIdea(event.detail);
    }
		document.addEventListener('osc-set-selected-location', self.setSelectedLocationListener);

  }

  componentWillUnmount() {
		document.removeEventListener('osc-set-selected-idea', this.setSelectedIdeaListener);
		document.removeEventListener('osc-set-selected-location', this.setSelectedLocationListener);
  }
  
  updateIdeas({ ideas = this.state.ideas, sortOrder = this.state.currentSortOrder, hideSortButton, center = { lat: 52.37104644463586, lng: 4.900402911007405 }, maxLength }) {
    ideas = this.list ? this.list.sorter.doSort({ ideas, sortOrder, center }) : [];
    this.setState({ ideas });
  }

  // todo: dit moet helemaal weg; hij moet controlled worden
  setSelectedIdea(idea) {
    this.setState({ ...this.state, selectedIdea: idea, newIdea: null });
  }

  setNewIdea(idea) {
    this.setState({ ...this.state, newIdea: idea, selectedIdea: null });
  }
  
  dispatchClickMobileSwitcher(e) {
    e.stopPropagation();
		var event = new window.CustomEvent('osc-click-mobile-switcher', { detail: {} });
		document.dispatchEvent(event);
  };

  render() {

    let self = this;
    
    let config = {...self.config};
    config.display.type = 'list'
    if ( this.props.idea && this.props.idea.extraData && this.props.idea.extraData.type && ( this.props.idea.extraData.type == 'Kans' || this.props.idea.extraData.type == 'Knelpunt' ) ) {
      config.types = [{"name": "Kans","label": "Dit gaat goed","value": "Kans","buttonLabel": "Ik wil een idee posten","backgroundColor": "#bed200","textColor": "black"},{"name": "Knelpunt","label": "Dit kan beter","value": "Knelpunt","backgroundColor": "#ff9100","textColor": "black"}];
      config.typeField = 'extraData.type'
      config.showLabels = true;
    }

    // idea detail
    if (self.props.displayType == 'details') {
      return (
        <IdeaDetails config={config} idea={this.props.idea} className={self.props.className || 'osc-infobar-idea-details'} ref={el => (this.ideadetails = el)}/>
      );
    }

    // idea form
    if (self.props.displayType == 'form') {
      return (
			  <IdeaForm config={config} idea={this.props.idea} className="osc-ideas-on-map-info" ref={el => (this.ideaform = el)}/>
      );
    }

    // ideas in list
    let ideas = self.state.ideas;

    let titleAddition = '';
    let mobileSwitcherHTML = null;
    let mobileTitle = '';
    let maxLength = null;
    let hideSortButton = false;

    // new idea
    if (self.state.newIdea) {
      titleAddition = 'in de buurt';
      mobileTitle = 'Meer details en acties';
      maxLength = 5;
      hideSortButton = true;
    }

    // selected idea
    if (self.state.selectedIdea) {
      titleAddition = 'in de buurt';
      mobileTitle = 'Meer details';
      maxLength = 5;
      hideSortButton = true;
    }

    if (!titleAddition) titleAddition = 'in dit gebied';

    // wat doet dit? het was was if (!newIdeaHTML && !selectedIdeaHTML) {
    if (!self.state.newIdea && !self.state.selectedIdea) {
      mobileTitle = `${config.ideaName} in dit gebied (${self.state.ideas && self.state.ideas.length || 0})`;
    }

    if (self.state.mobileState == 'opened') {
      mobileTitle = 'Terug naar de kaart';
    }

    mobileSwitcherHTML = (
      <div className="osc-mobile-switcher" onClick={ e => self.dispatchClickMobileSwitcher(e) }>
        {mobileTitle}
      </div>
    );

    let title = config.ideaName + ' ' + titleAddition;

    config.display.onMouseOverTileFadeOthers = true;

    return (
			<div id={self.props.id} className={self.props.className || 'osc-infobar'} ref={el => (self.instance = el)}>
        {mobileSwitcherHTML}
			  <div className="osc-info-content">
          <Preview config={config} selectedIdea={self.state.selectedIdea} selectedLocation={self.state.newIdea}/>
			    <IdeasOverview config={config} ideas={self.state.ideas} maxLength={maxLength} hideSortButton={hideSortButton} title={title} ref={el => (self.list = el)}/>
			  </div>
			</div>

    );

  }

}
