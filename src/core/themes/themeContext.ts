import React from 'react';
import { ThemeKey } from '@src/core/themes/index';

export interface ContextType {
  currentTheme: ThemeKey;
  toggleTheme: (theme: string) => void;
}

export const ThemeContext: React.Context<ContextType> = React.createContext({
  currentTheme: 'Eva Light',
  toggleTheme: (theme: string) => {},
});
