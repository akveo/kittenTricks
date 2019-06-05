import React from 'react';
import { ThemeKey } from '@src/core/themes/index';

export interface ThemeContextType {
  currentTheme: ThemeKey;
  toggleTheme: (theme: ThemeKey) => void;
}

const initialValue: ThemeContextType = {
  currentTheme: 'Eva Light',
  toggleTheme: (theme: ThemeKey) => {},
};

export const ThemeContext: React.Context<ThemeContextType> = React.createContext(initialValue);
