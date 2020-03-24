import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import {createGlobalStyle} from 'styled-components';
import styledNormalize from 'styled-normalize';

const client = new ApolloClient({
    uri: `https://${process.env.SANITY_PROJECT_ID}.apicdn.sanity.io/v1/graphql/${process.env.SANITY_DATASET}/default`,
    fetch // Use the same fetch API for SSR and browser
});

export const GlobalStyle = createGlobalStyle`
    ${styledNormalize}

    *, *:before, *:after {
        box-sizing: border-box;
    }

    body {
        background-color: #d1cdb7;
        color: #454138;
        margin: 0;
        padding: 0;
    }
    
    /* Some elements must have their font explicitly defined */
    html, body, button, input, textarea, textfield, select {
        font-family: Arial, Helvetica, sans-serif;
    }
`;

// eslint-disable-next-line react/prop-types
const RootElementWrapper = ({element}) => (
    <ApolloProvider client={client}>
        <GlobalStyle />
        {element}
    </ApolloProvider>
);

export default RootElementWrapper;
