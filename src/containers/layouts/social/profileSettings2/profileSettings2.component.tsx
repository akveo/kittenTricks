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
  ProfileParameter,
  ProfilePhoto,
} from '@src/components/social';
import { Text } from '@src/components/common';
import { CameraIcon } from '@src/assets/icons';
import { Profile } from '@src/core/model';

interface ComponentProps  {
  profile: Profile;
  onUploadPhotoButtonPress: () => void;
  onButtonPress: () => void;
}

type Props = ThemedComponentProps & ComponentProps;

class ProfileSettings2Component extends React.Component<Props> {

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
            source={{uri: profile.photo}}
            button={this.renderPhotoButton}
          />
          <View style={themedStyle.nameSection}>
            <ProfileParameter
              style={themedStyle.nameParameter}
              value={profile.firstName}
            />
            <ProfileParameter
              style={themedStyle.nameParameter}
              value={profile.lastName}
            />
          </View>
        </View>
        <View style={themedStyle.descriptionSection}>
          <Text style={themedStyle.description}>{profile.about}</Text>
        </View>
        <View style={themedStyle.infoSection}>
          <ProfileParameter
            hint='Email'
            value={profile.email}
          />
          <ProfileParameter
            hint='Gender'
            value={profile.gender}
          />
          <ProfileParameter
            hint='Age'
            value={profile.age}
          />
          <ProfileParameter
            hint='Weight'
            value={`${profile.weight} kg`}
          />
          <ProfileParameter
            hint='Height'
            value={`${profile.height} cm`}
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

export const ProfileSettings2 = withStyles(ProfileSettings2Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['gray-light'],
  },
  photoSection: {
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingVertical: 32,
    backgroundColor: 'white',
  },
  nameSection: {
    flex: 1,
    marginLeft: 32,
  },
  descriptionSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  infoSection: {
    marginTop: 24,
    backgroundColor: 'white',
  },
  nameParameter: {
    marginVertical: 8,
    paddingHorizontal: 0,
    paddingVertical: 8,
  },
  description: {
    color: '#8992A3',
  },
  photo: {
    width: 76,
    height: 76,
  },
  photoButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    transform: [{ translateY: 60 }],
    backgroundColor: '#6A7385',
  },
  button: {
    height: 40,
    marginHorizontal: 24,
    marginVertical: 24,
  },
}));
