'use strict';

import OpenStadComponent from '../../component/index.jsx';

export default class OpenStadComponentLightbox extends OpenStadComponent {

  constructor(props) {

    super(props);

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
    
    // eval aspect ratio
    let aspectRatio;
    try {
      aspectRatio = eval( data.aspectRatio.replace && data.aspectRatio.replace('x', '/') );
    } catch (err) {}
    if (typeof aspectRatio != 'number') aspectRatio = 16/9;

    self.setState({
      images: data.images,
      startIndex: data.startIndex,
      aspectRatio,
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
    if (mainWidth / mainHeight > self.state.aspectRatio) {
      let height = .8 * mainHeight;
      self.mainImageContainer.style.height = height + 'px';
      self.mainImageContainer.style.width = ( self.state.aspectRatio * height ) + 'px';
      self.mainImageContainer.style.top = ( ( mainHeight - height ) / 2 ) + 'px';
      self.mainImageContainer.style.left = ( ( mainWidth - ( self.state.aspectRatio * height ) ) / 2 ) + 'px';
    } else {
      let width = mainWidth;
      self.mainImageContainer.style.width = width + 'px';
      self.mainImageContainer.style.height = ( 1/self.state.aspectRatio * width ) + 'px';
      self.mainImageContainer.style.top = ( ( mainHeight - ( 1/self.state.aspectRatio * width ) ) / 2 ) + 'px';
      self.mainImageContainer.style.left = 0;
    }

    self.mainImage.style.width = self.mainImageContainer.style.width;
    self.mainImage.style.height = self.mainImageContainer.style.height;

    let navImgWidth = self.state.aspectRatio * self.navigationContainer.offsetHeight;
    let width = self.state.images.length * navImgWidth + self.state.images.length * 20;
    if ( width > self.navigationContainer.offsetWidth ) {
      width = self.navigationContainer.offsetWidth;
      navImgWidth = width / self.state.images.length - 20;
    }
    
    self.navigationContainer.style.width = width + 'px';

    self.state.images.map( ( image, i ) => {
      let width = parseInt( navImgWidth );
      self[`lighbox-image-container-${i}`].style.width = width + 'px';
      self[`lighbox-image-container-${i}`].style.height = parseInt( 1/self.state.aspectRatio * width ) + 'px';

      self[`lighbox-image-${i}`].style.width = self[`lighbox-image-container-${i}`].style.width;
      self[`lighbox-image-${i}`].style.height = self[`lighbox-image-container-${i}`].style.height;

    });

  }

	render() {

		let self = this;

    return (
			<div className="osc-lightbox" onClick={ () => { this.hideLightbox(); } } ref={el => (self.instance = el)}>
        <div className="osc-close-button" onClick={ (e) => self.hideLightbox(e) } ></div>
        <div className="osc-lightbox-main-container" ref={el => (self.mainContainer = el)}>
          <div className="osc-image-container" ref={el => (self.mainImageContainer = el)}>
            <img src={ self.state.images[self.state.startIndex] && self.state.images[self.state.startIndex].src } ref={el => (self.mainImage = el)}/>
          </div>
        </div>
        <div className="osc-lightbox-navigation-container">
        <div className="osc-lightbox-navigation" ref={el => (self.navigationContainer = el)}>
          { self.state.images.map( ( image, i ) => {
            return (
              <div className="osc-image-container" style={{ backgroundImage: `url(${image.src})`}} onClick={ (e) => self.showImage(e, image.src) } key={`lighbox-image-container-${i}`} ref={ el => self[`lighbox-image-container-${i}`] = el}>
                <img src={ image.src } ref={ el => self[`lighbox-image-${i}`] = el}/>
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

