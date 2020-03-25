import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {fuscousGray} from '../../../common/palette';

const Graphic = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    width: 1.3em;

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
        width: 15%;
    }
`;

const DoubleBarLine = ({
    className,
    color = fuscousGray
}) => (
    <Graphic className={className} color={color}/>
);

DoubleBarLine.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};

export default DoubleBarLine;
