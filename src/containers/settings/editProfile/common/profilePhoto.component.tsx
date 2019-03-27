import React from 'react';
import { View } from 'react-native';
import {
  StyleType,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Avatar,
  AvatarProps,
  ButtonProps,
} from '@kitten/ui';

interface ComponentProps {
  button?: () => React.ReactElement<ButtonProps>;
}

export type ProfilePhotoProps = ComponentProps & AvatarProps;

class ProfilePhotoComponent extends React.Component<ProfilePhotoProps> {

  private renderEditElement = (): React.ReactElement<ButtonProps> => {
    const buttonElement: React.ReactElement<ButtonProps> = this.props.button();

    return React.cloneElement(buttonElement, {
      style: [buttonElement.props.style, this.props.themedStyle.editButton],
    });
  };

  public render(): React.ReactNode {
    // @ts-ignore: optional props
    const { style, themedStyle, button, ...restProps } = this.props;

    return (
      <View style={style}>
        <Avatar
          style={[style, themedStyle.avatar]}
          {...restProps}
        />
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

