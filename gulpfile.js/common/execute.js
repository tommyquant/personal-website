const {spawn} = require('child_process');

function execute(command, args, options = {}) {
    return new Promise((resolve, reject) => {
        console.log(`Executing command:\n${command} ${args}\n`);

        const child = spawn(
            command,
            args.split(' '),
            {stdio: 'inherit', ...options}
        );

        child.on('exit', (code, signal) => {
            const message = `\nCommand exited with code: ${code} and signal: ${signal}. See command below.\n${command} ${args}\n`;
            
            if (code !== 0 || signal) {
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

module.exports = {
    execute
};
