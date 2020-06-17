const {runScript} = require('./common/run');
const {getPackagesConfig} = require('./package-configs');

const packagesConfig = getPackagesConfig(['deploy-graphql']);

function deploySanityGraphQl() {
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

module.exports = deploySanityGraphQl;
