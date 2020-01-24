import { NativeModules } from 'react-native';

export class AppReloadService  {

  static reload = (): void => {
    NativeModules.DevMenu.reload();
  };
}
