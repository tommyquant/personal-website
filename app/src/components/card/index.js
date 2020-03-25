import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {rgba} from 'polished';

import {cardBg, shadow} from '../../common/palette';

const Wrapper = styled.div`
    background-color: ${cardBg};

    ${({hasShadow}) => hasShadow && css`
        box-shadow: 3px 3px 0 0 ${rgba(shadow, 0.5)};
    `}
`;

const Card = ({
    children,
    className,
    hasShadow,
}) => (
    <Wrapper className={className} hasShadow={!!hasShadow}>
        {children}
    </Wrapper>
);

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    hasShadow: PropTypes.bool
};

export default Card;
