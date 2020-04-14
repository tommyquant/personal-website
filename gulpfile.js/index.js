module.exports['build'] = require('./build');
module.exports['watch-app'] = require('./watch').watchApp;
module.exports['watch-sanity'] = require('./watch').watchSanity;
module.exports['watch-yorha'] = require('./watch').watchYorha;

module.exports.default = (cb) => {
    console.log('No task specified.');
    cb();
};
