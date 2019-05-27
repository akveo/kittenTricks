import { AsyncStorage } from 'react-native';
import { ThemeKey } from '@src/core/themes';

class ThemeStoreType {

  public setTheme(name: ThemeKey): Promise<void> {
    return AsyncStorage.setItem('theme', name);
  }

  public getTheme(): Promise<ThemeKey> {
    return AsyncStorage.getItem('theme') as Promise<ThemeKey>;
  }
}

export const ThemeStore: ThemeStoreType = new ThemeStoreType();
