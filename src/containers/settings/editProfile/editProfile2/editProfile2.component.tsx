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
import { CameraIcon } from '@src/icons';
import {
  ProfileParameter,
  ProfilePhoto,
  ProfileType,
} from '../common';

interface EditProfileProps {
  profile: ProfileType;
  onUploadPhotoButtonPress: () => void;
  onButtonPress: () => void;
}

type Props = ThemedComponentProps & EditProfileProps;

class EditProfile2 extends React.Component<Props> {

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
          <Text style={themedStyle.description}>{profile.about}</Text>
        </View>
        <View style={themedStyle.infoSection}>
          <ProfileParameter
            hint='First Name'
            value={profile.firstName}
          />
          <ProfileParameter
            hint='Last Name'
            value={profile.lastName}
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
        <View style={themedStyle.contactSection}>
          <ProfileParameter
            hint='Email'
            value={profile.email}
          />
          <ProfileParameter
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

export const EditProfile2Component = withStyles(EditProfile2, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['gray-light'],
  },
  photoSection: {
    marginHorizontal: 32,
    marginVertical: 32,
    backgroundColor: 'transparent',
  },
  descriptionSection: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: 'white',
  },
  infoSection: {
    marginTop: 24,
    backgroundColor: 'white',
  },
  contactSection: {
    marginTop: 24,
    backgroundColor: 'white',
  },
  description: {
    color: 'gray',
  },
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
  },
  button: {
    height: 40,
    marginHorizontal: 24,
    marginVertical: 24,
  },
}));

