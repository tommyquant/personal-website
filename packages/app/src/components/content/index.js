import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {rgba} from 'polished';

import {fontFamily} from 'yorha/src/common/style/font';
import {fuscousGray} from 'yorha/src/common/style/palette';
import AnimatedText from 'yorha/src/components/animated-text';

import LeftDoubleBarLine from '../left-double-bar-line';

const OuterWrapper = styled.div`
    align-items: center;
    display: grid;
    grid-template-areas:
        'title'
        'inner';
    grid-template-rows: min-content 1fr;
    height: 100%;
`;

const PageHeading = styled.h1`
    color: ${fuscousGray};
    font-family: ${fontFamily};
    font-size: 2.2rem;
    font-weight: normal;
    grid-area: title;
    letter-spacing: 0.1em;
    margin: 0 0 1em;
    text-shadow: 0.15em 0.15em 0 ${rgba(fuscousGray, 0.25)};
    text-transform: uppercase;

    @media only screen and (min-width: 40rem) {
        font-size: 2.8rem;
    }
`;

const InnerWrapper = styled.div`
    display: flex;
    width: 100%;
`;

const StyledLeftDoubleBarLine = styled(LeftDoubleBarLine)`
    flex: 0;
    margin-right: 2rem;
`;

const Content = ({
    children,
    className,
    heading,
    ...htmlAttributes
}) => {
    return (
        <OuterWrapper className={className} {...htmlAttributes}>
            {!!heading && (
                <PageHeading>
                    <AnimatedText>
                        {heading}
                    </AnimatedText>
                </PageHeading>
            )}
            
            <InnerWrapper>
                <StyledLeftDoubleBarLine />
                {children}
            </InnerWrapper>
        </OuterWrapper>
    );
};

Content.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    heading: PropTypes.string
};

export default Content;
