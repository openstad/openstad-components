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

    super(props, {
      display: {
        title: 'Inzendingen',
        // type: 'grid',
        type: 'tiles',
        // type: 'list',
        columns: 3,
        onMouseOverTileFadeOthers: false,
      },
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
		});

    this.state = {
      highLightIdeaId: null,
    };
        
  }

	componentDidMount(prevProps, prevState) {

    let self = this;

    self.ideaTileMouseOverListener = function(event) {
      self.onTileMouseOver(event.detail);
    };
    document.addEventListener('osc-idea-tile-mouse-over', self.ideaTileMouseOverListener)

    self.ideaTileMouseOutListener = function(event) {
      self.onTileMouseOut(event.detail);
    };
    document.addEventListener('osc-idea-tile-mouse-out', self.ideaTileMouseOutListener)

	}

  componentWillUnmount() {
    document.removeEventListener('osc-idea-tile-mouse-over', this.ideaTileMouseOverListener)
    document.removeEventListener('osc-idea-tile-mouse-out', this.ideaTileMouseOutListener)
  }

  onTileMouseOver({ idea }) {
    this.setState({ highLightIdeaId: idea.id })
  }

  onTileMouseOut({ idea }) {
    this.setState({ highLightIdeaId: null })
  }
  
	render() {

    let self = this;
    let ideas = self.props.ideas || [];
    
    return (
      <div className={`osc-tile-list-container ${self.props.className || ''}`}>
        <div className="osc-tile-list">
          { ideas.map((idea, i) => {
            return (
              <IdeaTile config={self.config} idea={idea} className={`osc-${self.config.display.columns}-columns${this.config.display.onMouseOverTileFadeOthers && self.state.highLightIdeaId && self.state.highLightIdeaId != idea.id ? ' osc-opacity-65' : ''}`} key={`osc-idea-tile-${idea.id}`}/>
            );
          })}
        </div>
      </div>
    );

  }

}
