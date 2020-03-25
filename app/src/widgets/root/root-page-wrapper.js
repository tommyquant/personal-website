import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {fuscousGray} from '../../common/palette';
import DoubleBarLine from '../../components/graphics/double-bar-line';
import NavButton from '../../components/nav-button';

const NavTop = styled.div`
    border-bottom: 2px solid ${fuscousGray};
`;

const NavButtons = styled.div`
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 3em;
    padding: 2em 2em 0;
`;

const Content = styled.section`
    padding: 0 2em 2em;
`;

const RootPageWrapper = ({element}) => (
    <main>
        <nav>
            <NavTop>
                <NavButtons>
                    <DoubleBarLine />
                    <NavButton isActive={true}>Home</NavButton>
                    <NavButton>Projects</NavButton>
                    <NavButton>About</NavButton>
                </NavButtons>
            </NavTop>
        </nav>
        <Content>
            {element}
        </Content>
    </main>
);

RootPageWrapper.propTypes = {
    element: PropTypes.node
};

export default RootPageWrapper;
