/* eslint-disable no-console */
const path = require('path');
const spawn = require('cross-spawn');
const npmRunPath = require('npm-run-path');

/**
 * Returns an array of arguments if a string is passed in. Returns an empty array if falsey.
 * Passes through args if it is already an array.
 * @param {*} args 
 */
function getNormalizedArgs(args) {
    if (!args) {
        return [];
    }

    return Array.isArray(args) ? args : args.split(' ');
}

function run(command, args, options = {}) {
    return new Promise((resolve, reject) => {
        const normalizedArgs = getNormalizedArgs(args);
        const workDir = options.cwd || process.cwd();
        
        console.log(`Executing command:\n${command} ${normalizedArgs.join(' ')}\n`);

        const child = spawn(
            command,
            normalizedArgs,
            {
                stdio: 'inherit',
                cwd: workDir,
                env: npmRunPath.env({
                    cwd: workDir,
                    env: options.env
                })
            }
        );

        child.on('exit', (code, signal) => {
            const message = `\nCommand exited with code: ${code} and signal: ${signal}. See command below.\n${command} ${normalizedArgs.join(' ')}\n`;
            
            if (code !== 0 && code !== null) {
                reject(new Error(message));
            } else {
                console.log(message);
                resolve();
            }
        });

        child.on('error', (error) => void reject(error));

        const cleanup = () => void child.kill();
        process.once('SIGINT', cleanup);
        process.once('SIGTERM', cleanup);
        process.on('exit', cleanup);
    });
}

/**
 * Run a script defined in package.json. This will execute the command inside the script directly without
 * spawning an instance of npm/yarn/etc.
 * @param {*} script 
 * @param {*} args 
 * @param {*} options 
 */
function runScript(script, args = '', options = {}) {
    const workDir = options.cwd || process.cwd();
    const packageJson = require(path.resolve(workDir, 'package.json'));
    const scripts = packageJson.scripts;
    const scriptToRun = scripts[script].split(' ');
    const command = scriptToRun[0];
    const newArgs = [...scriptToRun.slice(1), ...getNormalizedArgs(args)];

    return run(command, newArgs, options);
}

module.exports = {
    run,
    runScript
};
