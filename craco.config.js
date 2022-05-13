const lessPlugin = require('craco-less');
const AnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const aliasPlugin = require('craco-alias');

const createWebpackPlugins = () => {
  const defaultPlugins = [];
  const addAnalyze = () => {
    const isAnalyze = process.env.ANALYZE;
    if (isAnalyze) {
      defaultPlugins.push(
        new AnalyzerPlugin({
          analyzerMode: 'server',
        }),
      );
    }
  }
  addAnalyze()
  return defaultPlugins;
};
const createPlugins = () => {
  const defaultPlugins = [
    {
      plugin: lessPlugin,
    },
    {
      plugin: aliasPlugin,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ];

  return defaultPlugins;
};
module.exports = () => {
  return {
    webpack: {
      plugins: createWebpackPlugins(),
    },
    plugins: createPlugins(),
  };
};
