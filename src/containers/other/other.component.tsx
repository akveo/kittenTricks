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

class Other extends React.Component<ThemedComponentProps> {

  public render(): React.ReactNode {

    return (
      <View style={this.props.themedStyle.container}>
        <Text>Other Component</Text>
      </View>
    );
  }
}

export const OtherComponent = withStyles(Other, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
