'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import IdeaTile from './idea-tile.jsx';

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
      case 'grid':
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
    
    return (
      <div className={`osc-tile-list-container osc-columns-container ${self.props.className || ''}`}>
        <div className="osc-tile-list osc-columns">
          { ideas.map((idea, i) => {
            return (
              <IdeaTile config={self.config} idea={idea} className={`${this.config.display.onMouseOverTileFadeOthers && self.state.highLightIdeaId && self.state.highLightIdeaId != idea.id ? ' osc-opacity-65' : ''}`} key={`osc-idea-tile-${idea.id}`}/>
            );
          })}
        </div>
      </div>
    );

  }

}
