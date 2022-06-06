const lessPlugin = require('craco-less');
const AnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const aliasPlugin = require('craco-alias');
const swcPlugin = require('craco-swc');
const DayjsPlugin = require('antd-dayjs-webpack-plugin');
const createWebpackPlugins = () => {
  const defaultPlugins = [new DayjsPlugin()];

  const addAnalyze = () => {
    const isAnalyze = process.env.ANALYZE;
    if (isAnalyze) {
      defaultPlugins.push(
        new AnalyzerPlugin({
          analyzerMode: 'server',
        }),
      );
    }
  };
  addAnalyze();
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
    // 加快打包速度
    {
      plugin: {
        ...swcPlugin,
        // 覆盖与eslint冲突的规则
        overrideCracoConfig: ({ cracoConfig }) => {
          if (typeof cracoConfig.eslint.enable !== 'undefined') {
            cracoConfig.disableEslint = !cracoConfig.eslint.enable;
          }
          delete cracoConfig.eslint;
          return cracoConfig;
        },
        overrideWebpackConfig: ({ webpackConfig, cracoConfig }) => {
          if (
            typeof cracoConfig.disableEslint !== 'undefined' &&
            cracoConfig.disableEslint === true
          ) {
            webpackConfig.plugins = webpackConfig.plugins.filter(
              instance => instance.constructor.name !== 'ESLintWebpackPlugin',
            );
          }
          return webpackConfig;
        },
      },
    },
  ];

  return defaultPlugins;
};
module.exports = () => {
  return {
    webpack: {
      configure: {
        cache: true,
      },
      plugins: createWebpackPlugins(),
    },
    plugins: createPlugins(),
    babel: {
      // 支持装饰器模式语法
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
    },
  };
};
