import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {softAmber, taupeGray} from 'yorha/src/common/style/palette';
import DoubleBarLine from 'yorha/src/components/graphics/double-bar-line';
import Button from 'yorha/src/components/button';
import PageDivider from 'yorha/src/components/graphics/page-divider';

import {
    PAGE_HORIZONTAL_EDGE_SPACING,
    PAGE_VERTICAL_EDGE_SPACING
} from '../../common/style/constants';

const Navigation = styled.nav`
    position: sticky;
    top: 0;
    z-index: 1;
`;

const NavButtons = styled.div`
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
    box-sizing: border-box;
    margin-bottom: 1.5rem;
    padding: 0 ${PAGE_HORIZONTAL_EDGE_SPACING};
`;

const Content = styled.section`
    padding: 0 ${PAGE_HORIZONTAL_EDGE_SPACING} 2rem;
`;

const RootPageWrapper = ({element}) => (
    <main>
        <Navigation>
            <NavButtons>
                <DoubleBarLine color={taupeGray} />
                <StyledButton isActive={true}>Home</StyledButton>
                <StyledButton>Projects</StyledButton>
                <StyledButton>About</StyledButton>
            </NavButtons>
            <StyledPageDivider />
        </Navigation>
        <Content>
            {element}
        </Content>
        <StyledPageDivider />
    </main>
);

RootPageWrapper.propTypes = {
    element: PropTypes.node
};

export default RootPageWrapper;
