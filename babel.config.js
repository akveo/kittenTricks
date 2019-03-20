module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'module:metro-react-native-babel-preset',
      'babel-preset-expo'
    ],
    env: {
      development: {
        plugins: [
          '@babel/transform-react-jsx-source',
        ]
      }
    }
  };
};
