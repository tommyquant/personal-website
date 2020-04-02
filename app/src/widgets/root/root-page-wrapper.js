import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {softAmber} from 'yorha/src/common/style/palette';
import Background from 'yorha/src/components/graphics/background';
import Button from 'yorha/src/components/button';
import DoubleBarLine from 'yorha/src/components/graphics/double-bar-line';
import Overlay from 'yorha/src/components/graphics/overlay';
import PageDivider from 'yorha/src/components/graphics/page-divider';

import {
    PAGE_HORIZONTAL_EDGE_SPACING,
    PAGE_VERTICAL_EDGE_SPACING
} from '../../common/style/constants';

const StyledMain = styled.main`
    display: grid;
    grid-template-areas:
        'header'
        'content'
        'footer';
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
`;

const FixedWrapper = styled.div`
    height: 100%;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 100%;
`;

const StyledHeader = styled.header`
    grid-area: header;
`;

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

const Content = styled.section`
    box-sizing: border-box;
    display: flex;
    grid-area: content;
    padding: 2rem ${PAGE_HORIZONTAL_EDGE_SPACING};
    width: 100%;
`;

const StyledFooter = styled.footer`
    background-color: ${softAmber};
    grid-area: footer;
    padding-bottom: 1.5rem;
`;

const RootPageWrapper = ({element}) => (
    <StyledMain>
        <FixedWrapper style={{zIndex: -1}}>
            <Background />
        </FixedWrapper>
        <FixedWrapper style={{zIndex: 100}}>
            <Overlay />
        </FixedWrapper>

        <StyledHeader>
            <Navigation>
                <DoubleBarLine />
                <StyledButton isActive={true}>Home</StyledButton>
                <StyledButton>About</StyledButton>
                <StyledButton>Settings</StyledButton>
            </Navigation>
            <StyledPageDivider />
        </StyledHeader>

        <Content>
            {element}
        </Content>
        
        <StyledFooter>
            <StyledPageDivider />
        </StyledFooter>
    </StyledMain>
);

RootPageWrapper.propTypes = {
    element: PropTypes.node
};

export default RootPageWrapper;
