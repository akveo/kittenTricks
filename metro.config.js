const path = require('path');

const kittenPath = path.resolve(__dirname, '../react-native-ui-kitten');
const evaPath = path.resolve(__dirname, '../eva/packages');

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
    path.resolve(kittenPath, 'src/framework/theme'),
    path.resolve(kittenPath, 'src/framework/ui'),
    path.resolve(evaPath, 'mapping/eva'),
    path.resolve(evaPath, 'theme/eva'),
  ],
};

const environment = {
  prod: productionConfig,
  dev: developmentConfig,
};

module.exports = environment.dev;
