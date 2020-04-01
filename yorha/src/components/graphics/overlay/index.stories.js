import React from 'react';
import styled from 'styled-components';
import {color} from '@storybook/addon-knobs';

import {taupeGray} from '../../../common/style/palette';
import Overlay from '.';

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`;

export default {
    title: 'Components/Graphics'
};

export const overlay = () => (
    <Wrapper>
        <Overlay color={color('Color', taupeGray)} />
    </Wrapper>
);
