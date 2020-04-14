const fs = require('fs-extra');
const path = require('path');
const {parallel, series} = require('gulp');

const {runScript} = require('./common/run');

const PACKAGES_FOLDER_NAME = 'packages';
const BUILD_FOLDER_NAME = 'public';
const PACKAGE_DIRS = {
    app: `${PACKAGES_FOLDER_NAME}/app`,
    sanity: `${PACKAGES_FOLDER_NAME}/sanity`,
    yorha: `${PACKAGES_FOLDER_NAME}/yorha`
};

function buildApp() {
    return runScript(
        'build',
        undefined,
        {
            cwd: PACKAGE_DIRS.app,
            env: {
                GATSBY_TELEMETRY_DISABLED: 1,
                SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
                SANITY_DATASET: process.env.SANITY_DATASET
            }
        }
    );
}

function buildSanity() {
    return runScript(
        'build',
        `${BUILD_FOLDER_NAME}${process.env.STUDIO_BASE_PATH} --yes`,
        {
            cwd: PACKAGE_DIRS.sanity,
            env: {
                SANITY_STUDIO_API_PROJECT_ID: process.env.SANITY_PROJECT_ID,
                SANITY_STUDIO_API_DATASET: process.env.SANITY_DATASET,
                SANITY_STUDIO_PROJECT_BASEPATH: process.env.STUDIO_BASE_PATH
            }
        }
    );
}

function buildYorha() {
    return runScript(
        'build',
        `--output-dir ${BUILD_FOLDER_NAME}${process.env.STORYBOOK_BASE_PATH}`,
        {
            cwd: PACKAGE_DIRS.yorha,
            env: {
                STORYBOOK_BASE_PATH: process.env.STORYBOOK_BASE_PATH
            }
        }
    );
}

async function clean() {
    console.log(`Removing previous build folder: ${BUILD_FOLDER_NAME}`)
    return fs.remove(BUILD_FOLDER_NAME);
}

async function copyArtifacts(cb) {
    for (const [, packageDir] of Object.entries(PACKAGE_DIRS)) {
        console.log(`Copying artifacts from ${path.join(packageDir, BUILD_FOLDER_NAME)} to ${BUILD_FOLDER_NAME}`)
        await fs.copy(path.resolve(packageDir, BUILD_FOLDER_NAME), BUILD_FOLDER_NAME);
    }

    cb();
}

module.exports = series(
    parallel(
        buildApp,
        buildSanity,
        buildYorha
    ),
    clean,
    copyArtifacts
);
