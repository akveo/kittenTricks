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

class Dashboards extends React.Component<ThemedComponentProps> {

  public render(): React.ReactNode {
    return (
      <View style={this.props.themedStyle.container}>
        <Text>Dashboards Component</Text>
      </View>
    );
  }
}

export const DashboardsComponent = withStyles(Dashboards, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
}));
