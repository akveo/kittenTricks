const path = require('path');
const env = require('./env');

const frameworkAlias = {
  '@eva-design/dss': path.resolve(env.EVA_PACKAGES_PATH, 'dss'),
  '@eva-design/eva': path.resolve(env.EVA_PACKAGES_PATH, 'eva'),
  '@eva-design/material': path.resolve(env.EVA_PACKAGES_PATH, 'material'),
  '@eva-design/processor': path.resolve(env.EVA_PACKAGES_PATH, 'processor'),
  '@ui-kitten/components': path.resolve(env.UI_KITTEN_PACKAGES_PATH, 'components'),
  '@ui-kitten/date-fns': path.resolve(env.UI_KITTEN_PACKAGES_PATH, 'date-fns'),
  '@ui-kitten/eva-icons': path.resolve(env.UI_KITTEN_PACKAGES_PATH, 'eva-icons'),
  '@ui-kitten/moment': path.resolve(env.UI_KITTEN_PACKAGES_PATH, 'moment'),
};

const frameworkInternalAlias = {
  '@kitten/theme': path.resolve(env.UI_KITTEN_PACKAGES_PATH, 'components/theme'),
  '@kitten/ui': path.resolve(env.UI_KITTEN_PACKAGES_PATH, 'components/ui'),
};

const moduleResolverConfig = {
  root: path.resolve('./'),
  alias: {
    ...frameworkAlias,
    ...frameworkInternalAlias,
  },
};

module.exports = function (api) {
  api.cache(true);

  const presets = [
    'babel-preset-expo',
  ];

  const plugins = [
    ['module-resolver', moduleResolverConfig],
  ];

  return { presets, plugins };
};
