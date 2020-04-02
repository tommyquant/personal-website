import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {rgba} from 'polished';

import {fuscousGray} from '../../../common/style/palette';

const StyledSvg = styled.svg`
    height: 100%;
    width: 100%;
`;

const Overlay = ({
    className,
    color = rgba(fuscousGray, 0.05),
    vignetteOpacity = 0.35,
    ...htmlAttributes
}) => {
    return (
        <StyledSvg
            className={className}
            {...htmlAttributes}
        >
            <defs>
                <pattern
                    id="grid-pattern"
                    width="10"
                    height="10"
                    patternTransform="scale(0.65)"
                    patternUnits="userSpaceOnUse"
                    fill={color}
                >
                    <rect width="10" height="2" />
                    <rect width="2" height="10" />
                </pattern>

                <linearGradient id="vignette" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: fuscousGray, stopOpacity: vignetteOpacity}} />
                    <stop offset="15%" style={{stopColor: fuscousGray, stopOpacity: 0}} />
                    <stop offset="85%" style={{stopColor: fuscousGray, stopOpacity: 0}} />
                    <stop offset="100%" style={{stopColor: fuscousGray, stopOpacity: vignetteOpacity}} />
                </linearGradient>
            </defs>
            
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            <rect width="100%" height="100%" fill="url(#vignette)" />
        </StyledSvg>
    );
};

Overlay.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    vignetteOpacity: PropTypes.number
};

export default Overlay;
