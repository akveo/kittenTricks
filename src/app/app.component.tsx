import React from 'react';
import { IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationLoader, Assets } from './app-loader.component';
import { AppIconsPack } from './app-icons-pack';
import { AppProvider } from './app-provider.component';
import { StatusBar } from '../components/status-bar.component';
import { AppNavigator } from '../navigation/app.navigator';
import { AppConfig } from '../model/app-config.model';

const assets: Assets = {
  fonts: {
    'opensans-regular': require('../assets/fonts/opensans-regular.ttf'),
    'roboto-regular': require('../assets/fonts/roboto-regular.ttf'),
  },
};

export default (): React.ReactElement => {

  const renderApp = (config: AppConfig): React.ReactElement => (
    <React.Fragment>
      <IconRegistry icons={[EvaIconsPack, AppIconsPack]}/>
      <AppProvider config={config}>
        <StatusBar/>
        <AppNavigator/>
      </AppProvider>
    </React.Fragment>
  );

  return (
    <ApplicationLoader
      assets={assets}
      initialConfig={{ mapping: 'eva' }}
      splash={require('../assets/images/image-splash.png')}>
      {renderApp}
    </ApplicationLoader>
  );
};
