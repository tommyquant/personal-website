import React from 'react';
import styled from 'styled-components';
import {withKnobs, color} from '@storybook/addon-knobs';

import {fuscousGray} from '../../../common/style/palette';
import PageDivider from '.';

const Wrapper = styled.div`
    padding: 0 2rem;
    width: 100%;
`;

export default {
    title: 'Components/Graphics',
    decorators: [withKnobs]
};

export const pageDivider = () => (
    <Wrapper>
        <PageDivider color={color('Color', fuscousGray)} />
    </Wrapper>
);
