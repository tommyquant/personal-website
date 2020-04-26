const BUILD_SCRIPT_NAME = 'build';

module.exports = {
    app: {
        execute: {
            command: BUILD_SCRIPT_NAME
        },
        redirects: [
            '/* /404.html 404'
        ]
    },
    sanity: {
        env: {
            SANITY_STUDIO_PROJECT_BASEPATH: process.env.STUDIO_BASE_PATH
        },
        execute: {
            command: BUILD_SCRIPT_NAME,
            args: `public${process.env.STUDIO_BASE_PATH} --yes`
        },
        redirects: [
            `${process.env.STUDIO_BASE_PATH}/* ${process.env.STUDIO_BASE_PATH}/index.html 200`
        ]
    },
    yorha: {
        env: {
            STORYBOOK_BASE_PATH: process.env.STORYBOOK_BASE_PATH
        },
        execute: {
            command: BUILD_SCRIPT_NAME,
            args: `--output-dir public${process.env.STORYBOOK_BASE_PATH}`
        },
        redirects: [
            `${process.env.STORYBOOK_BASE_PATH}/* ${process.env.STORYBOOK_BASE_PATH}/index.html 200`
        ]
    }
};
