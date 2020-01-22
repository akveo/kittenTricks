import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApplicationProvider } from '@ui-kitten/components';
import { appMappings, appThemes } from './app-theming';
import { Theming } from '../services/theme.service';
import { AppConfig } from '../model/app-config.model';

export interface AppProviderProps {
  config: AppConfig;
  children?: React.ReactNode;
}

export const AppProvider = (props: AppProviderProps): React.ReactElement => {

  const [mappingContext, mappingProps] = Theming.useMapping(
    appMappings,
    props.config.mapping,
  );

  const [themeContext, themeProp] = Theming.useTheming(
    appThemes,
    mappingContext.currentMapping,
    'light',
  );

  return (
    <AppearanceProvider>
      <Theming.MappingContext.Provider value={mappingContext}>
        <Theming.ThemeContext.Provider value={themeContext}>
          <ApplicationProvider {...mappingProps} theme={themeProp}>
            <SafeAreaProvider>
              {props.children}
            </SafeAreaProvider>
          </ApplicationProvider>
        </Theming.ThemeContext.Provider>
      </Theming.MappingContext.Provider>
    </AppearanceProvider>
  );
};
