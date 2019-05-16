const path = require('path');

// TODO: Resolve `transform[stderr]: Could not resolve` command-line warnings.
// TODO: Reproducible when starting with clearing cache (npm start -- -c)
const moduleResolverConfig = {
  root: path.resolve('./'),
  alias: {
    '@kitten/theme': path.resolve('./node_modules/react-native-ui-kitten'),
    '@kitten/ui': path.resolve('./node_modules/react-native-ui-kitten'),
  },
};

module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      'babel-preset-expo',
    ],
    env: {
      development: {
        plugins: [
          '@babel/transform-react-jsx-source',
        ],
      },
    },
    plugins: [
      [
        'module-resolver',
        moduleResolverConfig,
      ],
    ],
  };
};
