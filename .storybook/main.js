const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async webpackConfig => {
    // 支持less
    const { loadCracoConfig } = require('@craco/craco/lib/config');
    const { getCraPaths } = require('@craco/craco/lib/cra');
    const context = { env: process.env.NODE_ENV };
    const cracoConfig = loadCracoConfig(context);
    context.paths = getCraPaths(cracoConfig);
    const { overrideWebpackConfig } = require('craco-less');
    // 支持 alias
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      '@': path.resolve(__dirname, '../src/'),
    };
    overrideWebpackConfig({
      context,
      webpackConfig,
    });

    return webpackConfig;
  },
};
