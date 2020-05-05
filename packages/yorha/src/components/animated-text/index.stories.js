import React from 'react';
import {boolean, number, text} from '@storybook/addon-knobs';

import {fontFamily, lineHeight} from '../../common/style/font';

import AnimatedText from '.';

export default {
    title: 'Components'
};

export const animatedText = () => (
    <p style={{fontFamily: fontFamily, lineHeight: lineHeight}}>
        <b>I am not animated. </b>

        <AnimatedText
            charactersPerSecond={number('Characters per second', 60)}
            textCursor={text('Text cursor', '|')}
            useRandomCharacterAsCursor={boolean('Use random character as text cursor', true)}
        >
            {text('Text', 'I am animated. ')}
        </AnimatedText>

        <b>I am not animated.</b>
    </p>
);
