import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Chat1 } from './chat1.component';
import { Conversation } from '@src/core/model';
import { conversation5 } from '@src/core/data/conversation';

interface State {
  conversation: Conversation;
}

export class Chat1Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    conversation: conversation5,
  };


  public render(): React.ReactNode {
    return (
      <Chat1
        conversation={this.state.conversation}
      />
    );
  }
}
