import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import {rgba} from 'polished';

import {fuscousGray, taupeGray} from 'yorha/src/common/style/palette';
import {fontFamily} from 'yorha/src/common/style/font';
import DoubleBarLine from 'yorha/src/components/graphics/double-bar-line';
import Card from 'yorha/src/components/card';

import {getImageUrl} from '../../common/sanity-image';
import ResponsiveImg from '../../components/responsive-img';
import serializers from './serializers';

const PostTitle = styled.h1`
    color: ${fuscousGray};
    font-family: ${fontFamily};
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
    feature_image,
    bodyRaw
}) => {
    // console.log(feature_image);

    return (
        <React.Fragment>
            <PostTitle>{title}</PostTitle>
            <Content>
                <StyledDoubleBarLine color={taupeGray} />
                <StyledCard hasShadow={true}>
                    <ResponsiveImg center />
                    <BlockContent
                        projectId={process.env.GATSBY_SANITY_PROJECT_ID}
                        dataset={process.env.GATSBY_SANITY_DATASET}
                        blocks={bodyRaw}
                        serializers={serializers}
                    />
                </StyledCard>
            </Content>
        </React.Fragment>
    );
};

PostTemplate.propTypes = {
    title: PropTypes.string,
    feature_image: PropTypes.object,
    bodyRaw: PropTypes.any
};

export default PostTemplate;
