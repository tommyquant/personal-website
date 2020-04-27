import React from 'react';
import styled from 'styled-components';
import {color} from '@storybook/addon-knobs';

import {tana} from '../../../common/style/palette';
import Loader from '.';

const Wrapper = styled.div`
    height: 5em;
`;

export default {
    title: 'Components/Graphics'
};

export const loader = () => (
    <Wrapper>
        <Loader color={color('Color', tana)} />
    </Wrapper>
);
