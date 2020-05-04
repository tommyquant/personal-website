import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const TextWrapper = styled.span`
    display: inline-block;
    position: relative;
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
    width: calc(100%);
`;

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const AnimatedText = ({
    children = '',
    className,
    interval = 16, // In milliseconds
    ...htmlAttributes
}) => {
    const [isAnimating, setIsAnimating] = useState(true);
    const [visibleText, setVisibileText] = useState('');

    // If the text or interval changes, reset the animation.
    useEffect(() => {
        setIsAnimating(true);
        setVisibileText('');
    }, [children, interval]);

    useInterval(() => {
        const trimmedText = children.trim();
        if (visibleText.length < trimmedText.length) {
            setVisibileText(trimmedText.slice(0, visibleText.length) + '|');
        } else {
            setIsAnimating(false);
            setVisibileText(children);
        }
    }, isAnimating ? interval : null);

    return (
        <TextWrapper className={className} {...htmlAttributes}>
            <AccessibleText $visible={!isAnimating}>{children}</AccessibleText>
            <VisibleText aria-hidden="true" $visible={isAnimating}>
                {visibleText}
            </VisibleText>
        </TextWrapper>
    );
};

AnimatedText.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    interval: PropTypes.number
};

export default AnimatedText;
