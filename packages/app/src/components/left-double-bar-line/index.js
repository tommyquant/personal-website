import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {taupeGray} from 'yorha/src/common/style/palette';
import DoubleBarLine from 'yorha/src/components/graphics/double-bar-line';

const Wrapper = styled.div`
    display: none;

    @media only screen and (min-width: 60rem) {
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
