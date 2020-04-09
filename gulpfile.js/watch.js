const {execute} = require('./common/execute');
const {DEFAULT_COMPOSE_PROJECT_NAME, getBaseArgs} = require('./common/docker');

const COMPOSE_FILES = ['docker-compose.yml', 'docker-compose.watch.yml'];
const PROJECT_NAME = `${DEFAULT_COMPOSE_PROJECT_NAME}-watch`;

function down() {
    return execute('docker-compose', `${getBaseArgs(COMPOSE_FILES, PROJECT_NAME)} down --remove-orphans`);
}

async function up(cb) {
    try {
        return execute('docker-compose', `${getBaseArgs(COMPOSE_FILES, PROJECT_NAME)} up -d --build`);
    } catch (error) {
        cb(error);
    }
}

module.exports = {
    down,
    up
};
