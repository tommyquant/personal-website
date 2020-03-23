import React from 'react';
import PropTypes from 'prop-types';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';

const Preview = ({value}) => {
    const { url } = value;
    const id = getYouTubeId(url);
    return (<YouTube videoId={id} />);
};

Preview.propTypes = {
    value: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
};

export default Preview;
