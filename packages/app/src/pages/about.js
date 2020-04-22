import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const About = ({
    children,
    className,
    ...htmlAttributes
}) => {
    return (
        <p>About!</p>
    );
};

About.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default About;
