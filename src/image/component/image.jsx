import merge from 'merge';
import React, { useRef } from 'react';

import OpenStadComponent from '../../component/index.jsx';

'use strict';

export default class OpenStadComponentImage extends OpenStadComponent {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {
      image: {
        server: {},
        aspectRatio: '16x9',
        allowMultipleImages: false,
      }
		};
		this.config = merge.recursive(defaultConfig, this.config, this.props.config || {})
    
    this.state = {
      currentImageIndex: 0,
      width: 0,
    };

  }

  componentDidMount () {
    let elem = this.mainElement && this.mainElement.parentNode;
    if (elem) this.setState({width: elem.offsetWidth})
  }

  setCurrentImageIndex (which) {
    this.setState({currentImageIndex: which})
  }

  getImagesFromProps() {
    let images = this.props.images || [];
    let image = this.props.image || images[this.state.currentImageIndex];
    return [this.props.image, images];
    
  }

  getImageSrc(image) {
    let imageSrc;
    let width, height;
    [ width, height ] = this.getWidthHeight();
    if (width && height) {
      imageSrc = image;
      if ( typeof image == 'object' && image.src ) imageSrc = image.src;
      if (!imageSrc ) imageSrc = this.config.image.placeholderImageSrc;
      if (imageSrc && this.config.image.server.srcExtension && imageSrc.match(this.config.image.server.fetch)) {
        let ext = this.config.image.server.srcExtension;
        ext = ext.replace(/\[\[width\]\]/g, width).replace(/\[\[height\]\]/g, height);
        imageSrc = imageSrc + ext;
      }
    }
    return imageSrc;
  }

  getAspectRatioFactor() {
    if (this.props.width && this.props.height) return this.props.width/this.props.height
    let match = this.config.image.aspectRatio.match(/(\d+)x(\d+)/);
    return match ? match[1] / match[2] : 16/9
  }

  getWidthHeight() {
    let parentNode = this.mainElement && this.mainElement.parentNode
    let width = this.props.width || this.state.width || ( parentNode && parentNode.offsetWidth );
    let height = this.props.height || width * ( 1 / this.getAspectRatioFactor() ) || undefined;
    return [ width, height ]
  }

	render() {

    let self = this;

    let images, image;
    [ image, images ] = self.getImagesFromProps();

    let width, height;
    [ width, height ] = self.getWidthHeight();

    if (self.config.image.allowMultipleImages && images.length > 1) {

      // multiple
      let src = self.getImageSrc(image);
      return (
        <div id={self.divId} className={`osc-multiple-images ${self.props.className || ''}`}  ref={ el => this.mainElement = el}>
        
          <div className="osc-image-spacer" style={{ width, height }}>
            <div className="osc-image" style={src ? { backgroundImage: `url(${src})` } : {}} key={'image-' + self.divId}></div>
          </div>

          <div className="osc-multiple-images-thumbs" style={{ height: 0.1 * self.state.width }}>

            {images.map(( thumb, i ) => {
              let thumbheight = 0.1 * width;
              let thumbwidth = thumbheight * self.getAspectRatioFactor();
              let thumbleft = ( thumbwidth *  1.05 ) * i;
              let thumbsrc = self.getImageSrc(thumb);
              return (
                <div className="osc-image-thumb-spacer" key={`osc-image-thumb-${i}`} style={{ left: thumbleft, width: thumbwidth, height: thumbheight }}>
                  <div className="osc-image-thumb" style={thumbsrc ? { backgroundImage: `url(${thumbsrc})`, zIndex: 10-i } : {}} onClick={e => self.setCurrentImageIndex(i)}></div>
                </div>
              );
            })}

          </div>

        </div>
      );

    } else {

      // singular
      let src = self.getImageSrc(image);
      return (
        <div id={self.divId} className={`osc-image-spacer ${self.props.className || ''}`} style={{ width, height }} ref={ el => this.mainElement = el}>
          <div className="osc-image" style={src ? { backgroundImage: `url(${src})` } : {}} onClick={this.props.onClick} key={'image-' + self.divId}></div>
        </div>
      );
      
    }

  }

}
