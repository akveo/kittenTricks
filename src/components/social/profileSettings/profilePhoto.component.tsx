import React from 'react';
import {
  ImageProps,
  View,
  StyleSheet,
} from 'react-native';
import {
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Avatar,
  AvatarProps,
  ButtonProps,
  IconProps,
  IconElement,
} from '@kitten/ui';

interface ComponentProps {
  icon?: (style: IconProps<Partial<ImageProps>>) => IconElement<ImageProps>;
  button?: () => React.ReactElement<ButtonProps>;
}

export type ProfilePhotoProps = ComponentProps & Partial<AvatarProps>;

class ProfilePhotoComponent extends React.Component<ProfilePhotoProps> {

  private renderEditElement = (): React.ReactElement<ButtonProps> => {
    const buttonElement: React.ReactElement<ButtonProps> = this.props.button();

    return React.cloneElement(buttonElement, {
      style: [buttonElement.props.style, this.props.themedStyle.editButton],
    });
  };

  private renderImageElement = (): React.ReactElement<AvatarProps> => {
    const { style, themedStyle, source, ...restProps } = this.props;

    return (
      <Avatar
        {...restProps}
        style={[style, themedStyle.avatar]}
        source={source}
      />
    );
  };

  private renderIconElement = (): any => {
    const { themedStyle, style, icon } = this.props;
    return icon({ ...StyleSheet.flatten(style), ...themedStyle.avatar });
  };

  public render(): React.ReactNode {
    const { style, icon, button } = this.props;

    return (
      <View style={style}>
        {icon ? this.renderIconElement() : this.renderImageElement()}
        {button ? this.renderEditElement() : null}
      </View>
    );
  }
}

export const ProfilePhoto = withStyles(ProfilePhotoComponent, (theme: ThemeType) => ({
  avatar: {
    alignSelf: 'center',
  },
  editButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
}));

