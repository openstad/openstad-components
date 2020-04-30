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

    // console.log('-------------------- Lightbox.show()');
    // console.log(data);

    this.setState({
      images: data.images,
      startIndex: data.startIndex,
    })

    this.instance.style.display = 'block'
    
  }

  hideLightbox() {
    this.instance.style.display = 'none'
  }

  showImage(e, src) {
    e.stopPropagation();
    this.mainImage.src = src;
  }

	render() {

		let self = this;

    return (
			<div className="osc-lightbox" onClick={ () => { this.hideLightbox(); } } ref={el => (self.instance = el)}>
        <img src={ self.state.images[self.state.startIndex] && self.state.images[self.state.startIndex].src } className="osc-main-img" ref={el => (self.mainImage = el)}/>
        <div className="osc-lightbox-navigation-container">
          <div className="osc-lightbox-navigation">
            { self.state.images.map( ( image, i ) => {
              return <img src={ image.src } className="osc-thumb-img" onClick={ (e) => self.showImage(e, image.src) } key={`lighbox-image-${i}`}/>
            })
            }
          </div>
        </div>
			</div>
    );

  }

}
