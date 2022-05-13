const lessPlugin = require('craco-less');
const AnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const aliasPlugin = require('craco-alias');

const createWebpackPlugins = () => {
  const isAnalyze = process.env.ANALYZE;
  const defaultPlugins = [];

  if (isAnalyze) {
    defaultPlugins.push(
      new AnalyzerPlugin({
        analyzerMode: 'server',
      }),
    );
  }
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
