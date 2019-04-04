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
import { Text } from '@src/components/common';

interface ComponentProps {
  hint: React.ReactText;
  value: React.ReactText;
  icon: (style: StyleType) => React.ReactElement<ImageProps>;
}

type Props = ThemedComponentProps & ViewProps & ComponentProps;

class ProfileParameterComponent extends React.Component<Props> {

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

export const ProfileParameter = withStyles(ProfileParameterComponent, (theme: ThemeType) => ({
  container: {
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hintLabel: {
    fontFamily: 'opensans-semibold',
    fontSize: 15,
    color: '#8992A3',
  },
  valueLabel: {
    marginTop: 20,
    fontFamily: 'anton-regular',
    fontSize: 32,
    color: '#0D1C2E',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#3366FF',
  },
}));
