import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {athsSpecial, fuscousGray, softAmber, taupeGray} from '../../common/style/palette';
import transition from '../../common/style/transition';

const BAR_OFFSET_EM = '0.22';

const Overlay = styled.div`
    background-color: ${fuscousGray};
    bottom: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: ${transition('background-color', 'bottom', 'opacity', 'top', 'width')};
    width: 0;
`;

const hoverStyles = css`
    color: ${softAmber};

    ${Overlay} {
        opacity: 1;
        width: 100%;
    }

    &::before,
    &::after {
        opacity: 1;
    }

    &::before {
        top: -${BAR_OFFSET_EM}em;
    }

    &::after {
        bottom: -${BAR_OFFSET_EM}em;
    }
`;

const activeStyles = css`
    ${hoverStyles}

    ${Overlay} {
        bottom: -${BAR_OFFSET_EM}em;
        top: -${BAR_OFFSET_EM}em;
    }

    &::before,
    &::after {
        opacity: 0;
    }

    &:focus,
    &:hover {
        color: ${fuscousGray};

        ${Overlay} {
            background-color: ${athsSpecial};
        }
    }
`;

const hoverBarBaseStyles = css`
    background-color: ${fuscousGray};
    content: '';
    height: 2px;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transition: ${transition('bottom', 'opacity', 'top')};
    width: 100%;
`;

const StyledButton = styled.button`
    align-items: center;
    background-color: ${taupeGray};
    border: 0;
    box-sizing: border-box;
    display: flex;
    font-size: 1.5rem;
    letter-spacing: 0.05em;
    min-width: 8em;
    padding: 0.2em 0.3em;
    position: relative;
    text-transform: uppercase;

    &:active {
        ${activeStyles}
    }

    ${({active}) => active ? css`
        ${activeStyles}
    ` : css`
        &:not(:active) {
            &::before {
                ${hoverBarBaseStyles}
                top: 0;
            }

            &::after {
                ${hoverBarBaseStyles}
                bottom: 0;
            }

            &:focus,
            &:hover {
                ${hoverStyles}
            }
        }
    `}
`;

const Content = styled.div`
    z-index: 1;
`;

// eslint-disable-next-line react/display-name
const Button = React.forwardRef(({
    children,
    active,
    ...htmlAttributes
}, ref) => {
    return (
        <StyledButton
            ref={ref}
            active={active}
            type="button"
            {...htmlAttributes}
        >
            <Overlay />
            <Content>
                {children}
            </Content>
        </StyledButton>
    );
});

Button.propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool
};

Button.displayName = 'Button';

export default Button;
