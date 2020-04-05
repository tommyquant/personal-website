import React from 'react';
import styled from 'styled-components';
import {boolean} from '@storybook/addon-knobs';

import Card from '.';

const StyledCard = styled(Card)`
    align-items: center;
    display: flex;
    justify-content: center;
    max-width: 768px;
    padding: 2em;
    width: 100%;
`;

export default {
    title: 'Components'
};

export const card = () => (
    <StyledCard shadow={boolean('Has shadow?', true)}>
        I am a styled card
    </StyledCard>
);

