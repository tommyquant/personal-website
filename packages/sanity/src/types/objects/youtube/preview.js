import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

const Preview = ({value}) => {
    const {video_id} = value;

    return <YouTube videoId={video_id} />;
};

Preview.propTypes = {
    value: PropTypes.shape({
        video_id: PropTypes.string.isRequired
    })
};

export default Preview;
