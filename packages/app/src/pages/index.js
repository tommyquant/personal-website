import React from 'react';
import styled from 'styled-components';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import {Link} from '@reach/router';

import DoubleBarLine from 'yorha/src/components/graphics/double-bar-line';

import PostGrid from '../components/post-grid';
import PostCard from '../components/post-card';

const Container = styled.div`
    align-content: center;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: min-content 1fr;
    grid-template-rows: min-content;
    width: 100%;
`;

const StyledLink = styled(Link)`
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
                asset {
                    url
                }
            }
            description
        }
    }
`;

const Home = () => {
    const {loading, error, data} = useQuery(query);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <Container>
            <DoubleBarLine />

            <PostGrid>
                {!!data.allPost && data.allPost.map(({
                    title,
                    slug,
                    feature_image,
                    description
                }) => (
                    <PostCard
                        key={slug.current}
                        forwardedAs={StyledLink}
                        to={`posts/${slug.current}`}
                    >
                        <PostCard.Header imgSrc={feature_image.asset.url}>
                            {title}
                        </PostCard.Header>
                        <PostCard.Description>
                            {description}
                        </PostCard.Description>
                    </PostCard>
                ))}
            </PostGrid>
        </Container>
    );
};

export default Home;