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
import { Text } from '@kitten/ui';
import { textStyle } from '@src/components/common';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore (override `onPress` prop)
interface ComponentProps extends TouchableOpacityProps, ListDerivedProps {
  title: string;
  icon: (style: StyleType) => React.ReactElement<ImageProps>;
  onPress: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

class LayoutsListItemComponent extends React.Component<Props> {

  private onPress = () => {
    this.props.onPress(this.props.index);
  };

  private renderIconElement = (style: StyleType): React.ReactElement<ImageProps> => {
    const iconElement: React.ReactElement<ImageProps> = this.props.icon(style);

    return React.cloneElement(iconElement, { style });
  };

  public render(): React.ReactNode {
    const { style, themedStyle, title, ...restProps } = this.props;

    return (
      <TouchableOpacity
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        {this.renderIconElement(themedStyle.icon)}
        <Text
          style={themedStyle.title}
          appearance='dark'
          category='s2'>
          {title}
        </Text>
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
    ...textStyle.subtitle,
  },
}));
