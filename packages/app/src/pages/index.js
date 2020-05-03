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

const StyledLink = styled(Link)`
    outline: none;
    text-decoration: none;
`;

const query = gql`
    {
        allPost {
            title
            slug {
                current
            }
            feature_image {
                description
                asset {
                    _id
                    url
                }
            }
            description
        }
    }
`;

const Home = () => {
    const {loading, error, data} = useQuery(query);

    if (loading) return <ContentLoader />;

    if (error) return <ContentError />;

    return (
        <Content heading="Projects">
            <SEO />

            <PostGrid>
                {Array.isArray(data.allPost) && data.allPost.map(({
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
