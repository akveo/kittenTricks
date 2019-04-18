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
import { Text } from '@src/components/common';

interface ComponentProps {
  description: React.ReactText;
  value: React.ReactText;
}

export type MovieDetailListItemProps = ThemedComponentProps & ViewProps & ComponentProps;

class MovieDetailListItemComponent extends React.Component<MovieDetailListItemProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, description, value, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <Text style={themedStyle.descriptionLabel}>{description}</Text>
        <Text style={themedStyle.valueLabel}>{value}</Text>
      </View>
    );
  }
}

export const MovieDetailListItem = withStyles(MovieDetailListItemComponent, (theme: ThemeType) => ({
  container: {
    alignItems: 'center',
  },
  descriptionLabel: {
    fontFamily: 'opensans-bold',
    color: theme['color-basic-600'],
    fontSize: 13,
    lineHeight: 24,
  },
  valueLabel: {
    fontFamily: 'opensans-bold',
    color: theme['color-black'],
    fontSize: 15,
    lineHeight: 24,
  },
}));
