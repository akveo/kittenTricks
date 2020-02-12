const path = require('path');

/**
 * Runs on UI Kitten CI
 * https://github.com/akveo/react-native-ui-kitten/blob/master/.github/workflows/publish-kitten-tricks.yml
 */
module.exports = {
  ENV: 'ci-ui-kitten',
  UI_KITTEN_PACKAGES_PATH: path.resolve(__dirname, '../../../src'),
  EVA_PACKAGES_PATH: path.resolve(__dirname, '../../eva/packages'),
};
