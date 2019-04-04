import React from 'react';
import {
  ButtonProps,
  ScrollView,
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
import { CameraIcon } from '@src/assets/icons';
import { Profile } from '@src/core/model';

interface ComponentProps {
  profile: Profile;
  onUploadPhotoButtonPress: () => void;
  onButtonPress: () => void;
}

type Props = ThemedComponentProps & ComponentProps;

class ProfileSettings1Component extends React.Component<Props> {

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
        activeOpacity={0.95}
        icon={CameraIcon}
        onPress={this.onPhotoButtonPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, profile } = this.props;

    return (
      <ScrollView style={themedStyle.container}>
        <View style={themedStyle.photoSection}>
          <ProfilePhoto
            style={themedStyle.photo}
            source={{ uri: profile.photo }}
            button={this.renderPhotoButton}
          />
        </View>
        <View style={themedStyle.infoSection}>
          <ProfileSetting
            hint='First Name'
            value={profile.firstName}
          />
          <ProfileSetting
            hint='Last Name'
            value={profile.lastName}
          />
          <ProfileSetting
            hint='Gender'
            value={profile.gender}
          />
          <ProfileSetting
            hint='Age'
            value={profile.age}
          />
          <ProfileSetting
            hint='Weight'
            value={`${profile.weight} kg`}
          />
          <ProfileSetting
            hint='Height'
            value={`${profile.height} cm`}
          />
        </View>
        <View style={themedStyle.contactSection}>
          <ProfileSetting
            hint='Email'
            value={profile.email}
          />
          <ProfileSetting
            hint='Phone Number'
            value={profile.phoneNumber}
          />
        </View>
        <Button
          style={themedStyle.button}
          size='giant'
          onPress={this.onButtonPress}>
          BUTTON
        </Button>
      </ScrollView>
    );
  }
}

export const ProfileSettings1 = withStyles(ProfileSettings1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['gray-light'],
  },
  photoSection: {
    marginVertical: 40,
    backgroundColor: 'transparent',
  },
  infoSection: {
    marginTop: 24,
    backgroundColor: 'white',
  },
  contactSection: {
    marginTop: 24,
    backgroundColor: 'white',
  },
  photo: {
    width: 124,
    height: 124,
    alignSelf: 'center',
  },
  photoButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    transform: [{ translateY: 96 }],
    backgroundColor: '#6A7385',
  },
  button: {
    height: 40,
    marginHorizontal: 24,
    marginVertical: 24,
  },
}));
