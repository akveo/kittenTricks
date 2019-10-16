import React from 'react';
import {
  ButtonProps,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Button } from '@kitten/ui';
import {
  ProfileSetting,
  ProfilePhoto,
} from '@src/components/social';
import { CameraIconFill } from '@src/assets/icons';
import { Profile } from '@src/core/model';
import {
  ContainerView,
  textStyle,
} from '@src/components/common';

interface ComponentProps {
  profile: Profile;
  onUploadPhotoButtonPress: () => void;
  onButtonPress: () => void;
}

export type ProfileSettings1Props = ThemedComponentProps & ComponentProps;

class ProfileSettings1Component extends React.Component<ProfileSettings1Props> {

  private onButtonPress = () => {
    this.props.onButtonPress();
  };

  private onPhotoButtonPress = () => {
    this.props.onUploadPhotoButtonPress();
  };

  private renderPhotoButton = (): React.ReactElement<ButtonProps> => {
    const { themedStyle } = this.props;

    return (
      <Button
        style={themedStyle.photoButton}
        status='basic'
        icon={CameraIconFill}
        onPress={this.onPhotoButtonPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, profile } = this.props;

    return (
      <ContainerView style={themedStyle.container}>
        <View style={themedStyle.photoSection}>
          <ProfilePhoto
            style={themedStyle.photo}
            source={profile.photo.imageSource}
            button={this.renderPhotoButton}
          />
        </View>
        <View style={themedStyle.infoSection}>
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='First Name'
            value={profile.firstName}
          />
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Last Name'
            value={profile.lastName}
          />
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Gender'
            value={profile.gender}
          />
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Age'
            value={`${profile.age}`}
          />
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Weight'
            value={`${profile.weight} kg`}
          />
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Height'
            value={`${profile.height} cm`}
          />
        </View>
        <View style={themedStyle.contactSection}>
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Email'
            value={profile.email}
          />
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Phone Number'
            value={profile.phoneNumber}
          />
        </View>
        <Button
          style={themedStyle.button}
          textStyle={textStyle.button}
          size='large'
          onPress={this.onButtonPress}>
          DONE
        </Button>
      </ContainerView>
    );
  }
}

export const ProfileSettings1 = withStyles(ProfileSettings1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
  photoSection: {
    marginVertical: 40,
  },
  infoSection: {
    marginTop: 24,
    backgroundColor: theme['background-basic-color-1'],
  },
  contactSection: {
    marginTop: 24,
    backgroundColor: theme['background-basic-color-1'],
  },
  profileSetting: {
    borderBottomWidth: 1,
    borderBottomColor: theme['border-basic-color-2'],
  },
  photo: {
    width: 124,
    height: 124,
    alignSelf: 'center',
  },
  photoButton: {
    top: 82,
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  button: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
}));
