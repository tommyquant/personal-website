import React from 'react';
import {withKnobs, boolean, text} from '@storybook/addon-knobs';

import Button from '.';

export default {
    title: 'Components',
    decorators: [withKnobs]
};

export const button = () => (
    <Button isActive={boolean('Is active?', false)}>
        {text('Text', 'Button')}
    </Button>
);

