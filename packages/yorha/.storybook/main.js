function customizeWebpack(config) {
    config.output.publicPath = process.env.STORYBOOK_BASE_PATH || config.output.publicPath;

    config.module.rules.push({
        test: /\.js$/,
        loader: 'string-replace-loader',
        options: {
            search: 'iframe.html',
            replace: `${config.output.publicPath}/iframe.html`,
            flags: 'g'
        }
    });

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
    managerWebpack: customizeWebpack,
    webpackFinal: customizeWebpack
};
