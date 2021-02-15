const path = require('path');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

const extraModules = {
  '@babel/runtime': path.resolve(__dirname, './node_modules/@babel/runtime'),
  'react': path.resolve(__dirname, './node_modules/react'),
  'react-native': path.resolve(__dirname, './node_modules/react-native'),
  'react-native-web': path.resolve(__dirname, './node_modules/react-native-web'),
};

const babelLoaderRules = {
  test: /\.(js|ts|tsx)$/,
  loader: 'babel-loader',
  exclude: /node_modules/,
};

module.exports = async function (env, argv) {

  // https://github.com/akveo/react-native-ui-kitten/issues/996
  const config = await createExpoWebpackConfigAsync({
    ...env,
    babel: {
      dangerouslyAddModulePathsToTranspile: ['@ui-kitten/components']
    }
  }, argv);

  config.module.rules = [
    ...config.module.rules,
    babelLoaderRules,
  ];

  config.module.rules.push({
    test: /\.(js|ts|tsx)$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    ...extraModules,
  };

  config.resolve.plugins = config.resolve.plugins.filter(plugin => {
    return !(plugin instanceof ModuleScopePlugin);
  });

  config.output = {
    ...config.output,
    publicPath: '',
  };

  return config;
};
