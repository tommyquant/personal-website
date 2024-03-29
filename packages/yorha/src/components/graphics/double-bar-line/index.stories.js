import React from 'react';
import styled from 'styled-components';
import {color} from '@storybook/addon-knobs';

import {taupeGray} from '../../../common/style/palette';
import DoubleBarLine from '.';

const Wrapper = styled.div`
    height: 5em;
`;

export default {
    title: 'Components/Graphics'
};

export const doubleBarLine = () => (
    <Wrapper>
        <DoubleBarLine color={color('Color', taupeGray)} />
    </Wrapper>
);
