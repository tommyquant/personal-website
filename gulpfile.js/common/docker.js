const {execute} = require('./execute');

const DEFAULT_COMPOSE_PROJECT_NAME = 'quant';

function getBaseArgs(composeFiles, projectName = DEFAULT_COMPOSE_PROJECT_NAME) {
    if (!Array.isArray(composeFiles) || composeFiles.length < 1) {
        throw new Error('Must specify at least one Docker Compose file.');
    }

    const composeFilesArgs = composeFiles
        .map((fileName) => `-f ${fileName}`)
        .join(' ');

    return `${composeFilesArgs} -p ${projectName}`;
}

module.exports = {
    DEFAULT_COMPOSE_PROJECT_NAME,
    getBaseArgs
};
