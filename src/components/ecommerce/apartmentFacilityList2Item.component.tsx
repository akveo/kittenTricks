import React from 'react';
import { ImageProps } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  TextIcon,
  TextIconProps,
} from '@src/components/common';
import { IconElement, IconProps } from '@kitten/ui';

// @ts-ignore (`icon` prop override)
interface ComponentProps extends TextIconProps {
  icon: (style: IconProps<ImageProps>) => IconElement<ImageProps>;
}

export type ApartmentFacilityList2ItemProps = ThemedComponentProps & ComponentProps;

class ApartmentFacilityList2ItemComponent extends React.Component<ApartmentFacilityList2ItemProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, iconStyle, textStyle, icon, ...restProps } = this.props;

    return (
      <TextIcon
        {...restProps}
        style={[themedStyle.container, style]}
        textStyle={[themedStyle.text, textStyle]}
        iconStyle={[themedStyle.icon, iconStyle]}
        icon={icon}
      />
    );
  }
}

export const ApartmentFacilityList2Item = withStyles(ApartmentFacilityList2ItemComponent, (theme: ThemeType) => ({
  container: {},
  icon: {
    tintColor: theme['color-primary-default'],
  },
  text: {},
}));
