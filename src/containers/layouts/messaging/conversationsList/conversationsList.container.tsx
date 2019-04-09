import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ConversationsList } from './conversationsList.component';
import { Conversation } from '@src/core/model';
import {
  conversation1,
  conversation2,
  conversation3,
  conversation4,
} from '@src/core/data/conversation';

interface State {
  conversations: Conversation[];
}

export class ConversationsListContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    conversations: [conversation1, conversation2, conversation3, conversation4],
  };

  private onConversation = (index: number): void => {

  };

  public render(): React.ReactNode {
    return (
      <ConversationsList
        conversations={this.state.conversations}
        onConversation={this.onConversation}
      />
    );
  }
}
