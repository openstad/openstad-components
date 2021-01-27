import merge from 'merge';
import React from 'react';

import OpenStadComponentImage from './image.jsx';

'use strict';

export default class OpenStadComponentIdeaImage extends OpenStadComponentImage {

  getImagesFromProps() {

    let idea = this.props.idea;
    if (!idea) return [ '', [ '' ] ];

    let images = (idea.extraData && idea.extraData.images) || [];
    let image = (idea.posterImage && idea.posterImage.key) || (idea.extraData && idea.extraData.images && idea.extraData.images[this.state.currentImageIndex]);

    return [image, images]

  }

}
