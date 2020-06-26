import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {fontFamily} from '../../common/style/font';
import {athsSpecial, fuscousGray, softAmber, taupeGray} from '../../common/style/palette';
import transition from '../../common/style/transition';

const activeStyles = css`
    color: ${softAmber};

    &::before {
        background-color: ${fuscousGray};
        transform: scaleX(1);
    }

    &:focus,
    &:hover {
        color: ${fuscousGray};

        &::before {
            background-color: ${athsSpecial};
        }

        &::after {
            border-color: ${athsSpecial};
        }
    }
`;

const nonInteractiveStyles = css`
    appearance: none;
    background-color: ${taupeGray};
    border: 0;
    box-sizing: border-box;
    color: ${fuscousGray};
    display: flex;
    font-family: ${fontFamily};
    font-size: 1.5rem;
    letter-spacing: 0.05em;
    outline: none;
    padding: 0.2em 0.3em;
    position: relative;
    text-align: left;

    ${({$center}) => $center && css`
        justify-content: center;
    `}

    ${({$fluid}) => $fluid ? css`
        width: 100%;
    ` : css`
        min-width: 8em;
    `}
`;

const interactiveStyles = css`
    transition: ${transition('color')};

    /* Background */
    &::before {
        background-color: ${fuscousGray};
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transform: scaleX(0);
        transform-origin: 0;
        transition: ${transition('transform')};
        width: 100%;
    }

    /* Bars */
    &::after {
        border: 2px solid ${fuscousGray};
        border-left: none;
        border-right: none;
        box-sizing: border-box;
        content: '';
        height: 125%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: -12.5%;
        transform: scaleY(0.8);
        transition: ${transition('opacity', 'transform')};
        width: 100%;
    }

    &:focus,
    &:hover {
        &::before {
            transform: scaleX(1);
        }

        &::after {
            opacity: 1;
            transform: scaleY(1);
        }
    }

    &:active {
        ${activeStyles}
    }

    ${({$active}) => $active ? css`
        ${activeStyles}
    ` : css`
        &:not(:active):focus,
        &:not(:active):hover {
            color: ${softAmber};
        }
    `}
`;

const StyledButton = styled.button`
    ${nonInteractiveStyles}
    ${interactiveStyles}
`;

const DisabledElement = styled.div`
    ${nonInteractiveStyles};
    cursor: not-allowed;
    opacity: 0.5;
`;

const Content = styled.span`
    z-index: 1;
`;

// eslint-disable-next-line react/display-name
const Button = React.forwardRef(({
    children,
    className,
    disabled,
    onClick,

    active,
    center,
    fluid,
    ...htmlAttributes
}, ref) => {
    const StyledElement = disabled ? DisabledElement : StyledButton;

    return (
        <StyledElement
            className={className}
            ref={ref}
            onClick={!disabled && onClick}
            $active={active}
            $center={center}
            $fluid={fluid}
            {...htmlAttributes}
        >
            <Content>
                {children}
            </Content>
        </StyledElement>
    );
});

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    
    active: PropTypes.bool,
    center: PropTypes.bool,
    fluid: PropTypes.bool
};

Button.displayName = 'Button';

export default Button;
