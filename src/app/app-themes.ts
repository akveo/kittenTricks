import * as eva from '@eva-design/eva';
import * as material from '@eva-design/material';
import { default as appTheme } from './app-theme.json';
import { Mapping, Theme } from '../services/theme.service';

/*
 * Creates themes so that brand theme (orange) will be used only when mapping is set to `eva`
 */
export const appThemes: Record<Mapping, Record<Theme, any>> = {
  eva: {
    light: eva.light,
    dark: eva.dark,
    brand: {
      light: appTheme,
      dark: appTheme,
    },
  },
  material: {
    light: material.light,
    dark: material.dark,
    brand: {
      light: {},
      dark: {},
    },
  },
};
