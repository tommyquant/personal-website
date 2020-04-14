const BUILD_SCRIPT_NAME = 'build';

module.exports = {
    app: {
        execute: {
            command: BUILD_SCRIPT_NAME
        }
    },
    sanity: {
        execute: {
            command: BUILD_SCRIPT_NAME,
            args: `public${process.env.STUDIO_BASE_PATH} --yes`
        },
        env: {
            SANITY_STUDIO_PROJECT_BASEPATH: process.env.STUDIO_BASE_PATH
        }
    },
    yorha: {
        execute: {
            command: BUILD_SCRIPT_NAME,
            args: `--output-dir public${process.env.STORYBOOK_BASE_PATH}`
        },
        env: {
            STORYBOOK_BASE_PATH: process.env.STORYBOOK_BASE_PATH
        }
    }
};
