import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemeType,
  withStyles,
  ThemedComponentProps,
} from '@kitten/theme';
import {
  Text,
  Toggle,
} from '@kitten/ui';

interface SettingsComponentProps {
  soundEnabled: boolean;
  onEditProfilePress: () => void;
  onChangePasswordPress: () => void;
  onNotificationPress: () => void;
  onPrivacyPress: () => void;
  onSoundEnabledValueChange: (value: boolean) => void;
}

type Props = ThemedComponentProps & SettingsComponentProps;

class Settings extends React.Component<Props> {

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
        <Divider style={themedStyle.divider}/>
        <Section
          style={themedStyle.section}
          onPress={this.onChangePasswordPress}>
          <Text style={themedStyle.sectionText}>
            Change Password
          </Text>
        </Section>
        <Divider style={themedStyle.divider}/>
        <Section
          style={themedStyle.notificationSection}
          onPress={this.onChangePasswordPress}>
          <Text style={themedStyle.sectionText}>
            Notification
          </Text>
        </Section>
        <Divider style={themedStyle.divider}/>
        <Section
          style={themedStyle.section}
          onPress={this.onChangePasswordPress}>
          <Text style={themedStyle.sectionText}>
            Privacy
          </Text>
        </Section>
        <Divider style={themedStyle.divider}/>
        <Section
          style={themedStyle.soundEnabledSection}
          onPress={this.onSoundEnabledPress}>
          <Text style={themedStyle.sectionText}>
            Sound Enabled
          </Text>
          <Toggle
            value={soundEnabled}
            onValueChange={this.onSoundEnabledValueChange}
          />
        </Section>
        <Divider style={themedStyle.divider}/>
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
      {...props}
      activeOpacity={1.0}
    />
  );
};

const Divider = (props?: ViewProps): React.ReactElement<ViewProps> => {
  return (
    <View {...props}/>
  );
};

export const SettingsComponent = withStyles(Settings, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  section: {
    padding: 16,
  },
  notificationSection: {
    padding: 16,
    paddingTop: 40,
  },
  soundEnabledSection: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
    paddingTop: 40,
  },
  sectionText: {
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: theme['gray-light'],
  },
}));
