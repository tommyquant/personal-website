/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
const {series} = require('gulp');

const {runScript} = require('./common/run');
const {getPackagesConfig} = require('./package-configs');

const packagesConfig = getPackagesConfig(['build']);
const BUILD_FOLDER_NAME = 'public';

function cleanApp() {
    const packageConfig = packagesConfig.app;

    return runScript(
        'clean',
        packageConfig.execute.args,
        {
            cwd: packageConfig.directory,
            env: packageConfig.env
        }
    );
}

function buildApp() {
    const packageConfig = packagesConfig.app;

    return runScript(
        packageConfig.execute.command,
        packageConfig.execute.args,
        {
            cwd: packageConfig.directory,
            env: packageConfig.env
        }
    );
}

function buildSanity() {
    const packageConfig = packagesConfig.sanity;

    return runScript(
        packageConfig.execute.command,
        packageConfig.execute.args,
        {
            cwd: packageConfig.directory,
            env: packageConfig.env
        }
    );
}

function buildYorha() {
    const packageConfig = packagesConfig.yorha;

    return runScript(
        packageConfig.execute.command,
        packageConfig.execute.args,
        {
            cwd: packageConfig.directory,
            env: packageConfig.env
        }
    );
}

async function clean() {
    console.log(`Removing previous build folder: ${BUILD_FOLDER_NAME}`);
    return fs.remove(BUILD_FOLDER_NAME);
}

function copyArtifacts(cb) {
    Object.values(packagesConfig).map((packageConfig) => {
        console.log(`Copying artifacts from ${path.join(packageConfig.directory, BUILD_FOLDER_NAME)} to ${BUILD_FOLDER_NAME}`);

        fs.copySync(path.resolve(packageConfig.directory, BUILD_FOLDER_NAME), BUILD_FOLDER_NAME);
    });

    cb();
}

function createNetlifyRedirects(cb) {
    const redirects = [];

    Object.values(packagesConfig).map((packageConfig) => {
        if (Array.isArray(packageConfig.redirects)) {
            packageConfig.redirects.forEach((redirect) => void redirects.push(redirect));
        }
    });

    console.log('Creating redirects file');
    console.log(redirects.join('\n'));
    fs.writeFileSync(path.resolve(BUILD_FOLDER_NAME, '_redirects'), redirects.join('\n'));

    cb();
}

module.exports = series(
    series(
        cleanApp,
        buildApp
    ),
    buildSanity,
    buildYorha,
    clean,
    copyArtifacts,
    createNetlifyRedirects
);
