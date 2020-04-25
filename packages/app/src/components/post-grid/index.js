import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;

    @media only screen and (min-width: 25rem) {
        display: grid;
        grid-auto-rows: max-content;
        grid-gap: 2rem 1rem;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
`;

const PostGrid = ({
    children,
    className,
    ...htmlAttributes
}) => {
    return (
        <Container className={className} {...htmlAttributes}>
            {children}
        </Container>
    );
};

PostGrid.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default PostGrid;
