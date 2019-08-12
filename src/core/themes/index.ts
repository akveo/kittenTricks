import {
  dark,
  light,
} from '@eva-design/eva';
import { default as appTheme } from './appTheme.json';
import { ThemeType } from '@kitten/theme';

interface ThemeRegistry {
  ['Eva Light']: ThemeType;
  ['Eva Dark']: ThemeType;
  ['App Theme']: ThemeType;
}

export type ThemeKey = keyof ThemeRegistry;

export const themes: ThemeRegistry = {
  'Eva Light': light,
  'Eva Dark': dark,
  'App Theme': appTheme,
};

export {
  ThemeContext,
  ThemeContextType,
} from './themeContext';

export { ThemeStore } from './theme.store';
export { ThemeService } from './theme.service';
