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
import {
  Button,
  Text,
} from '@kitten/ui';
import {
  ProfileSetting,
  ProfilePhoto,
} from '@src/components/social';
import { CameraIcon } from '@src/assets/icons';
import { Profile } from '@src/core/model';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  profile: Profile;
  onUploadPhotoButtonPress: () => void;
  onButtonPress: () => void;
}

export type ProfileSettings3Props = ThemedComponentProps & ComponentProps;

class ProfileSettings3Component extends React.Component<ProfileSettings3Props> {

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
            shape='rounded'
            source={{ uri: profile.photo }}
            button={this.renderPhotoButton}
          />
        </View>
        <View style={themedStyle.descriptionSection}>
          <Text
            style={themedStyle.description}
            appearance='hintDark'>
            {profile.about}
          </Text>
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
          size='large'
          onPress={this.onButtonPress}>
          DONE
        </Button>
      </ScrollView>
    );
  }
}

export const ProfileSettings3 = withStyles(ProfileSettings3Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['gray-light'],
  },
  photoSection: {
    marginHorizontal: 32,
    marginVertical: 32,
    backgroundColor: theme['opacity-transparent'],
  },
  descriptionSection: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: theme['color-white'],
  },
  infoSection: {
    marginTop: 24,
    backgroundColor: theme['color-white'],
  },
  contactSection: {
    marginTop: 24,
    backgroundColor: theme['color-white'],
  },
  description: textStyle.paragraph,
  photo: {
    width: 320,
    height: 320,
    borderRadius: 16,
  },
  photoButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    transform: [{ translateY: 32 }, { translateX: -16 }],
    backgroundColor: theme['color-basic-700'],
  },
  button: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
}));

