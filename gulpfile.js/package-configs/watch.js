const WATCH_SCRIPT_NAME = 'watch';

module.exports = {
    app: {
        execute: {
            command: WATCH_SCRIPT_NAME,
            args: '--port 8000'
        }
    },
    sanity: {
        execute: {
            command: WATCH_SCRIPT_NAME,
            args: `--port 3333`
        }
    },
    yorha: {
        execute: {
            command: WATCH_SCRIPT_NAME,
            args: `--port 9001`
        }
    }
};
