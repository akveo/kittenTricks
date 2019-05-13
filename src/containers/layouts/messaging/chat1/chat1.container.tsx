import React from 'react';
import {
  NavigationScreenProps,
  NavigationScreenConfig,
} from 'react-navigation';
import {
  ChatHeader,
  ChatHeaderNavigationStateParams,
} from '@src/components/messaging';
import {
  Conversation,
  Message,
  Profile,
} from '@src/core/model';
import { conversation5 } from '@src/core/data/conversation';
import {
  profile1,
  profile2,
} from '@src/core/data/profile';
import { TopNavigationElement } from '@src/core/navigation/navigationParams';
import { Chat1 } from './chat1.component';

interface State {
  newMessageText: string;
  conversation: Conversation;
}

export class Chat1Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    newMessageText: '',
    conversation: conversation5,
  };

  static navigationOptions: NavigationScreenConfig<any> = ({ navigation, screenProps }) => {
    const chatHeaderConfig: ChatHeaderNavigationStateParams = {
      interlocutor: navigation.getParam('interlocutor'),
      lastSeen: navigation.getParam('lastSeen'),
      onBack: navigation.getParam('onBack'),
      onProfile: navigation.getParam('onProfile'),
    };

    const renderHeader = (headerProps: NavigationScreenProps, config: ChatHeaderNavigationStateParams) => {
      return (
        <ChatHeader
          {...headerProps}
          lastSeen={config.lastSeen}
          interlocutor={config.interlocutor}
          onBack={config.onBack}
          onProfile={config.onProfile}
        />
      );
    };

    navigation.state.params = {
      topNavigation: (headerProps: NavigationScreenProps): TopNavigationElement => {
        return renderHeader(headerProps, chatHeaderConfig);
      },
    };

    return { ...navigation, ...screenProps };
  };

  public componentWillMount(): void {
    this.props.navigation.setParams({
      interlocutor: this.state.conversation.interlocutor,
      lastSeen: this.state.conversation.lastSeen,
      onBack: this.onBackPress,
      onProfile: this.onProfilePress,
    });
  }

  private onProfilePress = (profile: Profile): void => {
    this.props.navigation.navigate('Profile 1');
  };

  private onNewMessageChange = (newMessageText: string): void => {
    this.setState({ newMessageText });
  };

  private onMessageAddPress = (): void => {
    const profiles: Profile[] = [profile1, profile2];
    const newMessage: Message = {
      author: profiles[Math.floor(Math.random() * profiles.length)],
      text: this.state.newMessageText,
      date: '15:01 PM',
      read: false,
      delivered: false,
    };
    const conversationCopy: Conversation = this.state.conversation;
    conversationCopy.messages.push(newMessage);
    this.setState({
      conversation: conversationCopy,
      newMessageText: '',
    });
  };

  private onBackPress = (): void => {
    this.props.navigation.goBack(null);
  };

  public render(): React.ReactNode {
    return (
      <Chat1
        conversation={this.state.conversation}
        newMessage={this.state.newMessageText}
        onNewMessageChange={this.onNewMessageChange}
        onMessageAdd={this.onMessageAddPress}
      />
    );
  }
}
