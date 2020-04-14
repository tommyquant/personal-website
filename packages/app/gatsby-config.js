/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
            resolve: 'gatsby-plugin-env-variables',
            options: {
                whitelist: ['SANITY_PROJECT_ID', 'SANITY_DATASET']
            },
        }
    ]
};
