import React from 'react';
import {
  ImageProps,
  ImageStyle,
  StyleProp,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  TextIcon,
  TextIconProps,
} from '@src/components/common';
import {
  Icon,
  RemoteIcon,
} from '@src/assets/icons';

// @ts-ignore (`icon` prop override)
interface ComponentProps extends TextIconProps {
  icon: string;
}

export type ApartmentFacilityList2ItemProps = ThemedComponentProps & ComponentProps;

class ApartmentFacilityList2ItemComponent extends React.Component<ApartmentFacilityList2ItemProps> {

  private renderIconElement = (style: StyleProp<ImageStyle>): React.ReactElement<ImageProps> => {
    const { icon } = this.props;

    return Icon(new RemoteIcon(icon), style);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, iconStyle, textStyle, icon, ...restProps } = this.props;

    return (
      <TextIcon
        {...restProps}
        style={[themedStyle.container, style]}
        textStyle={[themedStyle.text, textStyle]}
        iconStyle={[themedStyle.icon, iconStyle]}
        icon={this.renderIconElement}
      />
    );
  }
}

export const ApartmentFacilityList2Item = withStyles(ApartmentFacilityList2ItemComponent, (theme: ThemeType) => ({
  container: {},
  icon: {
    tintColor: theme['color-primary-500'],
  },
  text: {},
}));
