import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore
interface TouchableProps extends TouchableOpacityProps {
  onPress: (index: number) => void;
}

interface ComponentProps extends ListDerivedProps, TouchableProps {
  source: ImageSourcePropType;
}

export type ProfileActivityList3ItemProps = ThemedComponentProps & ComponentProps;

class ProfileActivityList3ItemComponent extends React.Component<ProfileActivityList3ItemProps> {

  private onPress = () => {
    this.props.onPress(this.props.index);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, source, ...restProps } = this.props;

    return (
      <TouchableOpacity
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <Image
          style={themedStyle.image}
          source={source}
        />
      </TouchableOpacity>
    );
  }
}

export const ProfileActivityList3Item = withStyles(ProfileActivityList3ItemComponent, (theme: ThemeType) => ({
  image: {
    flex: 1,
  },
}));
