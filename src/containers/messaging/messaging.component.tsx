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

class Messaging extends React.Component<ThemedComponentProps> {

  public render(): React.ReactNode {
    return (
      <View style={this.props.themedStyle.container}>
        <Text>Messaging Component</Text>
      </View>
    );
  }
}

export const MessagingComponent = withStyles(Messaging, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
