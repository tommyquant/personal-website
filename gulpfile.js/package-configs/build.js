const {config} = require('../common/config');

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
            args: `public${config.STUDIO_BASE_PATH} --yes`
        },
        env: {
            SANITY_STUDIO_PROJECT_BASEPATH: config.STUDIO_BASE_PATH
        }
    },
    yorha: {
        execute: {
            command: BUILD_SCRIPT_NAME,
            args: `--output-dir public${config.STORYBOOK_BASE_PATH}`
        },
        env: {
            STORYBOOK_BASE_PATH: config.STORYBOOK_BASE_PATH
        }
    }
};
