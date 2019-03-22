// TODO: now @kitten/... linked to the local react-native-ui-kitten project
import React from 'react';
import {
  ThemeMappingType,
  ThemeStyleType,
} from 'eva/packages/types';
import {
  ApplicationProvider,
  ThemeType,
} from '@kitten/theme';
import {
  Button,
} from '@kitten/ui';
import {
  mapping,
  style,
} from 'eva/packages/mapping-kitten/eva';
import { theme } from 'eva/packages/theme/eva';
import { Router } from './core/navigation/routes';

interface State {
  mapping: ThemeMappingType;
  styles: ThemeStyleType;
  theme: ThemeType;
}

export default class App extends React.Component<{}, State> {

  public state: State = {
    mapping: mapping,
    styles: style,
    theme: theme,
  };

  public render(): React.ReactNode {
    return (
      <ApplicationProvider
        styles={this.state.styles}
        theme={this.state.theme}
        mapping={this.state.mapping}>
        <Router/>
      </ApplicationProvider>
    );
  }
}
