import React from 'react';
import styled from 'styled-components';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

import {fuscousGray} from 'yorha/src/common/style/palette';
import {fontFamily, lineHeight} from 'yorha/src/common/style/font';
import Card from 'yorha/src/components/card';

import BlockContent from '../common/block-content';
import Content from '../components/content';
import ContentLoader from '../components/content-loader';
import ContentError from '../components/content-error';
import SEO from '../partials/seo';

import NotFound from './404';

const GET_APP_SETTINGS_BY_ENVIRONMENT = gql`
    query ($environment: String!) {
        allAppSettings(where: {environment: {eq: $environment}}) {
            bioRaw
        }
    }
`;

const StyledCard = styled(Card)`
    box-sizing: border-box;
    color: ${fuscousGray};
    font-family: ${fontFamily};
    font-size: 1.25rem;
    line-height: ${lineHeight};
    margin: 0 auto;
    max-width: 768px;
    padding: 1.5em;
    width: 100%;
`;

const About = () => {
    const {loading, error, data} = useQuery(GET_APP_SETTINGS_BY_ENVIRONMENT, {
        variables: {
            environment: process.env.GATSBY_APP_SETTINGS_ENVIRONMENT
        }
    });

    if (loading) return <ContentLoader />;

    if (error) return <ContentError />;
        
    if (data.allAppSettings.length < 1) return <NotFound />;

    return (
        <Content heading="About">
            <SEO title="About" />
    
            <StyledCard shadow>
                <BlockContent blocks={data.allAppSettings[0].bioRaw} />
            </StyledCard>
        </Content>
    );
};

export default About;
