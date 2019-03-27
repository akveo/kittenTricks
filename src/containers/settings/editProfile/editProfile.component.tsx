import React from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  ScrollView,
  StyleProp,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Avatar,
  Button,
  Text,
} from '@kitten/ui';
import { Profile } from './editProfile.container';

interface EditProfileProps {
  profile: Profile;
  onUploadPhotoButtonPress: () => void;
  onButtonPress: () => void;
}

type Props = ThemedComponentProps & EditProfileProps;

class EditProfile extends React.Component<Props> {

  private onButtonPress = () => {
    this.props.onButtonPress();
  };

  private onUploadPhotoButtonPress = () => {
    this.props.onUploadPhotoButtonPress();
  };

  public render(): React.ReactNode {
    const { themedStyle, profile } = this.props;

    return (
      <ScrollView style={themedStyle.container}>
        <View style={[themedStyle.section, themedStyle.photoSection]}>
          <UploadPhoto
            style={themedStyle.photo}
            buttonStyle={themedStyle.uploadPhotoButton}
            iconStyle={themedStyle.uploadPhotoButtonIcon}
            source={{ uri: profile.photo }}
            onPress={this.onUploadPhotoButtonPress}
          />
        </View>
        <View style={[themedStyle.section, themedStyle.infoSection]}>
          <ParameterSection
            style={themedStyle.parameterSection}
            hintStyle={themedStyle.parameterSectionHint}
            valueStyle={themedStyle.parameterSectionValue}
            hint='First Name'
            value={profile.firstName}
          />
          <ParameterSection
            style={themedStyle.parameterSection}
            hintStyle={themedStyle.parameterSectionHint}
            valueStyle={themedStyle.parameterSectionValue}
            hint='Last Name'
            value={profile.lastName}
          />
          <ParameterSection
            style={themedStyle.parameterSection}
            hintStyle={themedStyle.parameterSectionHint}
            valueStyle={themedStyle.parameterSectionValue}
            hint='Gender'
            value={profile.gender}
          />
          <ParameterSection
            style={themedStyle.parameterSection}
            hintStyle={themedStyle.parameterSectionHint}
            valueStyle={themedStyle.parameterSectionValue}
            hint='Age'
            value={profile.age}
          />
          <ParameterSection
            style={themedStyle.parameterSection}
            hintStyle={themedStyle.parameterSectionHint}
            valueStyle={themedStyle.parameterSectionValue}
            hint='Weight'
            value={`${profile.weight} kg`}
          />
          <ParameterSection
            style={themedStyle.parameterSection}
            hintStyle={themedStyle.parameterSectionHint}
            valueStyle={themedStyle.parameterSectionValue}
            hint='Height'
            value={`${profile.height} cm`}
          />
        </View>
        <View style={[themedStyle.section, themedStyle.contactSection]}>
          <ParameterSection
            style={themedStyle.parameterSection}
            hintStyle={themedStyle.parameterSectionHint}
            valueStyle={themedStyle.parameterSectionValue}
            hint='Email'
            value={profile.email}
          />
          <ParameterSection
            style={themedStyle.parameterSection}
            hintStyle={themedStyle.parameterSectionHint}
            valueStyle={themedStyle.parameterSectionValue}
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

interface ParameterSectionProps extends ViewProps {
  hintStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
  hint: React.ReactText;
  value: React.ReactText;
}

const ParameterSection = (props?: ParameterSectionProps): React.ReactElement<ViewProps> => {
  const { hintStyle, valueStyle, hint, value, ...restProps } = props;

  return (
    <View {...restProps}>
      <Text style={hintStyle}>{hint}</Text>
      <Text style={valueStyle}>{value}</Text>
    </View>
  );
};

interface UploadPhotoProps extends ImageProps {
  buttonStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  onPress: () => void;
}

const UploadPhoto = (props?: UploadPhotoProps): React.ReactElement<UploadPhotoProps> => {
  const { style, buttonStyle, iconStyle, onPress, ...restProps } = props;
  const { width, height } = style;

  const PhotoIcon = (derivedStyle: StyleType): React.ReactElement<ImageProps> => {
    return (
      <Image
        style={[derivedStyle, iconStyle]}
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/camera.png' }}
      />
    );
  };

  return (
    <View style={style}>
      <Avatar
        style={{ width, height, alignSelf: 'center' }}
        {...restProps}
      />
      <Button
        style={buttonStyle}
        icon={PhotoIcon}
        onPress={onPress}
      />
    </View>
  );
};

export const EditProfileComponent = withStyles(EditProfile, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['gray-light'],
  },
  section: {
    backgroundColor: 'white',
  },
  photoSection: {
    marginVertical: 24,
    backgroundColor: 'transparent',
  },
  contactSection: {
    marginVertical: 24,
  },
  infoSection: {
    marginTop: 24,
  },
  parameterSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme['gray-light'],
  },
  parameterSectionHint: {
    fontWeight: '500',
    color: 'gray',
  },
  parameterSectionValue: {
    fontWeight: '500',
  },
  photo: {
    width: 124,
    height: 124,
    alignSelf: 'center',
  },
  uploadPhotoButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    position: 'absolute',
    alignSelf: 'flex-end',
    transform: [{ translateY: 96 }],
  },
  uploadPhotoButtonIcon: {
    width: 24,
    height: 24,
  },
  button: {
    height: 40,
    marginHorizontal: 32,
  },
}));
