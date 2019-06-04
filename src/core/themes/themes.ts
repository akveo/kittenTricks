import {
  dark,
  light,
} from '@eva-design/eva';
import { ThemeType } from '@kitten/theme';
import { default as appTheme } from './appTheme.json';

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
