const {runScript} = require('./common/run');
const {getPackagesConfig} = require('./package-configs');

const packagesConfig = getPackagesConfig(['watch']);

function watchApp() {
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

function watchSanity() {
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

function watchYorha() {
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

module.exports = {
    watchApp,
    watchSanity,
    watchYorha
};
