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

  getImagesFromProps() {
    let images = this.props.images;
    let image = this.props.image || images[this.state.currentImageIndex];
    return [this.props.image, images];
  }

  getImageSrc(image) {
    let imageSrc = image;
    if ( typeof image == 'object' && image.src ) imageSrc = image.src;
    return imageSrc;
  }

  getAspectRatioFactor() {

    if (this.props.width && this.props.height) return this.props.width/this.props.height
    
    let match = this.config.aspectRatio.match(/(\d+)x(\d+)/);
    return match ? match[1] / match[2] : 16/9
  }

  getWidthHeight() {
    let width = this.props.width || this.state.width;
    let height = this.props.height || width * ( 1 / this.getAspectRatioFactor() );
    return [ width, height ]
  }

	render() {

    let self = this;

    let images, image;
    [ image, images ] = self.getImagesFromProps();

    let width, height;
    [ width, height ] = self.getWidthHeight();

    if (self.config.allowMultipleImages && images.length > 1) {

      // multiple
      return (
        <div id={self.divId} className={`osc-multiple-images ${self.props.className || ''}`}>
        
          <div className="osc-image-spacer" style={{ width, height }}>
            <div className="osc-image" style={image ? { backgroundImage: `url(${self.getImageSrc(image)})` } : {}} key={'image-' + self.divId}></div>
          </div>

          <div className="osc-multiple-images-thumbs" style={{ height: 0.1 * self.state.width }}>

            {images.map(( thumb, i ) => {
              let thumbheight = 0.1 * width;
              console.log(thumbheight);
              let thumbwidth = thumbheight * self.getAspectRatioFactor();
              console.log(thumbwidth);
              let thumbleft = ( thumbwidth *  1.05 ) * i;
              return (
                <div className="osc-image-thumb-spacer" key={`osc-image-thumb-${i}`} style={{ left: thumbleft, width: thumbwidth, height: thumbheight }}>
                  <div className="osc-image-thumb" style={thumb ? { backgroundImage: `url(${self.getImageSrc(thumb)})`, zIndex: 10-i } : {}} onClick={e => self.setCurrentImageIndex(i)}></div>
                </div>
              );
            })}

          </div>

        </div>
      );

    } else {

      // singular
      return (
        <div id={self.divId} className={`osc-image-spacer ${self.props.className || ''}`} style={{ width, height }}>
          <div className="osc-image" style={image ? { backgroundImage: `url(${self.getImageSrc(image)})` } : {}} onClick={this.props.onClick} key={'image-' + self.divId}></div>
        </div>
      );
      
    }

  }

}
