import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleWrapper = styled.h2`
    font-size: 1em;
    margin: 0;
    padding: 0.5em 1em;
`;

const Title = styled.span`
    font-size: 1.2em;
    font-weight: normal;
`;

const PostHeaderTitle = ({children}) => (
    <TitleWrapper>
        <Title>
            {children}
        </Title>
    </TitleWrapper>
);

PostHeaderTitle.propTypes = {
    children: PropTypes.node
};

export default PostHeaderTitle;
