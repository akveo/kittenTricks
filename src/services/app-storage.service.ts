import { AsyncStorage, YellowBox } from 'react-native';
import { Mapping, Theme } from './theme.service';

const MAPPING_KEY: string = 'mapping';
const THEME_KEY: string = 'theme';

export class AppStorage {

  static getMapping = (fallback?: Mapping): Promise<Mapping> => {
    return AsyncStorage.getItem(MAPPING_KEY).then((mapping: Mapping) => {
      return mapping || fallback;
    });
  };

  static getTheme = (fallback?: Theme): Promise<Theme> => {
    return AsyncStorage.getItem(THEME_KEY).then((theme: Theme) => {
      return theme || fallback;
    });
  };

  static setMapping = (mapping: Mapping): Promise<void> => {
    return AsyncStorage.setItem(MAPPING_KEY, mapping);
  };

  static setTheme = (theme: Theme): Promise<void> => {
    return AsyncStorage.setItem(THEME_KEY, theme);
  };
}

/**
 * In a Bare React Native project you should use
 * https://github.com/react-native-community/async-storage
 *
 * However, Expo runs AsyncStorage exported from react-native.
 * Just to save application bundle size, we still using this one.
 */
YellowBox.ignoreWarnings(['AsyncStorage has been extracted']);
