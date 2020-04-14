const {runScript} = require('./common/run');
const {getPackagesConfig} = require('./package-configs');

const packagesConfig = getPackagesConfig(['watch']);

function watchApp() {
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

function watchSanity() {
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

function watchYorha() {
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

module.exports = {
    watchApp,
    watchSanity,
    watchYorha
}