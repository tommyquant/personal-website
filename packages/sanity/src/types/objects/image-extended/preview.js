import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-gap: 0.5em;
    justify-items: center;
    width: 100%;
`;

const Title = styled.span`
    display: block;
    width: 100%;
`;

const StyledImg = styled.img`
    display: block;
    max-width: 100%;
`;

const Description = styled.p`
    margin: 0;
`;

const Preview = ({value}) => {
    if (!value) {
        return null;
    }

    const {title, assetUrl, description} = value;

    return (
        <Wrapper>
            <Title>{title}</Title>
            <StyledImg src={assetUrl} alt={description} />
            <Description>{description}</Description>
        </Wrapper>
    );
};

Preview.propTypes = {
    value: PropTypes.shape({
        title: PropTypes.string,
        assetUrl: PropTypes.string,
        description: PropTypes.string
    })
};

export default Preview;
