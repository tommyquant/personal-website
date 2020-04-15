import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import {rgba} from 'polished';

import {fuscousGray, taupeGray} from 'yorha/src/common/style/palette';
import {fontFamily, lineHeight} from 'yorha/src/common/style/font';
import DoubleBarLine from 'yorha/src/components/graphics/double-bar-line';
import Card from 'yorha/src/components/card';

import {getSrcsetOptions} from '../../common/sanity-image';
import ResponsiveImg from '../../components/responsive-img';
import serializers from './serializers';

const PostTitle = styled.h1`
    color: ${fuscousGray};
    font-family: ${fontFamily};
    font-size: 2.8rem;
    font-weight: normal;
    letter-spacing: 0.1em;
    margin: 0 0 1em;
    text-shadow: 0.15em 0.15em 0 ${rgba(fuscousGray, 0.25)};
    text-transform: uppercase;
`;

const Content = styled.div`
    display: grid;
    grid-template-areas: '. card .';
    grid-template-columns: 1fr minmax(auto, 768px) 1fr;
    position: relative;
`;

const StyledCard = styled(Card)`
    box-sizing: border-box;
    font-family: ${fontFamily};
    grid-area: card;
    line-height: ${lineHeight};
    margin: 0 auto;
    padding: 1.5em;
    width: 100%;
`;

const StyledDoubleBarLine = styled(DoubleBarLine)`
    opacity: 0;

    @media only screen and (min-width: 70rem) {
        left: 0;
        opacity: 1;
        position: absolute;
        top: 0;
    }
`;

const PostTemplate = ({
    title,
    feature_image,
    bodyRaw
}) => {
    return (
        <React.Fragment>
            <PostTitle>{title}</PostTitle>
            <Content>
                <StyledDoubleBarLine color={taupeGray} />
                <StyledCard hasShadow={true}>
                    {!!feature_image && <ResponsiveImg center srcsetOptions={getSrcsetOptions(feature_image)} fallbackSrc={feature_image.asset.url} />}
                    
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
        </React.Fragment>
    );
};

PostTemplate.propTypes = {
    title: PropTypes.string,
    feature_image: PropTypes.object,
    bodyRaw: PropTypes.any
};

export default PostTemplate;
