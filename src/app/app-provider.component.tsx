import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { mapping } from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { appThemes } from './app-themes';
import { default as appMapping } from './app-mapping.json';
import { Theme, Theming } from '../services/theme.service';

export interface AppProviderProps {
  initialTheme?: Theme;
  children?: React.ReactNode;
}

const DEFAULT_PROPS: AppProviderProps = {
  initialTheme: 'light',
};

export const AppProvider = (props: AppProviderProps): React.ReactElement => {

  const { initialTheme, children } = { ...DEFAULT_PROPS, ...props };
  const [themeContext, theme] = Theming.useTheming(appThemes, initialTheme);

  return (
    <AppearanceProvider>
      <Theming.Context.Provider value={themeContext}>
        <ApplicationProvider
          mapping={mapping}
          theme={theme}
          // @ts-ignore
          customMapping={appMapping}>
          <SafeAreaProvider>
            {children}
          </SafeAreaProvider>
        </ApplicationProvider>
      </Theming.Context.Provider>
    </AppearanceProvider>
  );
};
