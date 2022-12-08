'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import { GridderJS } from "./gridder-js";
import IdeaTile from './idea-tile.jsx';
import IdeaTileExpandedContent from './idea-tile-expanded-content.jsx';

// TODO:
// display-type
// Status labels
// genoeg stemmen balk
// thema icon
// theme & area

export default class IdeasList extends OpenStadComponent {

  constructor(props) {

		// config
		let defaultConfig = {
      idea:{
        titleField: 'title',
        summaryField: 'summary',
      },
      sort: {
        sortOptions: [{ value: 'createdtime,desc', label: 'Nieuwste eerst' },{ value: 'createdtime,asc', label: 'Oudste eerst' }],
        showSort: true,
        defaultValue: 'createdtime,desc',
      },
      types: [],
		};

    // type specific default config
    switch (props.config.display && props.config.display.type) {
      case 'list':
        defaultConfig.display = {
          title: 'Inzendingen',
          columns: 1,
          showStatusLabel: false,
          showTheme: false,
          showArea: false,
          showVoteProgressbar: false,
          showStats: true,
          showTypeIcon: true,
          onMouseOverTileFadeOthers: false,
        };
        break;
      case 'expanding-grid':
        defaultConfig.display = {
          title: 'Inzendingen',
          columns: 3,
          showStatusLabel: false,
          showTheme: true,
          showArea: true,
          showVoteProgressbar: false,
          showStats: false,
          showTypeIcon: false,
          onMouseOverTileFadeOthers: false,
        };
        break;
      default:
        defaultConfig.display = {
          title: 'Inzendingen',
          type: 'tiles',
          columns: 4,
          showStatusLabel: true,
          showTheme: false,
          showArea: false,
          showVoteProgressbar: true,
          showStats: true,
          showTypeIcon: false,
          onMouseOverTileFadeOthers: false,
        };
    }

    super(props, defaultConfig);

    this.state = {
      highLightIdeaId: null,
      ideas: props.ideas,
    };
        
  }

	componentDidMount(prevProps, prevState) {

    let self = this;

    self.ideaTileMouseEnterListener = function(event) {
      self.onTileMouseEnter(event.detail);
    };
    document.addEventListener('osc-idea-tile-mouse-enter', self.ideaTileMouseEnterListener)

    self.ideaTileMouseLeaveListener = function(event) {
      self.onTileMouseLeave(event.detail);
    };
    document.addEventListener('osc-idea-tile-mouse-leave', self.ideaTileMouseLeaveListener)

	}

  componentDidUpdate(prevProps, prevState, snapshot) {

    let self = this;

    if (self.config.display.type == 'expanding-grid') {

      if (!self.state.expandingGrid) {
        let expandingGrid = new GridderJS('.osc-tile-list', { columns: self.config.display.columns, gap: 15, resize: false, gridClass: 'osc-gridder-list', itemClass: 'osc-idea-tile', nextText: '', prevText: '', closeText: '' });
        self.setState({ expandingGrid });
      } else {
        self.state.expandingGrid.reinit();
      }

    }

  }

  componentWillUnmount() {
    document.removeEventListener('osc-idea-tile-mouse-enter', this.ideaTileMouseEnterListener)
    document.removeEventListener('osc-idea-tile-mouse-leave', this.ideaTileMouseLeaveListener)
  }

  onTileMouseEnter({ idea }) {
    this.setState({ highLightIdeaId: idea.id })
  }

  onTileMouseLeave({ idea }) {
    this.setState({ highLightIdeaId: null })
  }
  
	render() {

    let self = this;
    let ideas = self.props.ideas || [];

    let tilesHTML = null;
    switch (self.config.display && self.config.display.type) {

      case 'expanding-grid':
        tilesHTML = (
          <>
          <div className={`osc-gridder-list osc-gridder-list-${self.config.display.columns}-columns`}>
              { ideas.map((idea, i) => {
                return (
                  <IdeaTile data-target={`osc-content-${idea.id}`} config={self.config} idea={idea} className={`${this.config.display.onMouseOverTileFadeOthers && self.state.highLightIdeaId && self.state.highLightIdeaId != idea.id ? ' osc-opacity-65' : ''}`} key={`osc-idea-tile-${idea.id}`}/>
                );
              })}
            </div>
            { ideas.map((idea, i) => {
              return (
                <IdeaTileExpandedContent config={self.config} idea={idea} key={`osc-idea-content-${idea.id}`}/>
              );
            })}
          </>
        );
        break;

      case 'list':
      default:
        tilesHTML = (
          <>
            { ideas.map((idea, i) => {
              return (
                <IdeaTile config={self.config} idea={idea} className={`${this.config.display.onMouseOverTileFadeOthers && self.state.highLightIdeaId && self.state.highLightIdeaId != idea.id ? ' osc-opacity-65' : ''}`} key={`osc-idea-tile-${idea.id}`}/>
              );
            })}
          </>
        );

    }

    return (
      <div className={`osc-tile-list-container osc-tile-list-container-as-${self.config.display.type} ${self.props.className || ''}`}>
        <div className={`osc-tile-list`}>
          {tilesHTML}
        </div>
      </div>
    );

  }

}
