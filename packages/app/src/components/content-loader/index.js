import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {tana} from 'yorha/src/common/style/palette';
import Loader from 'yorha/src/components/graphics/loader';

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
`;

const StyledLoader = styled(Loader)`
    height: 5rem;
`;

const ContentLoader = ({
    children,
    className,
    ...htmlAttributes
}) => {
    return (
        <Wrapper className={className} {...htmlAttributes}>
            <StyledLoader color={tana} aria-hidden="false" aria-label="Loading" />
            {children}
        </Wrapper>
    );
};

ContentLoader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default ContentLoader;
