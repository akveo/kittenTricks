import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SettingsComponent } from './settings.component';

interface State {
  soundEnabled: boolean;
}

export class SettingsContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    soundEnabled: true,
  };

  private onEditProfilePress = () => {
    const { navigation } = this.props;

    navigation.navigate('Edit Profile');
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
      <SettingsComponent
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
