import {
  dark,
  light,
} from '@eva/themes';
import { ThemeType } from '@kitten/theme';

interface ThemeRegistry {
  ['Eva Light']: ThemeType;
  ['Eva Dark']: ThemeType;
}

export type ThemeKey = keyof ThemeRegistry;

export const themes: ThemeRegistry = {
  'Eva Light': light,
  'Eva Dark': dark,
};

export {
  ThemeContext,
  ContextType,
} from './themeContext';

export { ThemeStore } from './theme.store';
export { ThemeService } from './theme.service';
