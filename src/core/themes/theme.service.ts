import { ThemeKey } from '@src/core/themes';

export class ThemeService {

  public static select = <T>(config: { [key in ThemeKey | 'default']?: T },
                             currentTheme: ThemeKey): T | null => {

    if (config[currentTheme]) {
      return config[currentTheme];
    } else if (config.default) {
      return config.default;
    } else {
      return null;
    }
  };

}
