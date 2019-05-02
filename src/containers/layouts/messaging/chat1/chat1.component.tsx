import React from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
  Input,
  Button,
} from '@kitten/ui';
import {
  ChatMessage,
  ChatMessageProps,
  Alignments,
} from '@src/components/messaging';
import {
  PlusIcon,
  MicIcon,
} from '@src/assets/icons';
import {
  Conversation as ConversationModel,
  Message as MessageModel,
} from '@src/core/model';
import {
  profile1,
  profile2,
} from '@src/core/data/profile';
import { UiMessageModel } from '../uiMessage.model';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  conversation: ConversationModel;
  newMessage: string;
  onNewMessageChange: (text: string) => void;
  onMessageAdd: () => void;
}

export type Chat1ComponentProps = ThemedComponentProps & ComponentProps;

class Chat1Component extends React.Component<Chat1ComponentProps> {

  private listRef: React.RefObject<FlatList<any>> = React.createRef();

  private onListContentSizeChange = (): void => {
    setTimeout(() => this.listRef.current.scrollToEnd({ animated: true }), 0);
  };

  private onNewMessageChange = (text: string): void => {
    this.props.onNewMessageChange(text);
  };

  private onMessageAdd = (): void => {
    this.props.onMessageAdd();
  };

  private createUiMessages = (): UiMessageModel[] => {
    const { conversation } = this.props;

    return conversation.messages.map((message: MessageModel) => {
      if (message.author === profile1) {
        return { ...message, alignment: Alignments['ROW-LEFT'] };
      } else if (message.author === profile2) {
        return { ...message, alignment: Alignments['ROW-RIGHT'] };
      }
    });
  };

  private renderMessage = (info: ListRenderItemInfo<UiMessageModel>): React.ReactElement<ChatMessageProps> => {
    const { themedStyle } = this.props;

    return (
      <ChatMessage
        style={themedStyle.message}
        index={info.index}
        message={info.item}
        alignment={info.item.alignment}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, newMessage } = this.props;
    const isMessageEmpty: boolean = newMessage.length === 0;

    return (
      <View style={themedStyle.container}>
        <List
          ref={this.listRef}
          style={themedStyle.chatContainer}
          data={this.createUiMessages()}
          onContentSizeChange={this.onListContentSizeChange}
          renderItem={this.renderMessage}
        />
        <View style={themedStyle.inputContainer}>
          <Button
            style={themedStyle.addMessageButton}
            textStyle={textStyle.button}
            icon={PlusIcon}
            disabled={isMessageEmpty}
            onPress={this.onMessageAdd}
          />
          <Input
            icon={MicIcon}
            style={themedStyle.input}
            textStyle={textStyle.paragraph}
            value={newMessage}
            placeholder='Message...'
            onChangeText={this.onNewMessageChange}
          />
        </View>
      </View>
    );
  }
}

export const Chat1 = withStyles(Chat1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-white'],
  },
  chatContainer: {
    backgroundColor: theme['color-basic-100'],
    paddingHorizontal: 16,
    paddingVertical: 28,
  },
  message: {
    marginBottom: 28,
  },
  inputContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addMessageButton: {
    width: 26,
    borderRadius: 26,
    marginRight: 18,
  },
  input: {
    flex: 1,
  },
}));

