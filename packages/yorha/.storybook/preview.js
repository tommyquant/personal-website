import React from 'react';
import {addParameters, addDecorator} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import {softAmber} from '../src/common/style/palette';

addParameters({
    backgrounds: [
        {name: 'Default', value: softAmber, default: true}
    ],
});

addDecorator(withKnobs);

addDecorator((storyFn) => {
    const globalGroupId = 'Global';

    return (
        <div style={{
            alignItems: boolean('Center vertically', true, globalGroupId) && 'center',
            boxSizing: 'border-box',
            display: 'flex',
            height: '100%',
            justifyContent: boolean('Center horizontally', true, globalGroupId) && 'center',
            padding: boolean('Padding', true, globalGroupId) && '2rem',
            width: '100%'
        }}>
            {storyFn()}
        </div>
    );
});
