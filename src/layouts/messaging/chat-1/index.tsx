import React from 'react';
import { ImageSourcePropType, Keyboard, Platform } from 'react-native';
import { Button, Input, StyleService, useStyleSheet } from '@ui-kitten/components';
import { KeyboardAvoidingView } from './extra/keyboard-avoiding-view.component';
import { Chat } from './extra/chat.component';
import { AttachmentsMenu } from './extra/attachments-menu.component';
import { MicIcon, PaperPlaneIcon, PlusIcon } from './extra/icons';
import { Message } from './extra/data';

const initialMessages: Message[] = [
  Message.howAreYou(),
  Message.imFine(),
  Message.imFineToo(),
  Message.walkingWithDog(),
  Message.imageAttachment1(),
  Message.imageAttachment2(),
  Message.canIJoin(),
  Message.sure(),
];

const galleryAttachments: ImageSourcePropType[] = [
  require('./assets/image-attachment-1.png'),
  require('./assets/image-attachment-2.jpg'),
  require('./assets/image-attachment-1.png'),
  require('./assets/image-attachment-2.jpg'),
];

const keyboardOffset = (height: number): number => Platform.select({
  android: 0,
  ios: height,
});

export default (): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  const [messages, setMessages] = React.useState<Message[]>(initialMessages);
  const [message, setMessage] = React.useState<string>();
  const [attachmentsMenuVisible, setAttachmentsMenuVisible] = React.useState<boolean>(false);

  const sendButtonEnabled = (): boolean => {
    return message && message.length > 0;
  };

  const toggleAttachmentsMenu = (): void => {
    setAttachmentsMenuVisible(!attachmentsMenuVisible);
  };

  const onSendButtonPress = (): void => {
    setMessages([...messages, new Message(message, 'now', true, null)]);
    setMessage(null);
    Keyboard.dismiss();
  };

  const renderAttachmentsMenu = (): React.ReactElement => (
    <AttachmentsMenu
      attachments={galleryAttachments}
      onSelectPhoto={toggleAttachmentsMenu}
      onSelectFile={toggleAttachmentsMenu}
      onSelectLocation={toggleAttachmentsMenu}
      onSelectContact={toggleAttachmentsMenu}
      onAttachmentSelect={toggleAttachmentsMenu}
      onCameraPress={toggleAttachmentsMenu}
      onDismiss={toggleAttachmentsMenu}
    />
  );

  return (
    <React.Fragment>
      <Chat
        style={styles.chat}
        contentContainerStyle={styles.chatContent}
        followEnd={true}
        data={messages}
      />
      <KeyboardAvoidingView
        style={styles.messageInputContainer}
        offset={keyboardOffset}>
        <Button
          style={[styles.iconButton, styles.attachButton]}
          icon={PlusIcon}
          onPress={toggleAttachmentsMenu}
        />
        <Input
          style={styles.messageInput}
          placeholder='Message...'
          value={message}
          onChangeText={setMessage}
          icon={MicIcon}
        />
        <Button
          appearance='ghost'
          style={[styles.iconButton, styles.sendButton]}
          icon={PaperPlaneIcon}
          disabled={!sendButtonEnabled()}
          onPress={onSendButtonPress}
        />
      </KeyboardAvoidingView>
      {attachmentsMenuVisible && renderAttachmentsMenu()}
    </React.Fragment>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  chat: {
    flex: 1,
  },
  chatContent: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  messageInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: 'background-basic-color-1',
  },
  attachButton: {
    borderRadius: 24,
    marginHorizontal: 8,
  },
  messageInput: {
    flex: 1,
    marginHorizontal: 8,
  },
  sendButton: {
    marginRight: 4,
  },
  iconButton: {
    width: 24,
    height: 24,
  },
});
