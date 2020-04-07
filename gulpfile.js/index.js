module.exports.build = require('./build');

module.exports.default = (cb) => {
    cb(new Error('Oops! Looks like you forgot to specify a task.'));
};
