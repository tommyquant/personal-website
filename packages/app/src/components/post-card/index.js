import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {fuscousGray, softAmber} from 'yorha/src/common/style/palette';
import {fontFamily, lineHeight} from 'yorha/src/common/style/font';

import Card from 'yorha/src/components/card';

import PostHeader from './header';

const StyledCard = styled(Card)`
    display: block;
    font-family: ${fontFamily};
    height: 100%;
    line-height: ${lineHeight};

    &:focus,
    &:hover {
        ${PostHeader.Image} {
            filter: sepia(0);
        }

        ${PostHeader} {
            background-color: ${fuscousGray};
            color: ${softAmber};
        }
    }
`;

const Description = styled.p`
    color: ${fuscousGray};
    margin: 0;
    padding: 0.5em 1em;
`;

const PostCard = ({
    children,
    className,
    ...htmlAttributes
}) => (
    <StyledCard
        className={className}
        shadowWhenFocusHover
        {...htmlAttributes}
    >
        {children}
    </StyledCard>
);

PostCard.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

PostCard.Header = PostHeader;
PostCard.Description = Description;

export default PostCard;
