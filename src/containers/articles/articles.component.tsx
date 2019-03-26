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

class Articles extends React.Component<ThemedComponentProps> {

  public render(): React.ReactNode {
    return (
      <View style={this.props.themedStyle.container}>
        <Text>Articles Component</Text>
      </View>
    );
  }
}

export const ArticlesComponent = withStyles(Articles, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
