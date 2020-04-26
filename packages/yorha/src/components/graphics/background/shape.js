import React from 'react';
import PropTypes from 'prop-types';

const LINE_WIDTH = '2px';

const OUTER_CIRCLE_PERCENT = 41;
const INNER_CIRCLE_PERCENT = 39;

const LINES = [
    // Bottom
    {
        HALF_WIDTH_PERCENT: 93,
        Y_PERCENT: 3.8
    },
    // Middle
    {
        HALF_WIDTH_PERCENT: 100,
        Y_PERCENT: 0
    },
    // Top
    {
        HALF_WIDTH_PERCENT: 85,
        Y_PERCENT: -3.8
    }
];

const Shape = ({
    className,
    color,
    ...htmlAttributes
}) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="67%"
            viewBox="0 0 100 100"
            {...htmlAttributes}
        >
            <g
                fill="none"
                stroke={color}
                strokeWidth={LINE_WIDTH}
                transform="rotate(45)"
            >
                <circle cx="0" cy="0" r={`${OUTER_CIRCLE_PERCENT}%`} vectorEffect="non-scaling-stroke" />
                <circle cx="0" cy="0" r={`${INNER_CIRCLE_PERCENT}%`} vectorEffect="non-scaling-stroke" />

                {LINES.map(({HALF_WIDTH_PERCENT, Y_PERCENT}, index) => (
                    <line
                        key={index}
                        x1={`-${HALF_WIDTH_PERCENT}%`}
                        x2={`${HALF_WIDTH_PERCENT}%`}
                        y1={`${Y_PERCENT}%`}
                        y2={`${Y_PERCENT}%`}
                        vectorEffect="non-scaling-stroke"
                    />
                ))}
            </g>
        </svg>
    );
};

Shape.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};

export default Shape;
