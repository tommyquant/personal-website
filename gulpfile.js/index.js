module.exports['build'] = require('./build');
module.exports['watch:down'] = require('./watch').down;
module.exports['watch:up'] = require('./watch').up;

module.exports.default = (cb) => {
    cb(new Error('Oops! Looks like you forgot to specify a task.'));
};
