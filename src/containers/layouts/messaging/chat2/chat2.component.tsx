import React from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  View,
  ViewProps,
} from 'react-native';
import { MediaLibrary } from 'expo';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
  Input,
  Button,
  ButtonProps,
} from '@kitten/ui';
import {
  ChatMessage,
  ChatMessageProps,
  ChatFileMessageProps,
  ChatFileMessage,
  ChatFileMessageAppearance,
  Alignments,
} from '@src/components/messaging';
import {
  PlusIcon,
  MicIcon,
  PaperPlaneIcon,
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
import { Chat2FileSection } from './chat2FileSection.component';

const width: number = Dimensions.get('window').width;

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

  private onListContentSizeChange = (): void => {
    setTimeout(() => this.listRef.current.scrollToEnd({ animated: true }), 0);
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

  private renderSendMessageButton = (): React.ReactElement<ButtonProps> | null => {
    const { newMessage } = this.props;

    return (newMessage && newMessage.length !== 0) ? (
      <Button
        appearance='ghost'
        size='large'
        icon={PaperPlaneIcon}
        onPress={this.onMessageAdd}
      />
    ) : null;
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

  public render(): React.ReactNode {
    const {
      themedStyle,
      newMessage,
      fileSectionOpened,
    } = this.props;
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
            icon={PlusIcon}
            onPress={this.onAddButtonPress}
          />
          <Input
            style={themedStyle.inputComponent(isMessageEmpty)}
            icon={MicIcon}
            value={newMessage}
            placeholder='Message...'
            onChangeText={this.onNewMessageChange}
          />
          {this.renderSendMessageButton()}
        </View>
        {fileSectionOpened && this.renderFileSection()}
      </View>
    );
  }
}

export const Chat2 = withStyles(Chat2Component, (theme: ThemeType) => ({
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
    marginRight: 4,
  },
  inputComponent: (isMessageEmpty: boolean) => ({
    // TODO: fix input width in RNUK
    width: isMessageEmpty ? width - 86 : width - 126,
  }),
}));

