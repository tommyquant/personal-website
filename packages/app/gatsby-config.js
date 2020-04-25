/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-styled-components'
        },
        {
            resolve: 'gatsby-plugin-create-client-paths',
            options: {prefixes: ['/posts/*']},
        }
    ]
};
