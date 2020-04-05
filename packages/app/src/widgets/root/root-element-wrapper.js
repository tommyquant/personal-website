import React from 'react';
import PropTypes from 'prop-types';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

const client = new ApolloClient({
    uri: `https://${process.env.SANITY_STUDIO_API_PROJECT_ID}.apicdn.sanity.io/v1/graphql/${process.env.SANITY_STUDIO_API_DATASET}/default`,
    fetch // Use the same fetch API for SSR and browser
});

const RootElementWrapper = ({element}) => (
    <ApolloProvider client={client}>
        {element}
    </ApolloProvider>
);

RootElementWrapper.propTypes = {
    element: PropTypes.node
};

export default RootElementWrapper;
