import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 100%;
`;

const Image = ({
    src
}) => (
    <Img src={src} />
);

Image.propTypes = {
    src: PropTypes.string
};

export default Image;
