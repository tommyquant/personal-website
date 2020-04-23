import React from 'react';
import styled from 'styled-components';

import {fuscousGray} from 'yorha/src/common/style/palette';
import {fontFamily, lineHeight} from 'yorha/src/common/style/font';
import Card from 'yorha/src/components/card';

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

const About = () => (
    <StyledCard shadow>
        <p>Hi, I&apos;m Tommy. I&apos;m a full stack developer.</p>
    </StyledCard>
);

export default About;
