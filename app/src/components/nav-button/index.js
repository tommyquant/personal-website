import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import transition from '../../common/transition';

const Overlay = styled.div`
    background-color: #4e4b42;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: ${transition('background-color', 'width')};
    width: 0;
`;

const hoverStyles = css`
    color: #dad4bb;

    ${Overlay} {
        width: 100%;
    }
`;

const hoverBarStyles = css`
    background-color: #4e4b42;
    content: '';
    height: 2px;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transition: ${transition('bottom', 'opacity', 'top')};
    width: 100%;
`;

const ViewableArea = styled.span`
    background-color: #b4af9a;
    display: flex;
    height: 1.6em;
    padding: 0.2em 0.6em;
    position: relative;
    transition: ${transition('color', 'height')};
    width: 100%;

    ${({isActive}) => isActive ? css`
        ${hoverStyles}
        height: 100%;

        &:focus,
        &:hover {
            color: #454138;

            ${Overlay} {
                background-color: #dad4bb;
            }
        }
    ` : css`
        &::before {
            ${hoverBarStyles}
            top: 0;
        }

        &::after {
            ${hoverBarStyles}
            bottom: 0;
        }

        &:focus,
        &:hover {
            ${hoverStyles}

            &::before,
            &::after {
                opacity: 1;
            }

            &::before {
                top: -5px;
            }

            &::after {
                bottom: -5px;
            }
        }
    `}
`;

const Content = styled.div`
    display: flex;
    font-stretch: extra-condensed;
    height: 100%;
    width: 100%;
    z-index: 1;
`;

const StyledButton = styled.button`
    appearance: none;
    align-items: flex-start;
    background-color: transparent;
    border: 0;
    display: flex;
    font-size: 1.5rem;
    height: 2.25em;
    letter-spacing: 0.05em;
    min-width: 8em;
    padding: 0;
    text-transform: uppercase;
`;

// eslint-disable-next-line react/display-name
const NavButton = React.forwardRef(({
    children,
    isActive,
    ...htmlAttributes
}, ref) => {
    return (
        <StyledButton ref={ref} {...htmlAttributes}>
            <ViewableArea isActive={isActive}>
                <Overlay />
                <Content>
                    {children}
                </Content>
            </ViewableArea>
        </StyledButton>
    );
});

NavButton.propTypes = {
    children: PropTypes.node,
    isActive: PropTypes.bool
};

export default NavButton;
