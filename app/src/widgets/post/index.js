
import React from 'react';
import PropTypes from 'prop-types';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

import PostTemplate from './template';

const GET_POST_BY_SLUG = gql`
    query ($slug: String!) {
        allPost(where: {slug: {current: {eq: $slug}}}) {
            title
            feature_image {
                _key
                asset {
                    _id
                    url
                    metadata {
                        dimensions {
                            width
                        }
                        lqip
                    }
                }
            }
            bodyRaw
        }
    }
`;

const Post = ({
    slug
}) => {
    const {loading, error, data} = useQuery(GET_POST_BY_SLUG, {
        variables: {
            slug
        }
    });

    if (loading || error || !Array.isArray(data.allPost)) {
        return (
            <p>Loading?</p>
        );
    }

    return (
        <PostTemplate {...data.allPost[0]} />
    );
};

Post.propTypes = {
    slug: PropTypes.string
};

export default Post;
