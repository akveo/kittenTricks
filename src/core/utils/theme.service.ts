import { AsyncStorage } from 'react-native';
import { ThemeType } from '@kitten/theme';

class ThemeServiceType {

  public getAllThemeNames(): Promise<string[]> {
    return AsyncStorage.getAllKeys();
  }

  public setTheme(name: string, theme: ThemeType): Promise<void> {
    return AsyncStorage.setItem(name, JSON.stringify(theme));
  }

  public getTheme(name: string): Promise<ThemeType> {
    return AsyncStorage.getItem(name)
      .then((theme: string) => JSON.parse(theme));
  }
}

export const ThemeService: ThemeServiceType = new ThemeServiceType();
