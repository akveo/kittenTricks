import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {
  ThemeType,
  withStyles,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  Toggle,
  Text,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  soundEnabled: boolean;
  onEditProfilePress: () => void;
  onChangePasswordPress: () => void;
  onNotificationPress: () => void;
  onPrivacyPress: () => void;
  onSoundEnabledValueChange: (value: boolean) => void;
}

export type SettingsProps = ThemedComponentProps & ComponentProps;

class SettingsComponent extends React.Component<SettingsProps> {

  private onEditProfilePress = () => {
    this.props.onEditProfilePress();
  };

  private onChangePasswordPress = () => {
    this.props.onChangePasswordPress();
  };

  private onSoundEnabledPress = () => {
    const { soundEnabled } = this.props;
    this.onSoundEnabledChange(!soundEnabled);
  };

  private onSoundEnabledChange = (value: boolean) => {
    this.props.onSoundEnabledValueChange(value);
  };

  public render(): React.ReactNode {
    const { themedStyle, soundEnabled } = this.props;

    return (
      <View style={themedStyle.container}>
        <Section
          style={themedStyle.section}
          onPress={this.onEditProfilePress}>
          <Text
            style={themedStyle.sectionText}
            category='s2'>
            Edit Profile
          </Text>
        </Section>
        <Section
          style={themedStyle.section}
          onPress={this.onChangePasswordPress}>
          <Text
            style={themedStyle.sectionText}
            category='s2'>
            Change Password
          </Text>
        </Section>
        <Section
          style={[themedStyle.section, themedStyle.notificationSection]}
          onPress={this.onChangePasswordPress}>
          <Text
            style={themedStyle.sectionText}
            category='s2'>
            Notification
          </Text>
        </Section>
        <Section
          style={themedStyle.section}
          onPress={this.onChangePasswordPress}>
          <Text
            style={themedStyle.sectionText}
            category='s2'>
            Privacy
          </Text>
        </Section>
        <Section
          style={[themedStyle.section, themedStyle.soundEnabledSection]}
          onPress={this.onSoundEnabledPress}>
          <Text
            style={themedStyle.sectionText}
            category='s2'>
            Sound Enabled
          </Text>
          <Toggle
            checked={soundEnabled}
            onChange={this.onSoundEnabledChange}
          />
        </Section>
      </View>
    );
  }
}

interface SectionProps extends TouchableOpacityProps {
  children?: React.ReactNode;
}

const Section = (props?: SectionProps): React.ReactElement<TouchableOpacityProps> => {
  return (
    <TouchableOpacity
      activeOpacity={0.65}
      {...props}
    />
  );
};

export const Settings = withStyles(SettingsComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-color-default-1'],
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme['border-color-default-2'],
  },
  notificationSection: {
    paddingTop: 40,
  },
  soundEnabledSection: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 40,
  },
  sectionText: textStyle.subtitle,
}));
