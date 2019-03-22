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

class Social extends React.Component<ThemedComponentProps> {

  public render(): React.ReactNode {
    return (
      <View style={this.props.themedStyle.container}>
        <Text>Social Component</Text>
      </View>
    );
  }
}

export const SocialComponent = withStyles(Social, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
