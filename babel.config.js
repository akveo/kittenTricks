const path = require('path');

// FIXME: Resolve `transform[stderr]: Could not resolve` command-line warnings.
// FIXME: Reproducible when starting with clearing cache (npm start -- -c)
//
// TODO: Framework path aliasing even not needed here. Replace?
// TODO: Replace nested package.json-s with aliases

const productionConfig = {
  frameworkPath: path.resolve('./node_modules/react-native-ui-kitten'),
};

const developmentConfig = {
  frameworkPath: path.resolve(__dirname, '../react-native-ui-kitten'),
};

const environment = {
  prod: productionConfig,
  dev: developmentConfig,
};

function moduleResolverConfig (env) {
  return {
    root: path.resolve('./'),
    alias: {
      '@kitten/theme': path.resolve(env.frameworkPath, 'src/framework/theme'),
      '@kitten/ui': path.resolve(env.frameworkPath, 'src/framework/ui'),
    },
  };
}

module.exports = function (api) {
  api.cache(true);

  const presets = [
    'babel-preset-expo',
  ];

  const plugins = [
    ['module-resolver', moduleResolverConfig(environment.dev)],
  ];

  const devPlugins = [
    '@babel/transform-react-jsx-source',
  ];

  const env = {
    development: {
      plugins: devPlugins,
    },
  };

  return { presets, plugins, env };
};
