const fs = require('fs-extra');
const {src, dest, series, parallel} = require('gulp');
const path = require('path');

const execute = require('./common/execute');

const buildFolderName = 'public';
const packagesFolderName = 'packages';

function getPackagePath(packageName) {
    return path.resolve(packagesFolderName, packageName);
}

function moveArtifacts(packageName) {
    return src(`${packagesFolderName}/${packageName}/${buildFolderName}/**/*`)
        .pipe(dest(buildFolderName));
}

function clean() {
    return fs.remove(path.resolve(buildFolderName));
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
        [`npm run build -- ${buildFolderName}/studio --yes`],
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
    await execute([`npm run build -- --output-dir ${buildFolderName}/storybook`], getPackagePath(packageName));
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
