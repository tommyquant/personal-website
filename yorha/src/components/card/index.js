import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {rgba} from 'polished';

import {fontFamily} from '../../common/style/font';
import {tana, fuscousGray} from '../../common/style/palette';

const Wrapper = styled.div`
    background-color: ${tana};
    font-family: ${fontFamily};

    ${({shadow}) => shadow && css`
        box-shadow: 3px 3px 0 0 ${rgba(fuscousGray, 0.5)};
    `}
`;

const Card = ({
    children,
    className,
    shadow,
}) => (
    <Wrapper className={className} shadow={!!shadow}>
        {children}
    </Wrapper>
);

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    shadow: PropTypes.bool
};

export default Card;
