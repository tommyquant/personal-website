import React from 'react';
import {color} from '@storybook/addon-knobs';

import {fuscousGray} from '../../../common/style/palette';
import PageDivider from '.';

export default {
    title: 'Components/Graphics'
};

export const pageDivider = () => (
    <PageDivider color={color('Color', fuscousGray)} />
);
