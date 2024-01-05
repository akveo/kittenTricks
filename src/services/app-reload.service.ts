import { DevSettings } from 'react-native';

export class AppReloadService  {

  static reload = (): void => {
    DevSettings.reload();
  };
}
