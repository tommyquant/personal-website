
import React from 'react';
import PropTypes from 'prop-types';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import BlockContent from '@sanity/block-content-to-react';
import Youtube from 'react-youtube';

import imageUrlBuilder from '../common/image-url-builder';

/* eslint-disable react/display-name, react/prop-types */
const serializers = {
    types: {
        youtube: ({node}) => <Youtube videoId={node.video_id} />,
        image: ({node}) => <img src={imageUrlBuilder.image(node.asset._ref).url()} />
    }
};
/* eslint-enable react/display-name, react/prop-types */

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

    return (
        <BlockContent blocks={data.allPost[0].bodyRaw} serializers={serializers} />
    );
};

Post.propTypes = {
    slug: PropTypes.string
};

export default Post;
