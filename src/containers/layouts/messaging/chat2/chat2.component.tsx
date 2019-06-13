import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Platform,
  View,
  ViewProps,
} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  ButtonProps,
  Input,
  List,
} from '@kitten/ui';
import {
  Alignments,
  ChatFileMessage,
  ChatFileMessageAppearance,
  ChatFileMessageProps,
  ChatMessage,
  ChatMessageProps,
} from '@src/components/messaging';
import {
  MicIconFill,
  PaperPlaneIconFill,
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
import { Chat2FileSection } from './chat2FileSection.component';
import {
  AvoidKeyboard,
  textStyle,
} from '@src/components/common';
import { StringValidator } from '@src/core/validators';

interface ComponentProps {
  conversation: ConversationModel;
  fileSectionOpened: boolean;
  newMessage: string;
  galleryFiles: MediaLibrary.Asset[];
  fileMessageAppearance: ChatFileMessageAppearance; // just for demo purposes
  onNewMessageChange: (text: string) => void;
  onMessageAdd: () => void;
  onAddButtonPress: () => void;
  onCancelButtonPress: () => void;
  onPhotoOrVideoButtonPress: () => void;
  onFileButtonPress: () => void;
  onLocationButtonPress: () => void;
  onContactButtonPress: () => void;
  onTakePhotoButtonPress: () => void;
  onGalleryItemPress: (item: MediaLibrary.Asset) => void;
}

export type Chat2ComponentProps = ThemedComponentProps & ComponentProps;

class Chat2Component extends React.Component<Chat2ComponentProps> {

  private listRef: React.RefObject<FlatList<any>> = React.createRef();
  private scrollToLastMessageTimeout: number;

  public componentWillUnmount() {
    clearTimeout(this.scrollToLastMessageTimeout);
  }

  private onListContentSizeChange = (): void => {
    this.scrollToLastMessageTimeout = setTimeout(this.scrollToLastMessage, 0);
  };

  private onNewMessageChange = (text: string): void => {
    this.props.onNewMessageChange(text);
  };

  private onMessageAdd = (): void => {
    this.props.onMessageAdd();
  };

  private onAddButtonPress = (): void => {
    this.props.onAddButtonPress();
  };

  private shouldRenderSendButton = (): boolean => {
    const { newMessage } = this.props;

    return StringValidator(newMessage);
  };

  private scrollToLastMessage = () => {
    this.listRef.current.scrollToEnd({ animated: true });
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

  private renderMessage = (info: ListRenderItemInfo<UiMessageModel>)
    : React.ReactElement<ChatMessageProps | ChatFileMessageProps> => {

    const { themedStyle, fileMessageAppearance } = this.props;

    return info.item.file ? (

      <ChatFileMessage
        style={themedStyle.message}
        index={info.index}
        message={info.item}
        alignment={info.item.alignment}
        appearance={fileMessageAppearance}
      />
    ) : (
      <ChatMessage
        style={themedStyle.message}
        index={info.index}
        message={info.item}
        alignment={info.item.alignment}
      />
    );
  };

  private renderSendMessageButton = (): React.ReactElement<ButtonProps> => {
    const { themedStyle } = this.props;

    return (
      <Button
        style={themedStyle.addMessageButton}
        appearance='ghost'
        size='large'
        icon={PaperPlaneIconFill}
        onPress={this.onMessageAdd}
      />
    );
  };

  private renderFileSection = (): React.ReactElement<ViewProps> => {
    const {
      galleryFiles,
      onCancelButtonPress,
      onPhotoOrVideoButtonPress,
      onFileButtonPress,
      onLocationButtonPress,
      onContactButtonPress,
      onTakePhotoButtonPress,
      onGalleryItemPress,
    } = this.props;

    return (
      <Chat2FileSection
        galleryFiles={galleryFiles}
        onCancelButtonPress={onCancelButtonPress}
        onPhotoOrVideoButtonPress={onPhotoOrVideoButtonPress}
        onFileButtonPress={onFileButtonPress}
        onLocationButtonPress={onLocationButtonPress}
        onContactButtonPress={onContactButtonPress}
        onTakePhotoButtonPress={onTakePhotoButtonPress}
        onGalleryItemPress={onGalleryItemPress}
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
    const { themedStyle, newMessage, fileSectionOpened } = this.props;

    const sendMessageButtonElement = this.shouldRenderSendButton() ? this.renderSendMessageButton() : null;

    return (
      <AvoidKeyboard
        style={themedStyle.container}
        autoDismiss={false}
        offset={this.keyboardOffset}>
        <View style={themedStyle.container}>
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
              icon={PlusIconFill}
              onPress={this.onAddButtonPress}
            />
            <Input
              style={themedStyle.messageInput}
              textStyle={textStyle.paragraph}
              icon={MicIconFill}
              value={newMessage}
              placeholder='Message...'
              onChangeText={this.onNewMessageChange}
            />
            {sendMessageButtonElement}
          </View>
          {fileSectionOpened && this.renderFileSection()}
        </View>
      </AvoidKeyboard>
    );
  }
}

export const Chat2 = withStyles(Chat2Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
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
  },
  messageInput: {
    flex: 1,
    marginHorizontal: 8,
  },
}));

