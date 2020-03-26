import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {rgba} from 'polished';

import {tana, fuscousGray} from '../../common/style/palette';

const Wrapper = styled.div`
    background-color: ${tana};

    ${({hasShadow}) => hasShadow && css`
        box-shadow: 3px 3px 0 0 ${rgba(fuscousGray, 0.5)};
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
