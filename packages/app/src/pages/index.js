import React from 'react';
import styled from 'styled-components';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import {Link} from 'gatsby';

import {getSrcsetOptions} from '../common/sanity-image';
import Content from '../components/content';
import ContentLoader from '../components/content-loader';
import ContentError from '../components/content-error';
import PostGrid from '../components/post-grid';
import PostCard from '../components/post-card';
import SEO from '../partials/seo';

import NotFound from './404';

const StyledLink = styled(Link)`
    outline: none;
    text-decoration: none;
`;

const GET_FEATURED_POSTS = gql`
    query ($environment: String!) {
        allAppSettings(where: {environment: {eq: $environment}}) {
            featured_posts {
            title
                slug {
                    current
                }
                feature_image {
                    description
                    asset {
                        _id
                        url
                        metadata {
                            lqip
                        }
                    }
                }
                description
            }
        }
    }
`;

const Home = () => {
    const {loading, error, data} = useQuery(GET_FEATURED_POSTS, {
        variables: {
            environment: process.env.GATSBY_APP_SETTINGS_ENVIRONMENT
        }
    });

    if (loading) return <ContentLoader />;

    if (error) return <ContentError />;

    if (data.allAppSettings.length < 1) return <NotFound />;

    const appSettings = data.allAppSettings[0];

    return (
        <Content heading="Projects">
            <SEO />

            <PostGrid>
                {Array.isArray(appSettings.featured_posts) && appSettings.featured_posts.map(({
                    title,
                    slug,
                    feature_image,
                    description
                }) => (
                    <PostCard
                        key={slug.current}
                        forwardedAs={StyledLink}
                        to={`/posts/${slug.current}`}
                    >
                        <PostCard.Header>
                            <PostCard.Header.Image
                                srcsetOptions={getSrcsetOptions(feature_image)}
                                fallbackSrc={feature_image.asset.url}
                                lqip={feature_image.asset.metadata.lqip}
                                alt={feature_image.description}
                            />
                            <PostCard.Header.Title>
                                {title}
                            </PostCard.Header.Title>
                        </PostCard.Header>
                        <PostCard.Description>
                            {description}
                        </PostCard.Description>
                    </PostCard>
                ))}
            </PostGrid>
        </Content>
    );
};

export default Home;
