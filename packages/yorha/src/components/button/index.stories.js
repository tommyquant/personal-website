import React from 'react';
import {action} from '@storybook/addon-actions';
import {boolean, text} from '@storybook/addon-knobs';

import Button from '.';

export default {
    title: 'Components'
};

export const button = () => (
    <Button
        disabled={boolean('Is disabled?', false)}
        href={text('Link to')}
        onClick={action('Button clicked')}
        active={boolean('Is active?', false)}
        center={boolean('Is content centered?', false)}
        fluid={boolean('Is full width?', false)}
    >
        {text('Text', 'Button')}
    </Button>
);
