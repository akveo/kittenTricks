import React from 'react';
import {
  ImageProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@src/components/common';

interface ComponentProps {
  title: string;
  icon: (style: StyleType) => React.ReactElement<ImageProps>;
}

type Props = ThemedComponentProps & TouchableOpacityProps & ComponentProps;

class LayoutsListItemComponent extends React.Component<Props> {

  private renderIconElement = (style: StyleType): React.ReactElement<ImageProps> => {
    const iconElement: React.ReactElement<ImageProps> = this.props.icon(style);

    return React.cloneElement(iconElement, { style });
  };

  public render(): React.ReactNode {
    const { style, themedStyle, title, ...restProps } = this.props;

    return (
      <TouchableOpacity
        style={[themedStyle.container, style]}
        activeOpacity={0.65}
        {...restProps}>
        {this.renderIconElement(themedStyle.icon)}
        <Text style={themedStyle.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export const LayoutsListItem = withStyles(LayoutsListItemComponent, (theme: ThemeType) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme['color-basic-300'],
  },
  icon: {
    width: 48,
    height: 48,
    tintColor: theme['color-primary-500'],
  },
  title: {
    marginTop: 20,
    fontFamily: 'opensans-semibold',
    color: theme['font-primary-color'],
  },
}));
