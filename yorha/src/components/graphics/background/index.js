import React from 'react';
import PropTypes from 'prop-types';
import styled, {css, keyframes} from 'styled-components';

import {taupeGray} from '../../../common/style/palette';

const LINE_WIDTH = '2px';

const innerCircleScaleAnim = keyframes`
    0% {
        height: 95%;
        width: 95%;
    }
    
    50% {
        height: 98%;
        width: 98%;
    }
    
    100% {
        height: 95%;
        width: 95%;
    }
`;

const centeredStyles = css`
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const Circles = styled.div`
    border: ${LINE_WIDTH} solid ${({color}) => color};
    border-radius: 99999px;
    height: 50vw;
    position: relative;
    width: 50vw;

    &::before {
        animation: ${innerCircleScaleAnim} 10s ease-in-out infinite;
        border: ${LINE_WIDTH} solid ${({color}) => color};
        border-radius: 99999px;
        content: '';

        ${centeredStyles}
    }
`;

const lineCommonStyles = css`
    background-color: ${({color}) => color};
    height: ${LINE_WIDTH};
`;

const Lines = styled.div`
    background-color: ${({color}) => color};
    height: ${LINE_WIDTH};
    width: 250%;

    ${centeredStyles}

    &::before {
        ${lineCommonStyles}
        ${centeredStyles}

        content: '';
        top: -2.5vw;
        width: 80%;
    }

    &::after {
        ${lineCommonStyles}
        ${centeredStyles}

        content: '';
        top: 2.5vw;
        width: 90%;
    }
`;

const Container = styled.div`
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
`;

const LeftGraphic = styled.div`
    left: 0;
    position: absolute;
    top: 0;
    transform: translate(-50%, -50%) rotate(45deg);
`;

const RightGraphic = styled.div`
    bottom: 0;
    position: absolute;
    right: 0;
    transform: translate(50%, 50%) rotate(45deg);
`;

const Background = ({
    className,
    color = taupeGray,
    ...htmlAttributes
}) => {
    return (
        <Container className={className} {...htmlAttributes}>
            <LeftGraphic>
                <Circles color={color}>
                    <Lines color={color} />
                </Circles>
            </LeftGraphic>
            <RightGraphic>
                <Circles color={color}>
                    <Lines color={color} />
                </Circles>
            </RightGraphic>
        </Container>
    );
};

Background.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};

export default Background;
