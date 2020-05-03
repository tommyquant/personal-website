import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {fuscousGray} from 'yorha/src/common/style/palette';
import {fontFamily, lineHeight} from 'yorha/src/common/style/font';
import Card from 'yorha/src/components/card';

import SEO from '../../partials/seo';

import Content from '../content';

const StyledCard = styled(Card)`
    box-sizing: border-box;
    color: ${fuscousGray};
    font-family: ${fontFamily};
    font-size: 1.5rem;
    line-height: ${lineHeight};
    margin: 0 auto;
    max-width: 768px;
    padding: 1.5em;
    width: 100%;
`;

const ContentError = ({
    error
}) => (
    <Content heading="Error">
        <SEO title="Error" />

        <StyledCard shadow>
            <span>{error || 'An unexpected error ocurred. Check the logs for more information.'}</span>
        </StyledCard>
    </Content>
);

ContentError.propTypes = {
    error: PropTypes.string
};

export default ContentError;
