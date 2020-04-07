function modifyWebpackPublicPath(config) {
    config.output.publicPath = '/storybook';
        
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
