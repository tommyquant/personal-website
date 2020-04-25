import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

import {fuscousGray} from 'yorha/src/common/style/palette';
import {fontFamily, lineHeight} from 'yorha/src/common/style/font';
import Card from 'yorha/src/components/card';

import {getSrcsetOptions} from '../../common/sanity-image';
import Content from '../../components/content';
import ResponsiveImg from '../../components/responsive-img';
import SEO from '../../partials/seo';

import serializers from './serializers';

const StyledCard = styled(Card)`
    box-sizing: border-box;
    color: ${fuscousGray};
    font-family: ${fontFamily};
    line-height: ${lineHeight};
    margin: 0 auto;
    max-width: 768px;
    padding: 1.5em;
    width: 100%;
`;

const PostTemplate = ({
    title,
    feature_image,
    bodyRaw
}) => {
    return (
        <Content heading={title}>
            <SEO title={title} />

            <StyledCard hasShadow={true}>
                {!!feature_image && (
                    <ResponsiveImg
                        center
                        srcsetOptions={getSrcsetOptions(feature_image)}
                        fallbackSrc={feature_image.asset.url}
                        alt={feature_image.description}
                    />
                )}
                
                {!!bodyRaw && (
                    <BlockContent
                        projectId={process.env.GATSBY_SANITY_PROJECT_ID}
                        dataset={process.env.GATSBY_SANITY_DATASET}
                        blocks={bodyRaw}
                        serializers={serializers}
                    />
                )}
            </StyledCard>
        </Content>
    );
};

PostTemplate.propTypes = {
    title: PropTypes.string,
    feature_image: PropTypes.object,
    bodyRaw: PropTypes.any
};

export default PostTemplate;
