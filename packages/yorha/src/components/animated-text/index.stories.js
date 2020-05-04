import React from 'react';
import {number, text} from '@storybook/addon-knobs';

import {fontFamily, lineHeight} from '../../common/style/font';

import AnimatedText from '.';

export default {
    title: 'Components'
};

export const animatedText = () => (
    <p style={{fontFamily: fontFamily, lineHeight: lineHeight}}>
        <span>I am not animated. </span>

        <AnimatedText interval={number('Duration (ms)', 16)}>
            {text('Text', 'I am animated.')}
        </AnimatedText>
    </p>
);

