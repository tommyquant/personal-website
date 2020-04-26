import React from 'react';
import PropTypes from 'prop-types';

const Indicator = ({
    className,
    color,
    ...htmlAttributes
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 0 100 76"
            className={className}
            {...htmlAttributes}
        >
            <path fill={color} d="M86.815 62.21H100v13.185H86.815zM31.185 16.156L100 37.697 31.185 59.239 0 37.697l31.185-21.541zm-3.887 14.299a7.245 7.245 0 00-7.242 7.242 7.246 7.246 0 007.242 7.243 7.246 7.246 0 007.242-7.243 7.245 7.245 0 00-7.242-7.242zM86.815 0H100v13.185H86.815z"/>
        </svg>
    );
};

Indicator.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};

export default Indicator;
