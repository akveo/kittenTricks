import React from 'react';
import { ImageRequireSource } from 'react-native';
import { NavigationState } from 'react-navigation';
import { Font } from 'expo';
import { default as mapping } from 'eva/packages/mapping/eva';
import { theme } from 'eva/packages/theme/eva';
import { ApplicationProvider } from '@kitten/theme';
import {
  ApplicationLoader,
  Assets,
} from './core/applicationLoader.component';
import { Router } from './core/navigation/routes';
import { trackScreenTransition } from '@src/core/utils/analytics';
import { getCurrentStateName } from '@src/core/navigation/routeUtil';

const images: ImageRequireSource[] = [
  require('./assets/images/image-background.png'),
];

const fonts: Font.FontMap = {
  'anton-regular': require('./assets/fonts/anton-regular.ttf'),
  'raleway-regular': require('./assets/fonts/raleway-regular.ttf'),
  'raleway-bold': require('./assets/fonts/raleway-bold.ttf'),
  'raleway-extra-bold': require('./assets/fonts/raleway-extra-bold.ttf'),
  'opensans-semibold': require('./assets/fonts/opensans-semibold.ttf'),
  'opensans-bold': require('./assets/fonts/opensans-bold.ttf'),
  'opensans-extrabold': require('./assets/fonts/opensans-extra-bold.ttf'),
  'opensans-light': require('./assets/fonts/opensans-light.ttf'),
  'opensans-regular': require('./assets/fonts/opensans-regular.ttf'),
};

const assets: Assets = {
  images: images,
  fonts: fonts,
};

export default class App extends React.Component {

  private onTransitionTrackError = (error: any): void => {
    console.warn('Analytics error: ', error.message);
  };

  private onTransitionTrackSuccess = (): void => {
    // console.log('success');
  };

  private onNavigationStateChange = (prevState: NavigationState,
                                     currentState: NavigationState): void => {

    const prevStateName: string = getCurrentStateName(prevState);
    const currentStateName: string = getCurrentStateName(currentState);
    if (prevStateName !== currentStateName) {
      trackScreenTransition(currentStateName)
        .then(this.onTransitionTrackSuccess)
        .catch(this.onTransitionTrackError);
    }
  };

  public render(): React.ReactNode {
    return (
      <ApplicationLoader assets={assets}>
        <ApplicationProvider
          mapping={mapping}
          theme={theme}>
          <Router
            onNavigationStateChange={this.onNavigationStateChange}
          />
        </ApplicationProvider>
      </ApplicationLoader>
    );
  }
}
