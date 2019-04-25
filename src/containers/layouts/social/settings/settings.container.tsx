import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Settings } from './settings.component';

interface State {
  soundEnabled: boolean;
}

export class SettingsContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    soundEnabled: true,
  };

  private onEditProfilePress = () => {
    this.props.navigation.navigate('Profile Settings 1');
  };

  private onChangePasswordPress = () => {

  };

  private onNotificationPress = () => {

  };

  private onPrivacyPress = () => {

  };

  private onSoundEnabledValueChange = (soundEnabled: boolean) => {
    this.setState({ soundEnabled });
  };

  public render(): React.ReactNode {
    return (
      <Settings
        soundEnabled={this.state.soundEnabled}
        onEditProfilePress={this.onEditProfilePress}
        onChangePasswordPress={this.onChangePasswordPress}
        onNotificationPress={this.onNotificationPress}
        onPrivacyPress={this.onPrivacyPress}
        onSoundEnabledValueChange={this.onSoundEnabledValueChange}
      />
    );
  }
}
