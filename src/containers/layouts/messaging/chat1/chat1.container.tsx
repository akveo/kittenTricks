import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
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
