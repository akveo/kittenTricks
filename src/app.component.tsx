import React from 'react';
import { Font } from 'expo';
import { default as mapping } from '@eva/eva';
import { theme } from '@eva/theme-eva';
import { ApplicationProvider } from '@kitten/theme';
import { ApplicationLoader } from './core/applicationLoader.component';
import { Router } from './core/navigation/routes';

const fonts: Font.FontMap = {
  'anton-regular': require('./assets/fonts/anton-regular.ttf'),
  'opensans-semibold': require('./assets/fonts/opensans-semibold.ttf'),
  'opensans-bold': require('./assets/fonts/opensans-bold.ttf'),
  'opensans-extrabold': require('./assets/fonts/opensans-extra-bold.ttf'),
  'opensans-light': require('./assets/fonts/opensans-light.ttf'),
  'opensans-regular': require('./assets/fonts/opensans-regular.ttf'),
};

export default class App extends React.Component {


  public render(): React.ReactNode {
    return (
      <ApplicationLoader fonts={fonts}>
        <ApplicationProvider
          mapping={mapping}
          theme={theme}>
          <Router/>
        </ApplicationProvider>
      </ApplicationLoader>
    );
  }
}
