import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

interface ComponentProps {
  children?: React.ReactNode;
}

export type ActivityBarProps = ThemedComponentProps & ViewProps & ComponentProps;

class ActivityBarComponent extends React.Component<ActivityBarProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, children, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        {children}
      </View>
    );
  }
}

export const ActivityBar = withStyles(ActivityBarComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
