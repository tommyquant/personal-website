const fs = require('fs-extra');
const path = require('path');
const {series} = require('gulp');

const {runScript} = require('./common/run');
const {getPackagesConfig} = require('./package-configs');

const packagesConfig = getPackagesConfig(['build']);
const BUILD_FOLDER_NAME = 'public';

function cleanApp() {
    const package = packagesConfig.app;

    return runScript(
        'clean',
        package.execute.args,
        {
            cwd: package.directory,
            env: package.env
        }
    );
}

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

function copyArtifacts(cb) {
    Object.values(packagesConfig).map((package) => {
        console.log(`Copying artifacts from ${path.join(package.directory, BUILD_FOLDER_NAME)} to ${BUILD_FOLDER_NAME}`);

        fs.copySync(path.resolve(package.directory, BUILD_FOLDER_NAME), BUILD_FOLDER_NAME);
    });

    cb();
}

function createNetlifyRedirects(cb) {
    const redirects = [];

    Object.values(packagesConfig).map((package) => {
        if (Array.isArray(package.redirects)) {
            package.redirects.forEach((redirect) => void redirects.push(redirect));
        }
    });

    console.log(`Creating redirects file`);
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
