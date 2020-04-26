require('dotenv').config();

module.exports['build'] = require('./tasks/build');

module.exports['deploy-graphql'] = require('./tasks/deploy-graphql');

module.exports['watch-app'] = require('./tasks/watch').watchApp;
module.exports['watch-sanity'] = require('./tasks/watch').watchSanity;
module.exports['watch-yorha'] = require('./tasks/watch').watchYorha;

module.exports.default = (cb) => {
    console.log('No task specified.');
    cb();
};
