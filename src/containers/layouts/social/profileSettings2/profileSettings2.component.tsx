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

export type ProfileSettings2Props = ThemedComponentProps & ComponentProps;

class ProfileSettings2Component extends React.Component<ProfileSettings2Props> {

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
        size='small'
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
            source={profile.photo.imageSource}
            button={this.renderPhotoButton}
          />
          <View style={themedStyle.nameSection}>
            <ProfileSetting
              style={[themedStyle.profileSetting, themedStyle.nameParameter]}
              value={profile.firstName}
            />
            <ProfileSetting
              style={[themedStyle.profileSetting, themedStyle.nameParameter, themedStyle.lastNameParameter]}
              value={profile.lastName}
            />
          </View>
        </View>
        <View style={themedStyle.descriptionSection}>
          <Text
            style={themedStyle.description}
            appearance='hint'
            category='s1'>
            {profile.about}
          </Text>
        </View>
        <View style={themedStyle.infoSection}>
          <ProfileSetting
            style={themedStyle.profileSetting}
            hint='Email'
            value={profile.email}
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
        <Button
          style={themedStyle.button}
          textStyle={textStyle.button}
          size='large'
          onPress={this.onButtonPress}>
          DONE
        </Button>
      </ScrollView>
    );
  }
}

export const ProfileSettings2 = withStyles(ProfileSettings2Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
  photoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    backgroundColor: theme['background-basic-color-1'],
  },
  nameSection: {
    flex: 1,
    marginLeft: 32,
  },
  descriptionSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: theme['background-basic-color-1'],
  },
  infoSection: {
    marginTop: 24,
    backgroundColor: theme['background-basic-color-1'],
  },
  profileSetting: {
    borderBottomWidth: 1,
    borderBottomColor: theme['border-basic-color-2'],
  },
  nameParameter: {
    paddingHorizontal: 0,
    paddingVertical: 8,
  },
  lastNameParameter: {
    marginVertical: 16,
  },
  description: {
    marginTop: 24,
    ...textStyle.paragraph,
  },
  photo: {
    width: 76,
    height: 76,
  },
  photoButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    transform: [{ translateY: 48 }],
    borderColor: theme['border-basic-color-4'],
    backgroundColor: theme['background-basic-color-4'],
  },
  button: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
}));
