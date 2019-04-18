import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
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

export type ProfileActivityList2ItemProps = ThemedComponentProps & ViewProps & ComponentProps;

class ProfileActivityList2ItemComponent extends React.Component<ProfileActivityList2ItemProps> {

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

export const ProfileActivityList2Item = withStyles(ProfileActivityList2ItemComponent, (theme: ThemeType) => ({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
}));
