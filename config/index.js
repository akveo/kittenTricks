const path = require('path');

module.exports = {
  ENV: 'prod',
  KITTEN_PATH: path.resolve(__dirname, '../node_modules/react-native-ui-kitten'),
  MAPPING_PATH: path.resolve(__dirname, '../node_modules/@eva-design/eva'),
  PROCESSOR_PATH: path.resolve(__dirname, '../node_modules/@eva-design/processor'),
};
