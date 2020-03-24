import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

import Image from './components/image';
import serializers from './serializers';

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 768px;
`;

const PostTemplate = ({
    title,
    date_posted,
    featureImageUrl,
    bodyRaw
}) => {
    return (
        <Wrapper>
            <h1>{title}</h1>
            <subtitle>{new Date(date_posted).toDateString()}</subtitle>
            <Image src={featureImageUrl} />
            <BlockContent blocks={bodyRaw} serializers={serializers} />
        </Wrapper>
    );
};

PostTemplate.propTypes = {
    title: PropTypes.string,
    date_posted: PropTypes.string,
    featureImageUrl: PropTypes.string,
    bodyRaw: PropTypes.any
};

export default PostTemplate;
