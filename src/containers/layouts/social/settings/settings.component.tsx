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
import { Toggle } from '@kitten/ui';
import { Text } from '@src/components/common';

interface ComponentProps  {
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
    this.onSoundEnabledValueChange(!soundEnabled);
  };

  private onSoundEnabledValueChange = (value: boolean) => {
    this.props.onSoundEnabledValueChange(value);
  };

  public render(): React.ReactNode {
    const { themedStyle, soundEnabled } = this.props;

    return (
      <View style={themedStyle.container}>
        <Section
          style={themedStyle.section}
          onPress={this.onEditProfilePress}>
          <Text style={themedStyle.sectionText}>
            Edit Profile
          </Text>
        </Section>
        <Section
          style={themedStyle.section}
          onPress={this.onChangePasswordPress}>
          <Text style={themedStyle.sectionText}>
            Change Password
          </Text>
        </Section>
        <Section
          style={[themedStyle.section, themedStyle.notificationSection]}
          onPress={this.onChangePasswordPress}>
          <Text style={themedStyle.sectionText}>
            Notification
          </Text>
        </Section>
        <Section
          style={themedStyle.section}
          onPress={this.onChangePasswordPress}>
          <Text style={themedStyle.sectionText}>
            Privacy
          </Text>
        </Section>
        <Section
          style={[themedStyle.section, themedStyle.soundEnabledSection]}
          onPress={this.onSoundEnabledPress}>
          <Text style={themedStyle.sectionText}>
            Sound Enabled
          </Text>
          <Toggle
            value={soundEnabled}
            onValueChange={this.onSoundEnabledValueChange}
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
      activeOpacity={1.0}
      {...props}
    />
  );
};

export const Settings = withStyles(SettingsComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme['gray-light'],
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
  sectionText: {
    fontSize: 13,
    fontFamily: 'opensans-semibold',
    color: '#0D1C2E',
  },
  divider: {
    height: 1,
    backgroundColor: theme['gray-light'],
  },
}));
