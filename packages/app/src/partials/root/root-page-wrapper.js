import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Match} from '@reach/router';
import {Link} from 'gatsby';

import {fuscousGray, taupeGray, softAmber} from 'yorha/src/common/style/palette';
import Background from 'yorha/src/components/graphics/background';
import Overlay from 'yorha/src/components/graphics/overlay';

import {PAGE_HORIZONTAL_EDGE_SPACING} from '../../common/style/constants';
import NavBar from '../../components/nav-bar';
import PageDivider from '../../components/page-divider';

import GlobalStyle from './global-styles';

const ROUTES = [
    {label: 'Home', to: '/'},
    {label: 'About', to: '/about'}
];

const StyledMain = styled.main`
    display: grid;
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

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const Content = styled.section`
    box-sizing: border-box;
    padding: 1.5rem ${PAGE_HORIZONTAL_EDGE_SPACING} 2rem;
    width: 100%;
`;

const StyledFooter = styled.footer`
    background-color: ${softAmber};
    padding-bottom: 1.5rem;
`;

const RootPageWrapper = ({element}) => (
    <React.Fragment>
        <GlobalStyle />

        <StyledMain>
            <FixedWrapper style={{zIndex: -1}}>
                <Background color={taupeGray} />
            </FixedWrapper>
            <FixedWrapper style={{zIndex: 100}}>
                <Overlay color={fuscousGray} />
            </FixedWrapper>

            <NavBar>
                {ROUTES.map(({label, to}) => (
                    <Match key={to} path={to}>
                        {({match}) => (
                            <NavBar.Button
                                forwardedAs={StyledLink}
                                to={to}
                                active={!!match}
                            >
                                {label}
                            </NavBar.Button>
                        )}
                    </Match>
                ))}
            </NavBar>

            <Content>
                {element}
            </Content>

            <StyledFooter>
                <PageDivider />
            </StyledFooter>
        </StyledMain>
    </React.Fragment>
);

RootPageWrapper.propTypes = {
    element: PropTypes.node
};

export default RootPageWrapper;