const PACKAGES_FOLDER = 'packages';

module.exports = {
    app: {
        directory: `${PACKAGES_FOLDER}/app`,
        env: {
            GATSBY_TELEMETRY_DISABLED: 1,
            GATSBY_SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
            GATSBY_SANITY_DATASET: process.env.SANITY_DATASET,
            GATSBY_WEBSITE_TITLE: process.env.WEBSITE_TITLE,
            GATSBY_APP_SETTINGS_ENVIRONMENT: 'website-production'
        }
    },
    sanity: {
        directory: `${PACKAGES_FOLDER}/sanity`,
        env: {
            SANITY_STUDIO_API_PROJECT_ID: process.env.SANITY_PROJECT_ID,
            SANITY_STUDIO_API_DATASET: process.env.SANITY_DATASET,
        }
    },
    yorha: {
        directory: `${PACKAGES_FOLDER}/yorha`
    }
};
