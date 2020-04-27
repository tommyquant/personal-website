import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import {readableColor} from 'polished';

import {fuscousGray, tana} from '../../../common/style/palette';

const LINE_WIDTH_PX = 5;

const spinnerAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.circle`
    animation: ${spinnerAnimation} 1s linear infinite;
    transform-origin: 50% 50%;
`;

function getReadableColor(color) {
    return readableColor(color, fuscousGray, tana, true);
}

const Loader = ({
    className,
    color,
    ...htmlAttributes
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 100 100"
            className={className}
            {...htmlAttributes}
        >
            <defs>
                <clipPath id="spinner-clip">
                    <rect x="0" y="0" width="50" height="50" />
                </clipPath>
            </defs>

            <circle cx="50%" cy="50%" r="50%" fill={color} />
            <circle cx="50%" cy="50%" r="42%" fill="none" stroke={getReadableColor(color)} strokeWidth={`${LINE_WIDTH_PX}px`} />
            <circle cx="50%" cy="50%" r="23%" fill="none" stroke={getReadableColor(color)} strokeWidth={`${LINE_WIDTH_PX}px`} />
            <Spinner cx="50%" cy="50%" r="37%" fill="none" stroke={getReadableColor(color)} strokeWidth={`${LINE_WIDTH_PX * 1.6}px`} clipPath="url(#spinner-clip)" />
        </svg>
    );
};

Loader.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};

export default Loader;
