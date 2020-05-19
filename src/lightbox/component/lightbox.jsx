import merge from 'merge';
import React from 'react';
import ReactDOM from 'react-dom';

'use strict';

export default class OpenStadComponentLightbox extends React.Component {

  constructor(props) {

    super(props);

		this.defaultConfig = {
		};
		this.config = merge.recursive(this.defaultConfig, this.config, props.config || {})

    this.state = {
      images: [],
      startIndex: 0,
    };

    this.recalcSizes = this.recalcSizes.bind(this);

  }

	componentDidMount(prevProps, prevState) {

    let self = this;

    // start on event
		document.addEventListener('osc-show-light-box', function(event) {
      self.showLightbox(event.detail);
    });

    // move to root
    document.body.appendChild(this.instance);

  }
  
  showLightbox(data) {

    let self = this;
    
    // console.log('-------------------- Lightbox.show()');
    // console.log(data);

    self.setState({
      images: data.images,
      startIndex: data.startIndex,
    }, () => {
      self.instance.style.display = 'block'
      self.recalcSizes();
    })

    window.addEventListener('resize', self.recalcSizes);

  }

  hideLightbox() {
    this.instance.style.display = 'none'
    window.removeEventListener('resize', self.recalcSizes);
  }

  showImage(e, src) {
    e.stopPropagation();
    this.mainImage.src = src;
  }

  recalcSizes() {

    let self = this;

    if (!self.mainContainer) return;

    let mainWidth = self.mainContainer.offsetWidth;
    let mainHeight = self.mainContainer.offsetHeight;
    if (mainWidth / mainHeight > 16/9) {
      let height = .8 * mainHeight;
      self.mainImage.style.height = height + 'px';
      self.mainImage.style.width = ( 16/9 * height ) + 'px';
      self.mainImage.style.top = ( ( mainHeight - height ) / 2 ) + 'px';
      self.mainImage.style.left = ( ( mainWidth - ( 16/9 * height ) ) / 2 ) + 'px';
    } else {
      let width = mainWidth;
      self.mainImage.style.width = width + 'px';
      self.mainImage.style.height = ( 9/16 * width ) + 'px';
      self.mainImage.style.top = ( ( mainHeight - ( 9/16 * width ) ) / 2 ) + 'px';
      self.mainImage.style.left = 0;
    }

    console.log(mainWidth + '/' + mainHeight + ' - ' +self.mainImage.style.width + '/' + self.mainImage.style.height);

    let navImgWidth = 16 / 9 * self.navigationContainer.offsetHeight;
    self.navigationContainer.style.width = ( self.state.images.length * navImgWidth + self.state.images.length * 20 ) + 'px';

    self.state.images.map( ( image, i ) => {
      self[`lighbox-image-${i}`].style.width = parseInt( navImgWidth ) + 'px';
    });

  }

	render() {

		let self = this;

    return (
			<div className="osc-lightbox" onClick={ () => { this.hideLightbox(); } } ref={el => (self.instance = el)}>
        <div className="osc-lightbox-main-container" ref={el => (self.mainContainer = el)}>
          <div className="osc-image-container" ref={el => (self.mainImage = el)}>
            <img src={ image.src } onClick={ (e) => self.showImage(e, image.src) }/>
          </div>
        </div>
        <div className="osc-lightbox-navigation-container">
        <div className="osc-lightbox-navigation" ref={el => (self.navigationContainer = el)}>
          { self.state.images.map( ( image, i ) => {
            return (
              <div className="osc-image-container" key={`lighbox-image-${i}`} ref={ el => self[`lighbox-image-${i}`] = el}>
                <img src={ image.src } onClick={ (e) => self.showImage(e, image.src) }/>
              </div>
            )                                                   
          })
          }
			  </div>
			  </div>
			</div>
    );

  }

}

