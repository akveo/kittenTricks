const path = require('path');

/**
 * Runs on Kitten Tricks CI
 * https://github.com/akveo/kittenTricks/blob/master/.github/workflows/publish-pr.yml
 */
module.exports = {
  ENV: 'ci',
  UI_KITTEN_PACKAGES_PATH: path.resolve(__dirname, '../packages-ci/react-native-ui-kitten/src'),
  EVA_PACKAGES_PATH: path.resolve(__dirname, '../packages-ci/eva/packages'),
};
