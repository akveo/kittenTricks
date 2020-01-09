import React from 'react';
import { ImageSourcePropType, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import {
  Avatar,
  Button,
  Input,
  Layout,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
} from '@ui-kitten/components';
import { KeyboardAvoidingView } from './extra/keyboard-avoiding-view.component';
import { Chat } from './extra/chat.component';
import { AttachmentsMenu } from './extra/attachments-menu.component';
import { ArrowIosBackIcon, MicIcon, PaperPlaneIcon, PlusIcon } from './extra/icons';
import { useNavigation, useSafeArea } from './extra/3rd-party';
import { Message, Profile } from './extra/data';

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

const profile: Profile = Profile.rayCooper();

const keyboardOffset = (height: number): number => Platform.select({
  android: 0,
  ios: height,
});

export default (): React.ReactElement => {

  const navigation = useNavigation();
  const safeArea = useSafeArea();
  const styles = StyleSheet.create();

  const [messages, setMessages] = React.useState<Message[]>(initialMessages);
  const [message, setMessage] = React.useState<string>();
  const [attachmentsMenuVisible, setAttachmentsMenuVisible] = React.useState<boolean>(false);

  const sendButtonEnabled = (): boolean => {
    return message && message.length > 0;
  };

  const onProfileActionPress = (): void => {
    navigation.navigate('Profile7');
  };

  const toggleAttachmentsMenu = (): void => {
    setAttachmentsMenuVisible(!attachmentsMenuVisible);
  };

  const onSendButtonPress = (): void => {
    setMessages([...messages, new Message(message, 'now', true, null)]);
    setMessage(null);
    Keyboard.dismiss();
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  const renderProfileAction = (): React.ReactElement => (
    <TouchableWithoutFeedback onPress={onProfileActionPress}>
      <Avatar source={profile.photo}/>
    </TouchableWithoutFeedback>
  );

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
    <Layout
      style={[styles.container, { paddingTop: safeArea.top }]}
      level='2'>
      <TopNavigation
        alignment='center'
        title={profile.fullName}
        subtitle={profile.formattedLastSeen}
        leftControl={renderBackAction()}
        rightControls={renderProfileAction()}
      />
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
    </Layout>
  );
};

const StyleSheet = useStyleSheet({
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
