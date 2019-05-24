import React from 'react';
import { ImageRequireSource } from 'react-native';
import { NavigationState } from 'react-navigation';
import { Font } from 'expo';
import { default as mapping } from '@eva/eva';
import {
  ApplicationProvider,
  ThemeType,
} from '@kitten/theme';
import {
  light as lightTheme,
  dark as darkTheme,
} from '@eva/themes';
import {
  ApplicationLoader,
  Assets,
} from './core/appLoader/applicationLoader.component';
import { Router } from './core/navigation/routes';
import { trackScreenTransition } from './core/utils/analytics';
import { getCurrentStateName } from './core/navigation/routeUtil';
import {
  ContextType,
  ThemeContext,
} from '@src/core/utils/themeContext';
import { ThemeService } from '@src/core/utils/theme.service';
import { DynamicStatusBar } from '@src/components/common';

const images: ImageRequireSource[] = [
  require('./assets/images/source/image-profile-1.jpg'),
  require('./assets/images/source/image-profile-2.jpg'),
  require('./assets/images/source/image-profile-3.jpg'),
  require('./assets/images/source/image-profile-4.jpg'),
  require('./assets/images/source/image-profile-5.jpg'),
  require('./assets/images/source/image-profile-6.jpg'),
  require('./assets/images/source/image-profile-7.jpg'),
  require('./assets/images/source/image-profile-8.jpg'),
  require('./assets/images/source/image-profile-9.jpg'),
  require('./assets/images/source/image-profile-10.jpg'),
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

interface State {
  currentTheme: 'light' | 'dark';
  theme: ThemeType;
}

export default class App extends React.Component<any, State> {

  public state: State = {
    currentTheme: 'dark',
    theme: {},
  };

  public componentWillMount(): void {
    Promise.all([
      ThemeService.setTheme('light', lightTheme),
      ThemeService.setTheme('dark', darkTheme),
    ])
      .then(() => ThemeService.getTheme('light'))
      .then((theme: ThemeType) => this.setTheme(theme, 'light'));
  }

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

  private onThemeChange = (themeName: 'light' | 'dark'): void => {
    ThemeService.getTheme(themeName)
      .then((theme: ThemeType) => this.setTheme(theme, themeName));
  };

  private setTheme = (theme: ThemeType, themeName: 'light' | 'dark'): void => {
    this.setState({
      theme: theme,
      currentTheme: themeName,
    });
  };

  public render(): React.ReactNode {
    const contextValue: ContextType = {
      currentTheme: this.state.currentTheme,
      toggleTheme: this.onThemeChange,
    };

    return (
      <ThemeContext.Provider value={contextValue}>
        <ApplicationLoader assets={assets}>
          <ApplicationProvider
            mapping={mapping}
            theme={this.state.theme}>
            <DynamicStatusBar currentTheme={this.state.currentTheme}/>
            <Router
              onNavigationStateChange={this.onNavigationStateChange}
            />
          </ApplicationProvider>
        </ApplicationLoader>
      </ThemeContext.Provider>
    );
  }
}
