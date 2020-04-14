const fs = require('fs-extra');
const path = require('path');
const {series} = require('gulp');

const {runScript} = require('./common/run');
const {getPackagesConfig} = require('./package-configs');

const packagesConfig = getPackagesConfig(['build']);
const BUILD_FOLDER_NAME = 'public';

function buildApp() {
    const package = packagesConfig.app;

    return runScript(
        package.execute.command,
        package.execute.args,
        {
            cwd: package.directory,
            env: package.env
        }
    );
}

function buildSanity() {
    const package = packagesConfig.sanity;

    return runScript(
        package.execute.command,
        package.execute.args,
        {
            cwd: package.directory,
            env: package.env
        }
    );
}

function buildYorha() {
    const package = packagesConfig.yorha;

    return runScript(
        package.execute.command,
        package.execute.args,
        {
            cwd: package.directory,
            env: package.env
        }
    );
}

async function clean() {
    console.log(`Removing previous build folder: ${BUILD_FOLDER_NAME}`)
    return fs.remove(BUILD_FOLDER_NAME);
}

async function copyArtifacts(cb) {
    for (const package of Object.values(packagesConfig)) {
        console.log(`Copying artifacts from ${path.join(package.directory, BUILD_FOLDER_NAME)} to ${BUILD_FOLDER_NAME}`)
        await fs.copy(path.resolve(package.directory, BUILD_FOLDER_NAME), BUILD_FOLDER_NAME);
    }

    cb();
}

module.exports = series(
    buildApp,
    buildSanity,
    buildYorha,
    clean,
    copyArtifacts
);
