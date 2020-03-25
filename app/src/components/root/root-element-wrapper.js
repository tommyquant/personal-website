import React from 'react';
import PropTypes from 'prop-types';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import {createGlobalStyle} from 'styled-components';
import styledNormalize from 'styled-normalize';
import 'typeface-roboto';

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
        background-color: #cdc8b0;
        margin: 0;
        padding: 0;
    }
    
    /* Some elements must have their font explicitly defined */
    html, body, button, input, textarea, textfield, select {
        color: #4e4b42;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
    }

    p, li {
        line-height: 1.8em;
    }
`;

const RootElementWrapper = ({element}) => (
    <ApolloProvider client={client}>
        <GlobalStyle />
        {element}
    </ApolloProvider>
);

RootElementWrapper.propTypes = {
    element: PropTypes.node
};

export default RootElementWrapper;
