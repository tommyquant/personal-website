import React from 'react';
import styled from 'styled-components';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import {Link} from 'gatsby';

const Image = styled.img`
    display: block;
    width: 200px;
    filter: sepia(1);
    transition: filter 0.1s;

    &:hover {
        filter: sepia(0);
    }
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
        }
    }
`;

const Home = () => {
    const {loading, error, data} = useQuery(query);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            Hello! {!!data.allPost && data.allPost.map(({title, slug, feature_image}) => (
                <Link key={title} to={`/posts/${slug.current}`}>
                    <Image alt={title} src={feature_image.asset.url} />
                </Link>
            ))}
        </div>
    );
};

export default Home;
