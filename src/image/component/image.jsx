import merge from 'merge';
import React from 'react';

import OpenStadComponent from '../../component/index.jsx';

'use strict';

export default class OpenStadComponentIdeaImage extends OpenStadComponent {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {
      aspectRatio: '16x9',
      allowMultipleImages: false,
		};
		this.config = merge.recursive(defaultConfig, this.config, this.props.config || {})

    let match = this.config.aspectRatio.match(/(\d+)x(\d+)/);
    this.config.aspectRatioFactor = match ? match[1] / match[2] : 16/9


    this.state = {
      currentImageIndex: 0,
      width: 0,
    };

  }

  componentDidMount () {
    let elem = document.querySelector(`#${this.divId}`).parentNode;
    this.setState({width: elem.offsetWidth})
  }

  setCurrentImageIndex (which) {
    this.setState({currentImageIndex: which})
  }

	render() {

    let self = this;
    let idea = self.props.idea;

    if (!idea) return null;

    let images = (idea.extraData && idea.extraData.images) || [];
    let image = (idea.posterImage && idea.posterImage.key) || (idea.extraData && idea.extraData.images && idea.extraData.images[self.state.currentImageIndex]);

    let width = self.state.width;
    let height = width * ( 1 / self.config.aspectRatioFactor );

    if (self.config.allowMultipleImages && images.length > 1) {

      // multiple
      return (
        <div id={self.divId} className="osc-idea-multiple-images">
        
          <div className="osc-idea-image-spacer" style={{ width, height }}>
            <div className="osc-idea-image" style={image ? { backgroundImage: `url(${image})` } : {}} key={'image-' + idea.id}></div>
          </div>

          <div className="osc-idea-multiple-images-thumbs" style={{ height: 0.1 * self.state.width }}>

            {images.map(( thumb, i ) => {
              let height = 0.1 * self.state.width;
              let width = height * self.config.aspectRatioFactor;
              let left = ( width *  1.05 ) * i;
              return (
                <div className="osc-idea-image-thumb-spacer" key={`osc-idea-image-thumb-${i}`} style={{ left, width, height }}>
                  <div className="osc-idea-image-thumb" style={thumb ? { backgroundImage: `url(${thumb})`, zIndex: 10-i } : {}} onClick={e => self.setCurrentImageIndex(i)}></div>
                </div>
              );
            })}

          </div>

        </div>
      );

    } else {

      // singular
      return (
        <div id={self.divId} className="osc-idea-image-spacer" style={{ width, height }}>
          <div className="osc-idea-image" style={image ? { backgroundImage: `url(${image})` } : {}} key={'image-' + idea.id}></div>
        </div>
      );
      
    }

  }

}
