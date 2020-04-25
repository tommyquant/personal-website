import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

export const baseStyles = css`
    border: solid ${({$color}) => $color};
    border-width: 0 0.15em 0 0.6em;
    box-sizing: border-box;
    font-size: 1.3em;
    height: 100%;
    width: 1em;
`;

const Graphic = styled.div`
    ${baseStyles}
`;

const DoubleBarLine = ({
    className,
    color,
    ...htmlAttributes
}) => (
    <Graphic className={className} $color={color} {...htmlAttributes} />
);

DoubleBarLine.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};

export default DoubleBarLine;
