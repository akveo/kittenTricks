const path = require('path');
const env = require('./env');
const MetroConfig = require('@expo/metro-config');

const defaultConfig = MetroConfig.getDefaultConfig(__dirname);

const appModules = [
  path.resolve(env.EVA_PACKAGES_PATH, 'dss'),
  path.resolve(env.EVA_PACKAGES_PATH, 'eva'),
  path.resolve(env.EVA_PACKAGES_PATH, 'material'),
  path.resolve(env.EVA_PACKAGES_PATH, 'processor'),
  path.resolve(env.UI_KITTEN_PACKAGES_PATH, 'components'),
  path.resolve(env.UI_KITTEN_PACKAGES_PATH, 'date-fns'),
  path.resolve(env.UI_KITTEN_PACKAGES_PATH, 'eva-icons'),
  path.resolve(env.UI_KITTEN_PACKAGES_PATH, 'moment'),
];

const extraNodeModules = {
  '@babel/runtime': path.resolve(__dirname, './node_modules/@babel/runtime'),
  'react': path.resolve(__dirname, './node_modules/react'),
  'react-native': path.resolve(__dirname, './node_modules/react-native'),

  // @ui-kitten/components
  'fecha': path.resolve(__dirname, './node_modules/fecha'),
  'hoist-non-react-statics': path.resolve(__dirname, './node_modules/hoist-non-react-statics'),
  'lodash.merge': path.resolve(__dirname, './node_modules/lodash.merge'),
  'react-native-svg': path.resolve(__dirname, './node_modules/react-native-svg'),

  // @ui-kitten/date-fns
  'date-fns': path.resolve(__dirname, './node_modules/date-fns'),

  // @ui-kitten/eva-icons
  'react-native-eva-icons': path.resolve(__dirname, './node_modules/react-native-eva-icons'),

  // @ui-kitten/moment
  'moment': path.resolve(__dirname, './node_modules/moment'),
  'react-is': path.resolve(__dirname, './node_modules/react-is'),
};

module.exports = {
  ...defaultConfig,
  projectRoot: path.resolve(__dirname),
  resolver: {
    ...defaultConfig.resolver,
    extraNodeModules: {
      ...defaultConfig.extraNodeModules,
      ...extraNodeModules,
    }
  },
  watchFolders: [
    ...defaultConfig.watchFolders,
    ...appModules,
  ],
};
