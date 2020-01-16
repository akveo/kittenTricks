import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { mapping as evaMapping } from '@eva-design/eva';
import { mapping as materialMapping } from '@eva-design/material';
import { ApplicationProvider, ApplicationProviderProps, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationLoader, Assets } from './app-loader.component';
import { appThemes } from './app-themes';
import { appMappings } from './app-mappings';
import { AppIconsPack } from './app-icons-pack';
import { StatusBar } from '../components/status-bar.component';
import { AppNavigator } from '../navigation/app.navigator';
import { Mapping, Theming } from '../services/theme.service';

const assets: Assets = {
  fonts: {
    'opensans-regular': require('../assets/fonts/opensans-regular.ttf'),
    'roboto-regular': require('../assets/fonts/roboto-regular.ttf'),
  },
};

const mappings: Record<string, any> = {
  eva: evaMapping,
  material: materialMapping,
};

/*
 * Runtime mapping switch is not currently supported, so it can be used here
 * Can be `eva` or `material`
 */
const mapping: Mapping = 'material';

export default (): React.ReactElement => {

  const [themeContext, theme] = Theming.useTheming(appThemes, mapping, 'light');

  const appConfig: ApplicationProviderProps = {
    mapping: mappings[themeContext.currentMapping],
    theme: theme,
    // @ts-ignore
    customMapping: appMappings[mapping],
  };

  return (
    <ApplicationLoader
      assets={assets}
      splash={require('../assets/images/image-splash.png')}>
      <IconRegistry icons={[EvaIconsPack, AppIconsPack]}/>
      <Theming.Context.Provider value={themeContext}>
        <ApplicationProvider {...appConfig}>
          <SafeAreaProvider>
            <StatusBar/>
            <AppNavigator/>
          </SafeAreaProvider>
        </ApplicationProvider>
      </Theming.Context.Provider>
    </ApplicationLoader>
  );
};
