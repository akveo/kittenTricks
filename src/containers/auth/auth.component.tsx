import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';

class Auth extends React.Component<ThemedComponentProps> {

  public render(): React.ReactNode {
    return (
      <View style={this.props.themedStyle.container}>
        <Text>Auth Component</Text>
      </View>
    );
  }
}

export const AuthComponent = withStyles(Auth, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
