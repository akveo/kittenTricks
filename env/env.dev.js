const path = require('path');

module.exports = {
  ENV: 'dev',
  UI_KITTEN_PACKAGES_PATH: path.resolve(__dirname, '../../react-native-ui-kitten/src'),
  EVA_PACKAGES_PATH: path.resolve(__dirname, '../../eva/packages'),
};
