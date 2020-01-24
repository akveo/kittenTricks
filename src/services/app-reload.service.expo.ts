import { Updates } from 'expo';

export class AppReloadService  {

  static reload = (): void => {
    Updates.reload();
  };
}
