const merge = require('deepmerge');

function getPackagesConfig(configNames = []) {
    const configsToMerge = configNames.map((name) => require(`./${name}`));
    
    return merge.all([
        require('./base'),
        ...configsToMerge
    ]);
}

module.exports = {
    getPackagesConfig
};
