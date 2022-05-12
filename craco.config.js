const lessPlugin = require('craco-less');
const AnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
  const defaultPlugins = [lessPlugin];

  return defaultPlugins.map(plugin => {
    return {
      plugin,
    };
  });
};
module.exports = () => {
  return {
    webpack: {
      plugins: createWebpackPlugins(),
    },
    plugins: createPlugins(),
  };
};
