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

interface ComponentProps {
  hint: React.ReactText;
  value: React.ReactText;
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
          <Text style={themedStyle.hintLabel}>{hint}</Text>
          {this.renderIconElement(themedStyle.icon)}
        </View>
        <Text style={themedStyle.valueLabel}>{value}</Text>
      </View>
    );
  }
}

export const ProfileParameterCard = withStyles(ProfileParameterCardComponent, (theme: ThemeType) => ({
  container: {
    padding: 24,
    borderRadius: 12,
    backgroundColor: theme['color-white'],
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hintLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 15,
    color: theme['color-basic-600'],
  },
  valueLabel: {
    marginTop: 20,
    fontFamily: 'anton-regular',
    fontSize: 32,
    color: theme['font-primary-color'],
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: theme['color-primary-500'],
  },
}));
