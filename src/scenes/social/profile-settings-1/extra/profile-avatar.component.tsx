import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Avatar, AvatarProps, ButtonElement, ButtonProps } from '@ui-kitten/components';

export interface ProfileAvatarProps extends AvatarProps {
  editButton?: () => ButtonElement;
}

export const ProfileAvatar = (props: ProfileAvatarProps): React.ReactElement<ViewProps> => {

  const renderEditButtonElement = (): ButtonElement => {
    const buttonElement: React.ReactElement<ButtonProps> = props.editButton();

    return React.cloneElement(buttonElement, {
      style: [buttonElement.props.style, styles.editButton],
    });
  };

  const { style, editButton, ...restProps } = props;

  return (
    <View style={style}>
      <Avatar
        {...restProps}
        style={[style, styles.avatar]}
      />
      {editButton && renderEditButtonElement()}
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    alignSelf: 'center',
  },
  editButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 0,
  },
});

