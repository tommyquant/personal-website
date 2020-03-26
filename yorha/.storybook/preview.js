import React from 'react';
import {addParameters, addDecorator} from '@storybook/react';
import styled from 'styled-components';
import {softAmber} from '../src/common/style/palette';

addParameters({
    backgrounds: [
        {name: 'Default', value: softAmber, default: true}
    ],
});

const Wrapper = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 2em;
    width: 100%;
`;

addDecorator((storyFn) => (
    <Wrapper>
        {storyFn()}
    </Wrapper>
));
