const execute = require('./common/execute');
const {COMPOSE_PROJECT_NAME} = require('./common/docker');

const WATCH_FILE_SUFFIX = 'watch';

function down(cb) {
    return execute([`docker-compose -f docker-compose.yml -f docker-compose.${WATCH_FILE_SUFFIX}.yml -p ${COMPOSE_PROJECT_NAME} down --remove-orphans`]);
}

function up() {
    return execute([`docker-compose -f docker-compose.yml -f docker-compose.${WATCH_FILE_SUFFIX}.yml -p ${COMPOSE_PROJECT_NAME} up -d --build`]);
}

module.exports = {
    down,
    up
};
