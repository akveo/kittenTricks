const path = require('path');

module.exports = {
  resolver: {
    extraNodeModules: new Proxy({}, {
      get: (target, name) => path.join(process.cwd(), `node_modules/${name}`)
    }),
    sourceExts: [
      'js',
      'ts',
      'tsx',
    ],
  },
  transformer: {
    babelTransformerPath: require.resolve('react-native-typescript-transformer'),
  },
  projectRoot: path.resolve(__dirname),
  watchFolders: [
    path.resolve(__dirname, './node_modules/@babel'),
    path.resolve(__dirname, '../react-native-ui-kitten/src/framework'),
  ],
};
