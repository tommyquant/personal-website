import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

const client = new ApolloClient({
    uri: `https://${process.env.SANITY_PROJECT_ID}.apicdn.sanity.io/v1/graphql/${process.env.SANITY_DATASET}/default`,
    fetch // Use the same fetch API for SSR and browser
});

// eslint-disable-next-line react/prop-types
const RootElementWrapper = ({element}) => (
    <ApolloProvider client={client}>
        {element}
    </ApolloProvider>
);

export default RootElementWrapper;
