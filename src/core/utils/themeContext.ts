import React from 'react';
import { CurrentTheme } from '@src/core/model';

export interface ContextType {
  currentTheme: CurrentTheme;
  toggleTheme: (theme: string) => void;
}

export const ThemeContext: React.Context<ContextType> = React.createContext({
  currentTheme: CurrentTheme.light,
  toggleTheme: (theme: string) => {},
});
