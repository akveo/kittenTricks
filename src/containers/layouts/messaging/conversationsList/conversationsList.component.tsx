import React from 'react';
import {
  View,
  ListRenderItemInfo,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
  Input,
  InputProps,
} from '@kitten/ui';
import {
  Conversation,
  ConversationProps,
} from '@src/components/messaging';
import { Conversation as ConversationModel } from '@src/core/model';
import { SearchIconOutline } from '@src/assets/icons';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  searchEnabled: boolean;
  conversations: ConversationModel[];
  onSearchStringChange: (text: string) => void;
  onConversation: (index: number) => void;
}

export type ConversationsListProps = ThemedComponentProps & ComponentProps;

class ConversationsListComponent extends React.Component<ConversationsListProps> {

  private onConversation = (index: number): void => {
    this.props.onConversation(index);
  };

  private onSearchStringChange = (text: string): void => {
    this.props.onSearchStringChange(text);
  };

  private renderItem = (info: ListRenderItemInfo<ConversationModel>): React.ReactElement<ConversationProps> => {
    const { themedStyle } = this.props;

    return (
      <Conversation
        style={themedStyle.item}
        conversation={info.item}
        index={info.index}
        onConversation={this.onConversation}
      />
    );
  };

  private  renderSearchInput = (): React.ReactElement<InputProps> | null => {
    const { themedStyle, searchEnabled } = this.props;

    return searchEnabled ? (
      <Input
        style={themedStyle.input}
        textStyle={textStyle.paragraph}
        icon={SearchIconOutline}
        placeholder='Search Interlocutor...'
        onChangeText={this.onSearchStringChange}
      />
    ) : null;
  };

  public render(): React.ReactNode {
    const { themedStyle, conversations } = this.props;

    return (
      <View style={themedStyle.container}>
        {this.renderSearchInput()}
        <List
          style={themedStyle.container}
          data={conversations}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export const ConversationsList = withStyles(ConversationsListComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-color-default-2'],
  },
  item: {
    backgroundColor: theme['background-color-default-1'],
    marginVertical: 0.5,
  },
  input: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
}));

