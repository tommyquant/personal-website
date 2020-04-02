import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ResizeObserver from 'resize-observer-polyfill';
import throttle from 'lodash/throttle';
import times from 'lodash/times';

import {fuscousGray} from '../../../common/style/palette';

import createCanvasGroup from './canvas-group';

const PATTERN_MIN_SIZE_REM = 2.7;
const PATTERN_RECT_WIDTH_REM = 0.2;
const PATTERN_RECT_HEIGHT_REM = 0.15;
const PATTERN_CIRCLE_RADIUS_REM = 0.11;

const Container = styled.div`
    border-top: 2px solid ${fuscousGray};
    box-sizing: border-box;
    height: 1.6rem;
    width: 100%;
`;

const PageDivider = ({
    className,
    color = fuscousGray,
    ...htmlAttributes
}) => {
    const containerRef = useRef();
    const canvasRef = useRef();
    const [canvasSize, setCanvasSize] = useState({width: 1, height: 1});

    const throttledOnResize = throttle((entries) => {
        entries.forEach((entry) => {
            const {width, height} = entry.contentRect;
            setCanvasSize({width, height});

            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            const remUnit = height;
            const patternWidthPx = remUnit * PATTERN_MIN_SIZE_REM;
            const innerWidth = width - ((remUnit * PATTERN_RECT_WIDTH_REM) * 2);
            const repititions = Math.floor(innerWidth / patternWidthPx);
            
            context.fillStyle = color;
            if (repititions > 0) {
                context.rect(0, 0, remUnit * PATTERN_RECT_WIDTH_REM, remUnit * PATTERN_RECT_HEIGHT_REM);
                context.rect(width, 0, remUnit * -PATTERN_RECT_WIDTH_REM, remUnit * PATTERN_RECT_HEIGHT_REM);
            }

            times(repititions, (index) => {
                const scaledPatternWidth = patternWidthPx * (innerWidth / (repititions * patternWidthPx));

                const canvasGroup = createCanvasGroup(context, {
                    x: (index * scaledPatternWidth) + (remUnit * PATTERN_RECT_WIDTH_REM),
                    y: 0,
                    width: scaledPatternWidth,
                    height: remUnit
                });

                canvasGroup.rect(0, 0, remUnit * PATTERN_RECT_WIDTH_REM, remUnit * PATTERN_RECT_HEIGHT_REM);
                canvasGroup.circle(0.4, 0.3, remUnit * PATTERN_CIRCLE_RADIUS_REM);
                canvasGroup.circle(0.5, 0.7, remUnit * PATTERN_CIRCLE_RADIUS_REM);
                canvasGroup.circle(0.6, 0.3, remUnit * PATTERN_CIRCLE_RADIUS_REM);
                canvasGroup.rect(1, 0, remUnit * -PATTERN_RECT_WIDTH_REM, remUnit * PATTERN_RECT_HEIGHT_REM);
            });
            
            context.fill();
        });
    }, 100);

    // Observe the container width so we can recalculate how much the pattern should repeat
    useEffect(() => {
        const ro = new ResizeObserver(throttledOnResize);
        ro.observe(containerRef.current);

        return () =>{
            ro.disconnect();
            throttledOnResize.cancel();
        };
    }, []);

    return (
        <Container
            className={className}
            ref={containerRef}
            {...htmlAttributes}
        >
            <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height} />
        </Container>
    );
};

PageDivider.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};

export default PageDivider;
