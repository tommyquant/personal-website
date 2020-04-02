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
                /**
                 * When installing local packages (such as yorha), the app will
                 * error because we have two installations of a package (like React).
                 * These aliases make sure we only use the package from the current
                 * node_modules.
                 */
                alias: {
                    react: path.resolve('./node_modules/react'),
                    'styled-components': path.resolve('./node_modules/styled-components')
                },
                extensions: []
            }
        }
    ]
};
