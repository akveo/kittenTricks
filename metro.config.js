const path = require('path');

const frameworkPath = path.resolve(__dirname, '../react-native-ui-kitten');

const productionConfig = {
  resolver: {
    sourceExts: [
      'js',
      'ts',
      'tsx',
    ],
  },
  transformer: {
    babelTransformerPath: require.resolve('react-native-typescript-transformer'),
  },
};

const developmentConfig = {
  resolver: {
    ...productionConfig.resolver,
    extraNodeModules: new Proxy({}, {
      get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  transformer: {
    ...productionConfig.transformer,
  },
  watchFolders: [
    path.resolve(frameworkPath, 'src/framework/theme'),
    path.resolve(frameworkPath, 'src/framework/ui'),
  ],
};

const environment = {
  prod: productionConfig,
  dev: developmentConfig,
};

module.exports = environment.dev;
