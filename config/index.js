const path = require('path');

module.exports = {
  ENV: 'dev',
  KITTEN_PATH: path.resolve(__dirname, '../../react-native-ui-kitten/src/framework'),
  MAPPING_PATH: path.resolve(__dirname, '../../eva/packages/eva'),
  PROCESSOR_PATH: path.resolve(__dirname, '../../eva/packages/processor'),
};
