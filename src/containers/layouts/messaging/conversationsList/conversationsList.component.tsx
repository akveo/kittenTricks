import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { List } from '@kitten/ui';
import {
  Conversation,
  ConversationProps,
} from '@src/components/messaging';
import { Conversation as ConversationModel } from '@src/core/model';

interface ComponentProps {
  conversations: ConversationModel[];
  onConversation: (index: number) => void;
}

export type ConversationsListProps = ThemedComponentProps & ComponentProps;

class ConversationsListComponent extends React.Component<ConversationsListProps> {

  private onConversation = (index: number): void => {
    this.props.onConversation(index);
  };

  private renderItem = (info: ListRenderItemInfo<ConversationModel>): React.ReactElement<ConversationProps> => {
    const { themedStyle } = this.props;

    return (
      <Conversation
        conversation={info.item}
        index={info.index}
        onConversation={this.onConversation}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, conversations } = this.props;

    return (
      <List
        style={themedStyle.container}
        data={conversations}
        renderItem={this.renderItem}
      />
    );
  }
}

export const ConversationsList = withStyles(ConversationsListComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
  },
}));

