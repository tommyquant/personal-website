import React from 'react';
import styled from 'styled-components';
import {color} from '@storybook/addon-knobs';

import {fuscousGray} from '../../../common/style/palette';
import Indicator from '.';

const Wrapper = styled.div`
    height: 5em;
`;

export default {
    title: 'Components/Graphics'
};

export const indicator = () => (
    <Wrapper>
        <Indicator color={color('Color', fuscousGray)} />
    </Wrapper>
);
