'use strict';

import OpenStadComponent from '../../component/index.jsx';

export default class OpenStadComponentIdeaImage extends OpenStadComponent {

  constructor(props) {

    super(props, {
      allowMultipleImages: false
		});

    this.state = {
      currentImageIndex: 0,
      width: 0,
    };
        
  }

  componentDidMount () {
    let elem = document.querySelector(`#${this.divId}`);
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

    if (self.config.allowMultipleImages && images.length > 1) {

      // multiple
      return (
        <div id={self.divId} className="osc-idea-multiple-images">
        
          <div className="osc-idea-image-spacer">
            <div className="osc-idea-image" style={image ? { backgroundImage: `url(${image})` } : {}} key={'image-' + idea.id}></div>
          </div>

          <div className="osc-idea-multiple-images-thumbs">

            {images.map(( thumb, i ) => {
              let height = 0.1 * self.state.width;
              let width = height * 16/9;
              // let left = ( width *  1.07) * i + ( self.state.width - width *  1.07* images.length ) / 2;
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
        <div id={self.divId} className="osc-idea-image-spacer">
          <div className="osc-idea-image" style={image ? { backgroundImage: `url(${image})` } : {}} key={'image-' + idea.id}></div>
        </div>
      );
      
    }

  }

}
