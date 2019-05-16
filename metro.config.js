const path = require('path');

const frameworkLocalPath = '../react-native-ui-kitten';

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

    // DEV purposes.
    // Uncomment line below to watch framework changes.

    // path.resolve(__dirname, frameworkLocalPath, 'src/framework'),
  ],
};
