const {src, dest, parallel} = require('gulp');
const {spawn} = require('child_process');
const path = require('path');

const buildFolderName = 'public';
const packagesFolderName = 'packages';
const packagesPath = path.resolve(packagesFolderName);

function getPackagePath(packageName) {
    return path.join(packagesPath, packageName);
}

function execute(commands = [], workingDirectory) {
    return new Promise((resolve, reject) => {
        const child = spawn(
            commands.join(' && '),
            {
                shell: true,
                cwd: workingDirectory
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

async function buildApp(cb) {
    const packageName = 'app';
    await execute(['npm run build'], getPackagePath(packageName));

    return src(`${packagesFolderName}/${packageName}/${buildFolderName}/*`)
        .pipe(dest(buildFolderName));

}

async function buildSanity(cb) {
    const packageName = 'sanity';
    await execute([`npm run build -- ${buildFolderName}/studio --yes`], getPackagePath(packageName));

    return src(`${packagesFolderName}/${packageName}/${buildFolderName}/*`)
        .pipe(dest(buildFolderName));
}

async function buildYorha(cb) {
    const packageName = 'yorha';
    await execute([`npm run build -- --output-dir ${buildFolderName}/storybook`], getPackagePath(packageName));

    return src(`${packagesFolderName}/${packageName}/${buildFolderName}/*`)
        .pipe(dest(buildFolderName));
}

module.exports = parallel(
    buildApp,
    buildSanity,
    buildYorha
);