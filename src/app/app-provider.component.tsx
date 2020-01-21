import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { mapping as evaMapping } from '@eva-design/eva';
import { mapping as materialMapping } from '@eva-design/material';
import { ApplicationProvider, ApplicationProviderProps } from '@ui-kitten/components';
import { appThemes } from './app-themes';
import { appMappings } from './app-mappings';
import { Mapping, Theme, Theming } from '../services/theme.service';

export interface AppProviderProps {
  mapping?: Mapping;
  initialTheme?: Theme;
  children?: React.ReactNode;
}

const DEFAULT_PROPS: AppProviderProps = {
  mapping: 'eva',
  initialTheme: 'light',
};

const mappings: Record<string, any> = {
  eva: evaMapping,
  material: materialMapping,
};

export const AppProvider = (props: AppProviderProps): React.ReactElement => {

  const { mapping, initialTheme, children } = { ...DEFAULT_PROPS, ...props };
  const [themeContext, theme] = Theming.useTheming(appThemes, 'material', initialTheme);

  const appConfig: ApplicationProviderProps = {
    mapping: mappings[themeContext.currentMapping],
    theme: theme,
    // @ts-ignore
    customMapping: appMappings[mapping],
  };

  return (
    <AppearanceProvider>
      <Theming.Context.Provider value={themeContext}>
        <ApplicationProvider {...appConfig}>
          <SafeAreaProvider>
            {children}
          </SafeAreaProvider>
        </ApplicationProvider>
      </Theming.Context.Provider>
    </AppearanceProvider>
  );
};
