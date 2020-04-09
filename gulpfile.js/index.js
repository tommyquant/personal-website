module.exports['build'] = require('./build').build;
module.exports['build:clean'] = require('./build').clean;

module.exports['watch'] = require('./watch').up;
module.exports['watch:down'] = require('./watch').down;

module.exports.default = (cb) => cb(new Error('Oops! Looks like you forgot to specify a task.'));
