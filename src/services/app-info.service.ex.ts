import Constants from 'expo-constants';
import { Platform } from 'react-native';

export class AppInfoService {

  static getVersion = (): string => {
    return Constants.expoConfig.version;
  };

  static getBuildNumber = (): string => {
    return Platform.select({
      ios: Constants.expoConfig.ios.buildNumber,
      android: Constants.expoConfig.android.versionCode.toString(),
      web: '',
    });
  };
}
