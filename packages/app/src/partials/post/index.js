
import React from 'react';
import PropTypes from 'prop-types';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

import ContentLoader from '../../components/content-loader';
import ContentError from '../../components/content-error';
import NotFound from '../../pages/404';

import PostTemplate from './template';

const GET_POST_BY_SLUG = gql`
    query ($slug: String!) {
        allPost(where: {slug: {current: {eq: $slug}}}) {
            title
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

    if (loading) return <ContentLoader />;

    if (error) return <ContentError />;
        
    if (data.allPost.length < 1) return <NotFound />;

    return (
        <PostTemplate {...data.allPost[0]} />
    );
};

Post.propTypes = {
    slug: PropTypes.string
};

export default Post;
