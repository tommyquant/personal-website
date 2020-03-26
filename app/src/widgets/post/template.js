import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import {rgba} from 'polished';

import {fuscousGray, taupeGray} from '../../common/style/palette';
import DoubleBarLine from '../../components/graphics/double-bar-line';
import Card from '../../components/card';

import Image from './components/image';
import serializers from './serializers';

const PostTitle = styled.h1`
    font-size: 2.8rem;
    font-weight: normal;
    letter-spacing: 0.1em;
    margin-bottom: 1em;
    text-shadow: 0.15em 0.15em 0 ${rgba(fuscousGray, 0.25)};
    text-transform: uppercase;
`;

const StyledCard = styled(Card)`
    margin: 0 auto;
    max-width: 768px;
    padding: 1.5em;
`;

const Content = styled.div`
    position: relative;
`;

const StyledDoubleBarLine = styled(DoubleBarLine)`
    left: 0;
    position: absolute;
    top: 0;
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
            <Content>
                <StyledDoubleBarLine color={taupeGray} />
                <StyledCard hasShadow={true}>
                    <h2>{new Date(date_posted).toDateString()}</h2>
                    <Image src={featureImageUrl} />
                    <BlockContent blocks={bodyRaw} serializers={serializers} />
                </StyledCard>
            </Content>
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
