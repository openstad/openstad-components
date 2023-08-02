'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import { IdeaImage as OpenStadComponentIdeaImage } from '../../image/index.jsx';

export default class ideaTileExpandedContent extends OpenStadComponent {

  constructor(props) {

    super(props, {
		});

    this.state = {
      idea: this.props.idea || {},
    };
        
  }

	render() {

    let self = this;
    let idea = self.state.idea;

    // now render
    return (
      <div id={`osc-content-${idea.id}`} className="gridder-content" style={{ display: 'none' }}>
        <h3>{idea.title}</h3>
        <div className="osc-idea-summary">{idea.summary}</div>
        <br/>
        <div className="osc-idea-description" dangerouslySetInnerHTML={{ __html: idea.description }}></div>
      </div>
    );

  }

}
