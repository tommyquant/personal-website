
import React from 'react';
import PropTypes from 'prop-types';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

import imageUrlBuilder from '../../common/image-url-builder';

import PostTemplate from './template';

const GET_POST_BY_SLUG = gql`
    query ($slug: String!) {
        allPost(where: {slug: {current: {eq: $slug}}}) {
            title
            date_posted
            feature_image {
                asset {
                    url
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

    const {feature_image, ...otherPostData} = data.allPost[0];
    const featureImageUrl = imageUrlBuilder.image(feature_image.asset.url).url();

    return (
        <PostTemplate {...{...otherPostData, featureImageUrl}} />
    );
};

Post.propTypes = {
    slug: PropTypes.string
};

export default Post;
