import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

import Image from './components/image';
import Card from '../../components/card';
import serializers from './serializers';

const StyledCard = styled(Card)`
    padding: 1.5em;
    margin: 0 auto;
    max-width: 768px;
`;

const PostTitle = styled.h1`
    font-weight: normal;
    letter-spacing: 0.1em;
    text-shadow: 0.2em 0.2em 0 rgba(0, 0, 0, 0.15);
    text-transform: uppercase;
`;

const PostTemplate = ({
    title,
    date_posted,
    featureImageUrl,
    bodyRaw
}) => {
    return (
        <React.Fragment>
            <PostTitle>{title}</PostTitle>
            <StyledCard hasShadow={true}>
                <h2>{new Date(date_posted).toDateString()}</h2>
                <Image src={featureImageUrl} />
                <BlockContent blocks={bodyRaw} serializers={serializers} />
            </StyledCard>
        </React.Fragment>
    );
};

PostTemplate.propTypes = {
    title: PropTypes.string,
    date_posted: PropTypes.string,
    featureImageUrl: PropTypes.string,
    bodyRaw: PropTypes.any
};

export default PostTemplate;
