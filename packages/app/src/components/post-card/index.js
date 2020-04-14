import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {fuscousGray, softAmber, taupeGray} from 'yorha/src/common/style/palette';
import {fontFamily} from 'yorha/src/common/style/font';
import transition from 'yorha/src/common/style/transition';

import Card from 'yorha/src/components/card';

import ResponsiveImg from '../../components/responsive-img';

const StyledResponsiveImg = styled(ResponsiveImg)`
    filter: sepia(1);
    transition: ${transition('filter')};
`;

const StyledHeader = styled.header`
    background-color: ${taupeGray};
    color: ${fuscousGray};
    transition: ${transition('background-color', 'color')};
`;

const TitleWrapper = styled.h2`
    font-size: 1em;
    margin: 0;
    padding: 0.5em 1em;
`;

const Title = styled.span`
    font-size: 1.2em;
    font-weight: normal;
`;

const Description = styled.p`
    color: ${fuscousGray};
    margin: 0;
    padding: 0.5em 1em;
`;

const PostHeaderTitle = ({children}) => (
    <TitleWrapper>
        <Title>
            {children}
        </Title>
    </TitleWrapper>
);

PostHeaderTitle.propTypes = {
    children: PropTypes.node
};

const PostHeader = ({
    children,
    className,
    ...htmlAttributes
}) => (
    <StyledHeader className={className} {...htmlAttributes}>
        {children}
    </StyledHeader>
);

PostHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string
};

PostHeader.Image = StyledResponsiveImg;
PostHeader.Title = PostHeaderTitle;

const StyledCard = styled(Card)`
    font-family: ${fontFamily};

    &:focus,
    &:hover {
        ${StyledResponsiveImg} {
            filter: sepia(0);
        }

        ${StyledHeader} {
            background-color: ${fuscousGray};
            color: ${softAmber};
        }
    }
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
