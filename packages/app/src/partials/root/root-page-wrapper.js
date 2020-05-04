import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Match} from '@reach/router';
import {Link} from 'gatsby';

import {fuscousGray, taupeGray, softAmber} from 'yorha/src/common/style/palette';
import Background from 'yorha/src/components/graphics/background';
import Overlay from 'yorha/src/components/graphics/overlay';

import NavBar from '../../components/nav-bar';
import PageDivider from '../../components/page-divider';

import GlobalStyle from './global-styles';
import SEO from '../seo';

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
    padding: 0.75rem var(--page-horizontal-margin) 2rem;
    width: 100%;
`;

const StyledFooter = styled.footer`
    background-color: ${softAmber};
    padding-bottom: var(--page-vertical-margin);
`;

const RootPageWrapper = ({element}) => (
    <React.Fragment>
        <GlobalStyle />

        <SEO />

        <FixedWrapper style={{zIndex: -1}}>
            <Background color={taupeGray} />
        </FixedWrapper>
        <FixedWrapper style={{zIndex: 100}}>
            <Overlay color={fuscousGray} />
        </FixedWrapper>

        <StyledMain>
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
