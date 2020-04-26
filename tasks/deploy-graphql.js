const {series} = require('gulp');

const {runScript} = require('./common/run');
const {getPackagesConfig} = require('./package-configs');

const packagesConfig = getPackagesConfig(['deploy-graphql']);

function deploySanityGraphQl() {
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

module.exports = deploySanityGraphQl;
