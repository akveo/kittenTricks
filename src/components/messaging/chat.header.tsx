import React from 'react';
import {
  NavigationScreenProps,
  SafeAreaView,
} from 'react-navigation';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Avatar,
  AvatarProps,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionProps,
  TopNavigationProps,
} from '@kitten/ui';
import { BackArrowIcon } from '@src/assets/icons';
import { Profile } from '@src/core/model';

interface ComponentProps {
  interlocutor: Profile;
  lastSeen: string;
  onBack: () => void;
  onProfile: (profile: Profile) => void;
}

export interface ChatHeaderNavigationStateParams {
  interlocutor: Profile;
  lastSeen: string;
  onBack: () => void;
  onProfile: (profile: Profile) => void;
}

export type ChatHeaderProps = ThemedComponentProps & ComponentProps & NavigationScreenProps;

class ChatHeaderComponent extends React.Component<ChatHeaderProps> {

  private onBack = (): void => {
    this.props.onBack();
  };

  private onProfile = (): void => {
    const { interlocutor, onProfile } = this.props;

    onProfile(interlocutor);
  };

  private renderLeftControl = (): React.ReactElement<TopNavigationActionProps> => {
    return (
      <TopNavigationAction
        icon={BackArrowIcon}
        onPress={this.onBack}
      />
    );
  };

  private renderProfileAvatar = (): React.ReactElement<AvatarProps> => {
    const { interlocutor } = this.props;

    return (
      <Avatar
        source={{ uri: interlocutor.photo }}
        shape='round'
        size='small'
      />
    );
  };

  private renderRightControls = (): React.ReactElement<TopNavigationActionProps> => {
    return (
      <TopNavigationAction
        icon={this.renderProfileAvatar}
        onPress={this.onProfile}
      />
    );
  };

  private renderInterlocutorProps = (): TopNavigationProps | null => {
    const { interlocutor } = this.props;

    return interlocutor && {
      title: `${interlocutor.firstName} ${interlocutor.lastName}`,
      rightControls: this.renderRightControls(),
    };
  };

  public render(): React.ReactNode {
    const { themedStyle, lastSeen } = this.props;

    return (
      <SafeAreaView style={themedStyle.container}>
        <TopNavigation
          alignment='center'
          subtitle={`Last seen ${lastSeen}`}
          leftControl={this.renderLeftControl()}
          {...this.renderInterlocutorProps()}
        />
      </SafeAreaView>
    );
  }
}

export const ChatHeader = withStyles(ChatHeaderComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['color-white'],
  },
}));

