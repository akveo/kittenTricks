import React from 'react';
import {
  NavigationScreenConfig,
  NavigationScreenProps,
} from 'react-navigation';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import {
  ChatFileMessageAppearance,
  ChatHeader,
  ChatHeaderNavigationStateParams,
} from '@src/components/messaging';
import {
  Conversation,
  FileType,
  Message,
  Profile,
} from '@src/core/model';
import { conversation6 } from '@src/core/data/conversation';
import {
  profile1,
  profile2,
} from '@src/core/data/profile';
import { TopNavigationElement } from '@src/core/navigation/navigationParams';
import { imageMessage1 } from '@src/assets/images';
import { Chat2 } from './chat2.component';

interface State {
  newMessageText: string;
  galleryFiles: MediaLibrary.Asset[];
  fileSectionOpened: boolean;
  conversation: Conversation;
}

export class Chat2Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    newMessageText: '',
    galleryFiles: [],
    fileSectionOpened: false,
    conversation: conversation6,
  };

  static navigationOptions: NavigationScreenConfig<any> = ({ navigation, screenProps }) => {
    const chatHeaderConfig: ChatHeaderNavigationStateParams = {
      interlocutor: navigation.getParam('interlocutor'),
      lastSeen: navigation.getParam('lastSeen'),
      onBack: navigation.getParam('onBack'),
      onProfile: navigation.getParam('onProfile'),
    };

    const renderHeader = (headerProps: NavigationScreenProps, config: ChatHeaderNavigationStateParams) => {
      return (
        <ChatHeader
          {...headerProps}
          lastSeen={config.lastSeen}
          interlocutor={config.interlocutor}
          onBack={config.onBack}
          onProfile={config.onProfile}
        />
      );
    };

    navigation.state.params = {
      topNavigation: (headerProps: NavigationScreenProps): TopNavigationElement => {
        return renderHeader(headerProps, chatHeaderConfig);
      },
    };

    return { ...navigation, ...screenProps };
  };

  public componentWillMount(): void {
    MediaLibrary.getAssetsAsync({ first: 6 })
      .then(this.onMediaResponse);
    this.props.navigation.setParams({
      interlocutor: this.state.conversation.interlocutor,
      lastSeen: this.state.conversation.lastSeen,
      onBack: this.onBackPress,
      onProfile: this.onProfilePress,
    });
  }

  private onProfilePress = (profile: Profile): void => {
    this.props.navigation.navigate('Profile 1');
  };

  private onMediaResponse = (data: MediaLibrary.PagedInfo<MediaLibrary.Asset>): void => {
    this.setState({ galleryFiles: data.assets });
  };

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

  private onBackPress = (): void => {
    this.props.navigation.goBack(null);
  };

  private onGalleryItemPress = (item: MediaLibrary.Asset) => {
    // TODO: resolve somehow the possibility of adding a real asset
    const profiles: Profile[] = [profile1, profile2];
    const newMessage: Message = {
      file: {
        type: item.mediaType as FileType,
        preview: imageMessage1,
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
        fileMessageAppearance={ChatFileMessageAppearance.full}
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
