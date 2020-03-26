/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: 'Tommy Tran'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-styled-components'
        },
        {
            resolve: 'gatsby-plugin-create-client-paths',
            options: {prefixes: ['/posts/*']},
        },
        {
            resolve: 'gatsby-plugin-alias-imports',
            options: {
                // When installing local packages (such as yorha), the app will
                // error because we have two installations of React. This alias
                // makes sure we only use the 'react' package from this package.
                alias: {
                    react: path.resolve('./node_modules/react')
                },
                extensions: []
            }
        }
    ]
};
