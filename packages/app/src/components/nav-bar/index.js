import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {softAmber} from 'yorha/src/common/style/palette';
import Button from 'yorha/src/components/button';
import PageDivider from 'yorha/src/components/graphics/page-divider';

import {
    PAGE_HORIZONTAL_EDGE_SPACING,
    PAGE_VERTICAL_EDGE_SPACING
} from '../../common/style/constants';
import LeftDoubleBarLine from '../../components/left-double-bar-line';

const Navigation = styled.nav`
    background-color: ${softAmber};
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 2rem;
    padding: ${PAGE_VERTICAL_EDGE_SPACING} ${PAGE_HORIZONTAL_EDGE_SPACING} 1.2rem;
`;

const StyledButton = styled(Button)`
    text-transform: uppercase;
`;

const StyledPageDivider = styled(PageDivider)`
    padding: 0 ${PAGE_HORIZONTAL_EDGE_SPACING};
`;

const NavBar = ({
    children,
    className,
    ...htmlAttributes
}) => {
    return (
        <header className={className} {...htmlAttributes}>
            <Navigation>
                <LeftDoubleBarLine />
                {children}
            </Navigation>
            <StyledPageDivider />
        </header>
    );
};

NavBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

NavBar.Button = StyledButton;

export default NavBar;
