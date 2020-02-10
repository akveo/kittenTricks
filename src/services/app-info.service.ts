import DeviceInfo from 'react-native-device-info';

export class AppInfoService {

  static getVersion = (): string => {
    return DeviceInfo.getVersion();
  };

  static getBuildNumber = (): string => {
    return DeviceInfo.getBuildNumber();
  };
}
