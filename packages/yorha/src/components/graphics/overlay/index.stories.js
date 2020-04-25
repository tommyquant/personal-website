import React from 'react';
import styled from 'styled-components';
import {color, number} from '@storybook/addon-knobs';

import {fuscousGray} from '../../../common/style/palette';
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
        <Overlay
            color={color('Color', fuscousGray)}
            gridOpacity={number('Grid opacity (0-1)', 0.05, {step: 0.01})}
            vignetteOpacity={number('Vignette opacity (0-1)', 0.35, {step: 0.01})}
        />
    </Wrapper>
);
