import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const Wrapper = styled.div`
    background-color: #dcd8c0;

    ${({hasShadow}) => hasShadow && css`
        box-shadow: 2px 2px 0 0 #4e4b42;
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
