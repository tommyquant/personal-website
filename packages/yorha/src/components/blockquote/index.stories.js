import React from 'react';
import styled from 'styled-components';
import {text} from '@storybook/addon-knobs';

import Blockquote from '.';

const Wrapper = styled.div`
    max-width: 30rem;
    width: 50%;
`;

export default {
    title: 'Components'
};

export const blockquote = () => (
    <Wrapper>
        <Blockquote>
            {text('Text', 'I am a very insightful quote')}
        </Blockquote>
    </Wrapper>
);
