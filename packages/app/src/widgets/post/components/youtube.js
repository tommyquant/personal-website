import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactYoutube from 'react-youtube';

const StyledReactYoutube = styled(ReactYoutube)`
    display: block;
    margin: 0 auto;
    max-width: 100%;
`;

const Youtube = ({
    videoId
}) => (
    <StyledReactYoutube videoId={videoId} />
);

Youtube.propTypes = {
    videoId: PropTypes.string
};

export default Youtube;
