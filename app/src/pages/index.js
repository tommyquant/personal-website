import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const Image = styled.img`
    display: block;
    width: 200px;
`;

const query = gql`
    {
        allPost {
            title
            feature_image {
                asset {
                    metadata {
                        lqip
                    }
                }
            }
        }
    }
`;

const Home = () => {
    const { loading, error, data } = useQuery(query);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            Hello! {!!data.allPost && data.allPost.map(({ title, feature_image }) => (
                <Image key={title} alt={title} src={feature_image.asset.metadata.lqip} />
            ))}
        </div>
    );
};

export default Home;
