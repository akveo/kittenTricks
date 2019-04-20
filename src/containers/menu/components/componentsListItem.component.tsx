import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@src/components/common';

interface ComponentProps {
  title: string;
  children: React.ReactElement<any>;
}

type Props = ThemedComponentProps & TouchableOpacityProps & ComponentProps;

class ComponentsListItemComponent extends React.Component<Props> {

  public render(): React.ReactNode {
    const { style, themedStyle, title, children, ...restProps } = this.props;

    return (
      <TouchableOpacity
        style={[themedStyle.container, style]}
        activeOpacity={0.65}
        {...restProps}>
        {children}
        <Text style={themedStyle.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export const ComponentsListItem = withStyles(ComponentsListItemComponent, (theme: ThemeType) => ({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 4,
    borderColor: theme['color-basic-300'],
  },
  icon: {
    width: 48,
    height: 48,
    tintColor: theme['color-primary-500'],
  },
  title: {
    fontFamily: 'opensans-semibold',
    fontSize: 13,
    lineHeight: 24,
    color: theme['font-primary-color'],
  },
}));
