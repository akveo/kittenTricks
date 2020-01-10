import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { mapping } from '@eva-design/eva';
import { ApplicationProvider, ApplicationProviderProps, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationLoader, Assets } from './app-loader.component';
import { default as appMapping } from './app-mapping.json';
import { appThemes } from './app-themes';
import { AppIconsPack } from './app-icons-pack';
import { StatusBar } from '../components/status-bar.component';
import { AppNavigator } from '../navigation/app.navigator';
import { Theming } from '../services/theme.service';

const assets: Assets = {
  fonts: {
    'opensans-regular': require('../assets/fonts/opensans-regular.ttf'),
  },
};

export default (): React.ReactElement => {

  const [themeContext, theme] = Theming.useTheming(appThemes, 'light');

  const appConfig: ApplicationProviderProps = {
    mapping: mapping,
    theme: theme,
    // @ts-ignore
    customMapping: appMapping,
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
