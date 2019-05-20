const path = require('path');
const Config = require('./config');

module.exports = {
  resolver: {
    sourceExts: [
      'js',
      'ts',
      'tsx',
    ],
    extraNodeModules: new Proxy({}, {
      get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  transformer: {
    babelTransformerPath: require.resolve('react-native-typescript-transformer'),
  },
  watchFolders: [
    path.resolve(Config.KITTEN_PATH, 'src/framework/theme'),
    path.resolve(Config.KITTEN_PATH, 'src/framework/ui'),
    path.resolve(Config.MAPPING_PATH),
    path.resolve(Config.THEME_PATH),
  ],
};
