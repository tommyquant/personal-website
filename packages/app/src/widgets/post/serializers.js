import React from 'react';

import {getImageUrl, getSrcsetOptions} from '../../common/sanity-image';
import ResponsiveImg from '../../components/responsive-img';

import Youtube from './components/youtube';

/* eslint-disable react/display-name, react/prop-types */
const serializers = {
    types: {
        image: ({node}) => <ResponsiveImg center srcsetOptions={getSrcsetOptions(node)} fallbackSrc={getImageUrl(node)} />,
        youtube: ({node}) => <Youtube videoId={node.video_id} />
    }
};
/* eslint-enable react/display-name, react/prop-types */

export default serializers;
