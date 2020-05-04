import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import throttle from 'lodash/throttle';
import times from 'lodash/times';

import resizeObserver from '../../../common/resize-observer';
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

const StyledCanvas = styled.canvas`
    height: 100%;
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

    const throttledOnResize = throttle((entry) => {
        const dpr = window.devicePixelRatio || 1;
        const {width, height} = entry.contentRect;
        
        // Scale up the canvas to support high DPI devices. We rely on height and width being at 100%
        // so that the canvas doesn't overflow the container.
        setCanvasSize({
            width: width * dpr,
            height: height * dpr
        });

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const remUnit = height;
        const patternWidthPx = remUnit * PATTERN_MIN_SIZE_REM;
        const innerWidth = width - (remUnit * PATTERN_RECT_WIDTH_REM * 2); // The total width minus the rectangles at the start and end
        const repititions = Math.floor(innerWidth / patternWidthPx);
        
        if (repititions > 0) {
            context.scale(dpr, dpr);

            // Draw a rectangle at the start and end
            context.rect(0, 0, remUnit * PATTERN_RECT_WIDTH_REM, remUnit * PATTERN_RECT_HEIGHT_REM);
            context.rect(width, 0, remUnit * -PATTERN_RECT_WIDTH_REM, remUnit * PATTERN_RECT_HEIGHT_REM);

            times(repititions, (index) => {
                // When the width is too small to display another rep of the pattern, we're left with empty space at the end.
                // We divide this space amongst the existing patterns to fill the remaining space.
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

            context.fillStyle = color;
            context.fill();
        }
    }, 250);

    // Observe the container width so we can recalculate how much the pattern should repeat
    useEffect(() => {
        resizeObserver.observe(throttledOnResize, containerRef.current);

        return () => {
            resizeObserver.unobserve(containerRef.current);
            throttledOnResize.cancel();
        };
    }, []);

    return (
        <Container
            className={className}
            ref={containerRef}
            {...htmlAttributes}
        >
            <StyledCanvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height} />
        </Container>
    );
};

PageDivider.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};

export default PageDivider;
