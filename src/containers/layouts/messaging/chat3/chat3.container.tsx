import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import {
  Permissions,
  MediaLibrary,
} from 'expo';
import {
  Conversation,
  FileType,
  Message,
  Profile,
} from '@src/core/model';
import { conversation6 } from '@src/core/data/conversation';
import { ChatFileMessageAppearance } from '@src/components/messaging';
import {
  profile1,
  profile2,
} from '@src/core/data/profile';
import { Chat2 } from '../chat2/chat2.component';

interface State {
  newMessageText: string;
  galleryFiles: MediaLibrary.Asset[];
  fileSectionOpened: boolean;
  conversation: Conversation;
}

export class Chat3Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    newMessageText: '',
    galleryFiles: [],
    fileSectionOpened: false,
    conversation: conversation6,
  };

  public componentWillMount(): void {
    MediaLibrary.getAssetsAsync({ first: 6 })
      .then((data: MediaLibrary.GetAssetsResult) =>
        this.setState({ galleryFiles: data.assets }));
  }

  private onNewMessageChange = (newMessageText: string): void => {
    this.setState({ newMessageText });
  };

  private onMessageAddPress = (): void => {
    const profiles: Profile[] = [profile1, profile2];
    const newMessage: Message = {
      author: profiles[Math.floor(Math.random() * profiles.length)],
      text: this.state.newMessageText,
      date: '15:01 PM',
      read: false,
      delivered: false,
    };
    const conversationCopy: Conversation = this.state.conversation;
    conversationCopy.messages.push(newMessage);
    this.setState({
      conversation: conversationCopy,
      newMessageText: '',
    });
  };

  private onCameraPermissionResponse = (result: Permissions.PermissionResponse): void => {
    if (result.status === 'granted') {
      this.setState({ fileSectionOpened: true });
    }
  };

  private onAddButtonPress = (): void => {
    Permissions.askAsync(Permissions.CAMERA_ROLL)
      .then(this.onCameraPermissionResponse);
  };

  private onCancelButtonPress = (): void => {
    this.setState({ fileSectionOpened: false });
  };

  private onPhotoOrVideoButtonPress = (): void => {

  };

  private onFileButtonPress = (): void => {

  };

  private onLocationButtonPress = (): void => {

  };

  private onContactButtonPress = (): void => {

  };

  private onTakePhotoButtonPress = (): void => {

  };

  private onGalleryItemPress = (item: MediaLibrary.Asset) => {
    const profiles: Profile[] = [profile1, profile2];
    const newMessage: Message = {
      file: {
        type: item.mediaType as FileType,
        preview: item.uri,
        name: item.filename,
      },
      date: '15:01 PM',
      read: false,
      delivered: false,
      author: profiles[Math.floor(Math.random() * profiles.length)],
    };
    const conversationCopy: Conversation = this.state.conversation;
    conversationCopy.messages.push(newMessage);
    this.setState({
      conversation: conversationCopy,
      fileSectionOpened: false,
    });
  };

  public render(): React.ReactNode {
    return (
      <Chat2
        conversation={this.state.conversation}
        fileSectionOpened={this.state.fileSectionOpened}
        newMessage={this.state.newMessageText}
        galleryFiles={this.state.galleryFiles}
        fileMessageAppearance={ChatFileMessageAppearance.preview}
        onNewMessageChange={this.onNewMessageChange}
        onMessageAdd={this.onMessageAddPress}
        onAddButtonPress={this.onAddButtonPress}
        onCancelButtonPress={this.onCancelButtonPress}
        onPhotoOrVideoButtonPress={this.onPhotoOrVideoButtonPress}
        onFileButtonPress={this.onFileButtonPress}
        onLocationButtonPress={this.onLocationButtonPress}
        onContactButtonPress={this.onContactButtonPress}
        onTakePhotoButtonPress={this.onTakePhotoButtonPress}
        onGalleryItemPress={this.onGalleryItemPress}
      />
    );
  }
}
