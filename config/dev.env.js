const path = require('path');

module.exports = {
  ENV: 'dev',
  KITTEN_PATH: path.resolve(__dirname, '../../react-native-ui-kitten'),
  MAPPING_PATH: path.resolve(__dirname, '../../eva/packages/mapping/eva'),
  THEME_PATH: path.resolve(__dirname, '../../eva/packages/theme/eva'),
  PROCESSOR_PATH: path.resolve(__dirname, '../../eva/packages/processor/kitten'),
};
