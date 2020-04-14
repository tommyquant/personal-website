import React from 'react';

import {imageUrlBuilder} from '../../common/sanity-image';
import ResponsiveImg from '../../components/responsive-img';

import Youtube from './components/youtube';

/* eslint-disable react/display-name, react/prop-types */
const serializers = {
    types: {
        image: ({node}) => {
            console.log(node);
            return <ResponsiveImg center fallbackSrc={imageUrlBuilder.image(node).url()} />;
        },
        youtube: ({node}) => <Youtube videoId={node.video_id} />
    }
};
/* eslint-enable react/display-name, react/prop-types */

export default serializers;
