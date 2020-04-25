import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {chestnutRose} from 'yorha/src/common/style/palette';

const StyledLink = styled.a`
    color: ${chestnutRose};
`;

const Link = ({
    children,
    className,
    ...htmlAttributes
}) => {
    return (
        <StyledLink
            className={className}
            rel="noopener noreferrer"
            target="_blank"
            {...htmlAttributes}
        >
            {children}
        </StyledLink>
    );
};

Link.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Link;