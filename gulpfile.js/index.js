require('dotenv').config();

module.exports['build'] = require('./build');

module.exports.default = (cb) => {
    console.log('No task specified.');
    cb();
};
