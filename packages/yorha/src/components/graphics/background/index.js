import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Shape from './shape';

const Container = styled.div`
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
`;

const LeftShape = styled(Shape)`
    left: 0;
    position: absolute;
    top: 0;
`;

const RightShape = styled(Shape)`
    bottom: 0;
    position: absolute;
    right: 0;
`;

const Background = ({
    className,
    color,
    ...htmlAttributes
}) => {
    return (
        <Container aria-hidden="true" className={className} {...htmlAttributes}>
            <LeftShape color={color} />
            <RightShape color={color} viewBox="-100 -100 100 100" />
        </Container>
    );
};

Background.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};

export default Background;
