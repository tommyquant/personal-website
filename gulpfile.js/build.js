const fs = require('fs-extra');
const {series} = require('gulp');
const path = require('path');

const {execute} = require('./common/execute');
const {DEFAULT_COMPOSE_PROJECT_NAME, getBaseArgs} = require('./common/docker');

const COMPOSE_FILES = ['docker-compose.yml', 'docker-compose.build.yml'];
const PROJECT_NAME = `${DEFAULT_COMPOSE_PROJECT_NAME}-build`;
const BUILD_FOLDER = 'public';

function cleanRootBuildFolder() {
    // Remove the root build folder
    return fs.remove(path.resolve(BUILD_FOLDER));
}

function cleanContainers() {
    return execute('docker-compose', `${getBaseArgs(COMPOSE_FILES, PROJECT_NAME)} down --remove-orphans`);
}

function up() {
    return execute('docker-compose', `${getBaseArgs(COMPOSE_FILES, PROJECT_NAME)} up -d --build`);
}

function watchLogs() {
    return execute('docker-compose', `${getBaseArgs(COMPOSE_FILES, PROJECT_NAME)} logs --tail=0 --follow`);
}

function moveArtifacts() {
    return src(`packages/*/${BUILD_FOLDER}/**/*`)
        .pipe(dest(BUILD_FOLDER));
}

module.exports.clean = series(
    cleanRootBuildFolder,
    cleanContainers,
);

module.exports.build = series(
    cleanRootBuildFolder,
    cleanContainers,
    up,
    watchLogs,
    moveArtifacts
);
