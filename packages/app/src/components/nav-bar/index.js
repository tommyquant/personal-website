import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'yorha/src/components/button';

import LeftDoubleBarLine from '../../components/left-double-bar-line';
import PageDivider from '../../components/page-divider';

const Navigation = styled.nav`
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 1rem;
    padding: var(--page-vertical-margin) var(--page-horizontal-margin) 1.2rem;

    @media only screen and (min-width: 30rem) {
        grid-auto-columns: max-content;
        grid-auto-flow: column;
        grid-gap: 2rem;
    }
`;

const StyledButton = styled(Button)`
    text-transform: uppercase;
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
            <PageDivider />
        </header>
    );
};

NavBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

NavBar.Button = StyledButton;

export default NavBar;
