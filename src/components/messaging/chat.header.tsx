import React from 'react';
import {
  SafeAreaView,
  NavigationScreenProps,
} from 'react-navigation';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  TopNavigationBarActionProps,
  TopNavigationAction,
  TopNavigation,
  Avatar,
  AvatarProps,
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

  private renderLeftControl = (): React.ReactElement<TopNavigationBarActionProps> => {
    return (
      <TopNavigationAction
        icon={BackArrowIcon}
        onPress={this.onBack}
      />
    );
  };

  private renderProfileAvatar = (): React.ReactElement<AvatarProps> | null => {
    const { interlocutor } = this.props;

    return interlocutor ? (
      <Avatar
        source={{ uri: interlocutor.photo }}
        shape='round'
        size='small'
      />
    ) : null;
  };

  private renderRightControls = (): React.ReactElement<TopNavigationBarActionProps>[] => {
    return ([
      <TopNavigationAction
        icon={this.renderProfileAvatar}
        onPress={this.onProfile}
      />,
    ]);
  };

  public render(): React.ReactNode {
    const {
      themedStyle,
      interlocutor,
      lastSeen,
    } = this.props;
    const title: string = interlocutor ? `${interlocutor.firstName} ${interlocutor.lastName}` : '';

    return (
      <SafeAreaView style={themedStyle.container}>
        <TopNavigation
          alignment='center'
          title={title}
          subtitle={`Last seen ${lastSeen}`}
          leftControl={this.renderLeftControl()}
          rightControls={this.renderRightControls()}
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

