import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 2rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    width: 100%;
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
