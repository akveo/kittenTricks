import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Platform,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Input,
  List,
} from '@kitten/ui';
import {
  Alignments,
  ChatMessage,
  ChatMessageProps,
} from '@src/components/messaging';
import {
  MicIconFill,
  PlusIconFill,
} from '@src/assets/icons';
import {
  Conversation as ConversationModel,
  Message as MessageModel,
} from '@src/core/model';
import {
  profile1,
  profile2,
} from '@src/core/data/profile';
import { UiMessageModel } from '../container/uiMessage.model';
import {
  AvoidKeyboard,
  textStyle,
} from '@src/components/common';

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
        return {
          ...message,
          alignment: Alignments['ROW-LEFT'],
        };
      } else if (message.author === profile2) {
        return {
          ...message,
          alignment: Alignments['ROW-RIGHT'],
        };
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

  private keyboardOffset = (height: number) => {
    return Platform.select({
      ios: height,
      android: 0,
    });
  };

  public render(): React.ReactNode {
    const { themedStyle, newMessage } = this.props;
    const isMessageEmpty: boolean = newMessage.length === 0;

    return (
      <AvoidKeyboard
        style={themedStyle.container}
        autoDismiss={false}
        offset={this.keyboardOffset}>
        <List
          ref={this.listRef}
          contentContainerStyle={themedStyle.chatContainer}
          data={this.createUiMessages()}
          onContentSizeChange={this.onListContentSizeChange}
          renderItem={this.renderMessage}
        />
        <View style={themedStyle.inputContainer}>
          <Button
            style={themedStyle.addMessageButton}
            textStyle={textStyle.button}
            icon={PlusIconFill}
            disabled={isMessageEmpty}
            onPress={this.onMessageAdd}
          />
          <Input
            icon={MicIconFill}
            style={themedStyle.input}
            textStyle={textStyle.paragraph}
            value={newMessage}
            placeholder='Message...'
            onChangeText={this.onNewMessageChange}
          />
        </View>
      </AvoidKeyboard>
    );
  }
}

export const Chat1 = withStyles(Chat1Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
  chatContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  message: {
    marginVertical: 12,
  },
  inputContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme['background-basic-color-1'],
  },
  addMessageButton: {
    width: 26,
    height: 26,
    borderRadius: 26,
    marginRight: 18,
  },
  input: {
    flex: 1,
  },
}));

