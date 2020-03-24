import React from 'react';

import imageUrlBuilder from '../../common/image-url-builder';

import Image from './components/image';
import Youtube from './components/youtube';

/* eslint-disable react/display-name, react/prop-types */
const serializers = {
    types: {
        image: ({node}) => <Image src={imageUrlBuilder.image(node.asset._ref).url()} />,
        youtube: ({node}) => <Youtube videoId={node.video_id} />
    }
};
/* eslint-enable react/display-name, react/prop-types */

export default serializers;
