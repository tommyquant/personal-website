import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {fuscousGray} from '../../common/palette';
import {
    PAGE_HORIZONTAL_EDGE_SPACING,
    PAGE_VERTICAL_EDGE_SPACING
} from '../../common/style-constants';
import DoubleBarLine from '../../components/graphics/double-bar-line';
import NavButton from '../../components/nav-button';

const NavTop = styled.div`
    border-bottom: 2px solid ${fuscousGray};
`;

const NavButtons = styled.div`
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 2em;
    padding: ${PAGE_VERTICAL_EDGE_SPACING} ${PAGE_HORIZONTAL_EDGE_SPACING} 1.2em;
`;

const Content = styled.section`
    padding: 0 ${PAGE_HORIZONTAL_EDGE_SPACING} 2em;
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
