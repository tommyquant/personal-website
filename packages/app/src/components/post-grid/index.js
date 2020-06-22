import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import transition from 'yorha/src/common/style/transition';

const Container = styled.div`
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 2rem 1rem;
    width: 100%;

    @media only screen and (min-width: 25rem) {
        grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    }
`;

const ChildWrapper = styled.div`
    opacity: 0;
    transition: ${transition('opacity')};

    ${({$visible}) => $visible && css`
        opacity: 1;
    `}
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

const PostGrid = ({
    children,
    className,
    ...htmlAttributes
}) => {
    const [visibilityFlags, setVisibilityFlags] = useState([]);
    const [isComplete, setIsComplete] = useState(false);

    useInterval(() => {
        if (visibilityFlags.length === React.Children.count(children)) {
            setIsComplete(true);
            return;
        }

        setVisibilityFlags((prev) => [...prev, true]);
    }, isComplete ? null : 50);

    return (
        <Container className={className} {...htmlAttributes}>
            {React.Children.map(children, (child, index) => (
                <ChildWrapper $visible={visibilityFlags[index]}>
                    {child}
                </ChildWrapper>
            ))}
        </Container>
    );
};

PostGrid.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default PostGrid;
