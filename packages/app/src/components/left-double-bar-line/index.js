import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';

import {taupeGray} from 'yorha/src/common/style/palette';
import {TRANSITION_SECONDS_SHORT, TRANSITION_TIMING_FUNCTION} from 'yorha/src/common/style/transition';
import DoubleBarLine from 'yorha/src/components/graphics/double-bar-line';

const scaleAnimation = keyframes`
    0% {
        transform: scaleY(0%);
    }
    100% {
        transform: scaleY(100%);
    }
`;

const Wrapper = styled.div`
    display: none;

    @media only screen and (min-width: 60rem) {
        animation: ${TRANSITION_SECONDS_SHORT}s ${scaleAnimation} ${TRANSITION_TIMING_FUNCTION};
        display: initial;
    }
`;

const LeftDoubleBarLine = ({
    className,
    ...htmlAttributes
}) => (
    <Wrapper>
        <DoubleBarLine
            className={className}
            color={taupeGray}
            {...htmlAttributes}
        />
    </Wrapper>
);

LeftDoubleBarLine.propTypes = {
    className: PropTypes.string
};

export default LeftDoubleBarLine;
