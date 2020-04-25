import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {taupeGray} from 'yorha/src/common/style/palette';
import DoubleBarLine from 'yorha/src/components/graphics/double-bar-line';

const StyledBlockquote = styled.blockquote`
    display: grid;
    grid-gap: 1.5em;
    grid-template-columns: min-content 1fr;
    margin: 0;
`;

const Blockquote = ({
    children,
    className,
    ...htmlAttributes
}) => {
    return (
        <StyledBlockquote className={className} {...htmlAttributes}>
            <DoubleBarLine color={taupeGray} aria-hidden="true" />
            <div>
                {children}
            </div>
        </StyledBlockquote>
    );
};

Blockquote.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Blockquote;
