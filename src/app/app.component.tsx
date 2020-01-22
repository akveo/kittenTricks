import React from 'react';
import { IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationLoader, Assets } from './app-loader.component';
import { AppIconsPack } from './app-icons-pack';
import { AppProvider } from './app-provider.component';
import { StatusBar } from '../components/status-bar.component';
import { AppNavigator } from '../navigation/app.navigator';

const assets: Assets = {
  fonts: {
    'opensans-regular': require('../assets/fonts/opensans-regular.ttf'),
  },
};

export default (): React.ReactElement => (
  <ApplicationLoader
    assets={assets}
    splash={require('../assets/images/image-splash.png')}>
    <IconRegistry icons={[EvaIconsPack, AppIconsPack]}/>
    <AppProvider initialTheme='light'>
      <StatusBar/>
      <AppNavigator/>
    </AppProvider>
  </ApplicationLoader>
);
