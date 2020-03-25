import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Graphic = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1.2em;
    height: 100%;

    &::before {
        background-color: ${({color}) => color};
        content: '';
        height: 100%;
        width: 60%;
    }

    &::after {
        background-color: ${({color}) => color};
        content: '';
        height: 100%;
        width: 10%;
    }
`;

const DoubleBarLine = ({
    className,
    color = '#4e4b42'
}) => (
    <Graphic className={className} color={color}/>
);

DoubleBarLine.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};

export default DoubleBarLine;
