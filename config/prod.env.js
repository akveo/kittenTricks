const path = require('path');

module.exports = {
  ENV: 'prod',
  KITTEN_PATH: path.resolve(__dirname, '../node_modules/react-native-ui-kitten'),
  MAPPING_PATH: path.resolve(__dirname, '../node_modules/@eva/eva'),
  THEME_PATH: path.resolve(__dirname, '../node_modules/@eva/themes'),
  PROCESSOR_PATH: path.resolve(__dirname, '../node_modules/@eva/processor-kitten'),
};
