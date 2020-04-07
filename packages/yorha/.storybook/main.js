function modifyWebpackPublicPath(config) {
    config.output.publicPath = process.env.STORYBOOL_BASE_PATH || config.output.publicPath;
        
    return config;
}

module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions',
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-links'
    ],
    managerWebpack: modifyWebpackPublicPath
};
