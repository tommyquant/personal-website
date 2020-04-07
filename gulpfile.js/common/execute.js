const {spawn} = require('child_process');

function execute(commands = [], workingDirectory, env = {}) {
    return new Promise((resolve, reject) => {
        const child = spawn(
            commands.join(' && '),
            {
                shell: true,
                cwd: workingDirectory,
                env: {
                    ...process.env,
                    ...env
                }
            }
        );

        child.stderr.on('data', (data) => void process.stderr.write(data));
        child.stdout.on('data', (data) => void process.stdout.write(data));
        child.on('exit', (code, signal) => {
            if (code !== 0) {
                reject(`Task exited with code ${code} and signal ${signal}`);
            } else {
                resolve();
            }
        })
    });
}

module.exports = execute;