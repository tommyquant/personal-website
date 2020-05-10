import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import clamp from 'lodash/clamp';

const TextWrapper = styled.span`
    display: inline-block;
    position: relative;
    white-space: pre-wrap;
`;

const AccessibleText = styled.span`
    ${({$visible}) => !$visible && css`
        opacity: 0;
    `}
`;

const VisibleText = styled.span`
    display: ${({$visible}) => $visible ? 'inline-block' : 'none'};
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    user-select: none;
    width: 100%;
`;

const Cursor = styled.span`
    display: inline-block;
    position: relative;
    width: 0;
`;

function getRandomCharacterInString(input) {
    const cleanedInput = input.replace(/ /g, '');
    return cleanedInput.charAt(Math.round(Math.random() * (cleanedInput.length - 1)));
}

const AnimatedText = ({
    children,
    className,
    charactersPerSecond = 60,
    textCursor = '|',
    useRandomCharacterAsCursor = true,
    ...htmlAttributes
}) => {
    if (typeof children !== 'string') {
        return children;
    }

    const [visibleText, setVisibleText] = useState();

    // Using refs because setState is not guaranteed to update state before the next animation frame.
    const isAnimating = useRef();
    const position = useRef();
    const prevTimestamp = useRef();
    const textBuffer = useRef();
    const callback = useRef();
    const requestId = useRef();

    const animate = (timestamp) => {
        if (!isAnimating.current) return;

        // Frame rate independence calculations
        const deltaSeconds = (timestamp - prevTimestamp.current) / 1000; // How many seconds have passed since the last frame.
        prevTimestamp.current = timestamp;
        position.current += charactersPerSecond * deltaSeconds;

        if (position.current < children.length) {
            const endIndex = clamp(position.current, 0, children.length);
            textBuffer.current = children.slice(0, endIndex);
            setVisibleText(textBuffer.current);

            requestId.current = requestAnimationFrame(callback.current);
        } else {
            isAnimating.current = false;
            textBuffer.current = children;
            setVisibleText(textBuffer.current);
        }
    };

    // Save the latest callback
    useEffect(() => {
        callback.current = animate;
    }, [animate]);

    // If any input changes, reset the animation.
    useEffect(() => {
        isAnimating.current = true;
        position.current = 0;
        prevTimestamp.current = performance.now();
        textBuffer.current = '';
        setVisibleText(textBuffer.current);
        
        cancelAnimationFrame(requestId.current);
        requestId.current = requestAnimationFrame(callback.current);
    }, [children, charactersPerSecond, textCursor, useRandomCharacterAsCursor]);

    useEffect(() => {
        return () => void cancelAnimationFrame(requestId.current);
    }, []);

    return (
        <TextWrapper className={className} {...htmlAttributes}>
            <AccessibleText $visible={!isAnimating.current}>{children}</AccessibleText>

            <VisibleText aria-hidden="true" $visible={isAnimating.current}>
                {visibleText}
                <Cursor>
                    {useRandomCharacterAsCursor ? getRandomCharacterInString(children) : textCursor}
                </Cursor>
            </VisibleText>
        </TextWrapper>
    );
};

AnimatedText.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    charactersPerSecond: PropTypes.number,
    textCursor: PropTypes.node,
    useRandomCharacterAsCursor: PropTypes.bool
};

export default AnimatedText;
