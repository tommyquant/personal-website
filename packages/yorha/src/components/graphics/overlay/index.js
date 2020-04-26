import React from 'react';
import PropTypes from 'prop-types';
import {rgba} from 'polished';

import {fuscousGray} from '../../../common/style/palette';

const Overlay = ({
    className,
    color,
    gridOpacity = 0.05,
    vignetteOpacity = 0.35,
    ...htmlAttributes
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width="100%"
            height="100%"
            {...htmlAttributes}
        >
            <defs>
                <pattern
                    id="grid-pattern"
                    width="7"
                    height="7"
                    patternUnits="userSpaceOnUse"
                >
                    <rect width="100%" height="100%" fill="none" strokeWidth="2" stroke={rgba(color, gridOpacity)} />
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
        </svg>
    );
};

Overlay.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    gridOpacity: PropTypes.number,
    vignetteOpacity: PropTypes.number
};

export default Overlay;
