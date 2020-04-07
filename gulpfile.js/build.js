const fs = require('fs-extra');
const {src, dest, series, parallel} = require('gulp');
const path = require('path');

const execute = require('./common/execute');

const BUILD_FOLDER_NAME = 'public';
const PACKAGES_FOLDER_NAME = 'packages';

function getPackagePath(packageName) {
    return path.resolve(PACKAGES_FOLDER_NAME, packageName);
}

function moveArtifacts(packageName) {
    return src(`${PACKAGES_FOLDER_NAME}/${packageName}/${BUILD_FOLDER_NAME}/**/*`)
        .pipe(dest(BUILD_FOLDER_NAME));
}

function clean() {
    return fs.remove(path.resolve(BUILD_FOLDER_NAME));
}

async function buildApp() {
    const packageName = 'app';
    await execute(
        ['npm run build'],
        getPackagePath(packageName),
        {
            SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
            SANITY_DATASET: process.env.SANITY_DATASET
        }
    );
    return moveArtifacts(packageName);
}

async function buildSanity() {
    const packageName = 'sanity';
    await execute(
        [`npm run build -- ${BUILD_FOLDER_NAME}/studio --yes`],
        getPackagePath(packageName),
        {
            SANITY_STUDIO_API_PROJECT_ID: process.env.SANITY_PROJECT_ID,
            SANITY_STUDIO_API_DATASET: process.env.SANITY_DATASET,

        }

    );
    return moveArtifacts(packageName);
}

async function buildYorha() {
    const packageName = 'yorha';
    await execute([`npm run build -- --output-dir ${BUILD_FOLDER_NAME}/storybook`], getPackagePath(packageName));
    return moveArtifacts(packageName);
}

module.exports = series(
    clean,
    parallel(
        buildApp,
        buildSanity,
        buildYorha
    )
);
