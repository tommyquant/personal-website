import React from 'react';
import styled from 'styled-components';
import {readableColor} from 'polished';

import {FONT_FAMILY} from './font';

import * as colors from './palette';

const Wrapper = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-auto-rows: 9em;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 9em);
    justify-content: center;
    max-width: 700px;
    width: 100%;
`;

const Color = styled.div`
    align-items: center;
    background-color: ${({color}) => color};
    border: 2px solid ${({color}) => readableColor(color)};
    color: ${({color}) => readableColor(color)};
    display: flex;
    font-family: ${FONT_FAMILY};
    justify-content: center;
    text-align: center;
`;

const Palette = () => {
    return (
        <Wrapper>
            {Object.entries(colors).map(([key, value]) => (
                <Color key={key} color={value}>
                    {key}
                    <br/>
                    {value}
                </Color>
            ))}
        </Wrapper>
    );
};

export default {
    component: Palette,
    title: 'Other'
};

export const palette = () => <Palette />;
