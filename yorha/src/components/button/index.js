import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {FONT_FAMILY} from '../../common/style/font';
import {athsSpecial, fuscousGray, softAmber, taupeGray} from '../../common/style/palette';
import transition from '../../common/style/transition';

const BAR_OFFSET_EM = '0.22';

const activeStyles = css`
    color: ${softAmber};

    &::before {
        background-color: ${fuscousGray};
        width: 100%;
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
    background-color: ${taupeGray};
    border: 0;
    box-sizing: border-box;
    color: ${fuscousGray};
    display: flex;
    font-family: ${FONT_FAMILY};
    font-size: 1.5rem;
    letter-spacing: 0.05em;
    padding: 0.2em 0.3em;
    position: relative;

    ${({center}) => center && css`
        justify-content: center;
    `}

    ${({fluid}) => fluid ? css`
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
        bottom: 0;
        content: '';
        left: 0;
        position: absolute;
        top: 0;
        transition: ${transition('background-color', 'bottom', 'top', 'width')};
        width: 0;
    }

    /* Bars */
    &::after {
        border: 2px solid ${fuscousGray};
        border-left: none;
        border-right: none;
        bottom: 0;
        box-sizing: border-box;
        content: '';
        left: 0%;
        opacity: 0;
        position: absolute;
        top: 0;
        transition: ${transition('bottom', 'opacity', 'top')};
        width: 100%;
    }

    &:focus,
    &:hover {
        &::before {
            width: 100%;
        }

        &::after {
            bottom: -${BAR_OFFSET_EM}em;
            opacity: 1;
            top: -${BAR_OFFSET_EM}em;
        }
    }

    &:active {
        ${activeStyles}
    }

    ${({active}) => active ? css`
        ${activeStyles}
    ` : css`
        &:not(:active):focus,
        &:not(:active):hover {
            color: ${softAmber};
        }
    `}
`;

const StyledButton = styled.button.attrs(() => ({
    type: 'button'
}))`
    ${nonInteractiveStyles}
    ${interactiveStyles}
    appearance: none;
    outline: none;
    text-align: left;
`;

const StyledLink = styled.a`
    ${nonInteractiveStyles}
    ${interactiveStyles}
    text-decoration: none;
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
    href,
    onClick,

    active,
    center,
    fluid,
    ...htmlAttributes
}, ref) => {
    let StyledElement;

    if (disabled) {
        StyledElement = DisabledElement;
    } else if (href) {
        StyledElement = StyledLink;
    } else {
        StyledElement = StyledButton;
    }

    return (
        <StyledElement
            className={className}
            ref={ref}
            href={!disabled && href}
            onClick={!disabled && onClick}
            active={active}
            center={center}
            fluid={fluid}
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
    href: PropTypes.string,
    onClick: PropTypes.func,
    
    active: PropTypes.bool,
    center: PropTypes.bool,
    fluid: PropTypes.bool
};

Button.displayName = 'Button';

export default Button;
