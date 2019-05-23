import React from 'react';
import {
  ImageProps,
  View,
  ViewProps,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  hint: string;
  value: string;
  icon: (style: StyleType) => React.ReactElement<ImageProps>;
}

export type ProfileParameterCardProps = ThemedComponentProps & ViewProps & ComponentProps;

class ProfileParameterCardComponent extends React.Component<ProfileParameterCardProps> {

  private renderIconElement = (style: StyleType): React.ReactElement<ImageProps> => {
    const iconElement: React.ReactElement<ImageProps> = this.props.icon(style);

    return React.cloneElement(iconElement, {
      style: [style, iconElement.props.style],
    });
  };

  public render(): React.ReactNode {
    const { style, themedStyle, hint, value, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <View style={themedStyle.topContainer}>
          <Text
            style={themedStyle.hintLabel}
            appearance='hint'>
            {hint}
          </Text>
          {this.renderIconElement(themedStyle.icon)}
        </View>
        <Text
          style={themedStyle.valueLabel}
          category='h5'>
          {value}
        </Text>
      </View>
    );
  }
}

export const ProfileParameterCard = withStyles(ProfileParameterCardComponent, (theme: ThemeType) => ({
  container: {
    padding: 24,
    borderRadius: 12,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hintLabel: textStyle.caption2,
  valueLabel: {
    marginTop: 20,
    ...textStyle.headline,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: theme['color-primary-default'],
  },
}));
