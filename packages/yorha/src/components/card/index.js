import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {rgba} from 'polished';

import {tana, fuscousGray} from '../../common/style/palette';
import transition from '../../common/style/transition';

const shadowStyles = css`
    box-shadow: 3px 3px 0 0 ${rgba(fuscousGray, 0.5)};
`;

const Wrapper = styled.div`
    background-color: ${tana};
    transition: ${transition('box-shadow')};

    ${({$shadow}) => $shadow ? css`
        ${shadowStyles}
    ` : css`
        ${({$shadowWhenFocusHover}) => $shadowWhenFocusHover && css`
            &:focus,
            &:hover {
                ${shadowStyles}
            }
        `}
    `}
`;

const Card = ({
    children,
    className,
    shadow,
    shadowWhenFocusHover,
    ...htmlAttributes
}) => (
    <Wrapper
        className={className}
        $shadow={shadow}
        $shadowWhenFocusHover={shadowWhenFocusHover}
        {...htmlAttributes}
    >
        {children}
    </Wrapper>
);

Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    shadow: PropTypes.bool,
    shadowWhenFocusHover: PropTypes.bool
};

export default Card;
