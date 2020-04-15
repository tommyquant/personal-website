import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {baseStyles as doubleBarLineBaseStyles} from 'yorha/src/components/graphics/double-bar-line';

const StyledBlockquote = styled.blockquote`
    margin: 0;
    padding: 0 2.5em;
    position: relative;

    &::before {
        ${doubleBarLineBaseStyles}

        content: '';
        left: 0;
        position: absolute;
        top: 0;
    }
`;

const Blockquote = ({
    children,
    className,
    ...htmlAttributes
}) => {
    return (
        <StyledBlockquote className={className} {...htmlAttributes}>
            {children}
        </StyledBlockquote>
    );
};

Blockquote.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Blockquote;
