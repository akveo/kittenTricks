import React from 'react';
import {
  ImageProps,
  ImageBackgroundProps,
  ImageBackground,
  View,
  Image,
  ViewProps,
} from 'react-native';
import { FileType } from '@src/core/model';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@src/components/common';
import {
  ChatMessage,
  ChatMessageAlignment,
  ComponentProps,
} from './chatMessage.component';
import { PlayCircleIcon } from '@src/assets/icons';

export enum ChatFileMessageAppearance {
  full = 'full',
  preview = 'preview',
}

interface FileComponentProps {
  appearance: ChatFileMessageAppearance;
}

export type ChatFileMessageProps = ComponentProps & FileComponentProps & ThemedComponentProps & ViewProps;

class ChatFileMessageComponent extends React.Component<ChatFileMessageProps> {

  static defaultProps: Partial<ChatFileMessageProps> = {
    alignment: ChatMessageAlignment.left,
  };

  private getAlignmentContainerStyle = (): StyleType => {
    const { themedStyle, alignment } = this.props;

    if (alignment === ChatMessageAlignment.left) {
      return themedStyle.containerLeft;
    } else {
      return themedStyle.containerRight;
    }
  };

  private renderFullMessageAppearanceImage = (): React.ReactElement<ImageProps | ImageBackgroundProps> => {
    const { message, themedStyle } = this.props;

    return message.file.type === FileType.photo ? (
      <Image
        style={themedStyle.fullMessageImage}
        source={{ uri: message.file.preview }}
      />
    ) : (
      <ImageBackground
        style={themedStyle.fullMessageVideo}
        imageStyle={themedStyle.fullMessageVideoPreview}
        source={{ uri: message.file.preview }}>
        {PlayCircleIcon(themedStyle.fullMessageVideoPreviewIcon)}
      </ImageBackground>
    );
  };

  private renderFullMessageAppearance = (): React.ReactElement<ViewProps> => {
    const {
      index,
      alignment,
      themedStyle,
      message,
    } = this.props;

    return (
      <ChatMessage
        index={index}
        alignment={alignment}
        message={message}>
        <Text style={themedStyle.fileNameLabel}>{message.file.name}</Text>
        {this.renderFullMessageAppearanceImage()}
      </ChatMessage>
    );
  };

  private renderPreviewMessageAppearanceImage = (): React.ReactElement<ImageBackgroundProps | ImageProps> => {
    const { message, themedStyle } = this.props;

    return message.file.type === FileType.photo ? (
      <Image
        style={themedStyle.preViewAppearanceImage}
        source={{ uri: message.file.preview }}
      />
    ) : (
      <ImageBackground
        style={themedStyle.preViewAppearanceImage}
        imageStyle={themedStyle.preViewAppearanceImage}
        source={{ uri: message.file.preview }}>
        {PlayCircleIcon(themedStyle.previewVideoPreviewIcon)}
      </ImageBackground>
    );
  };

  private renderPreviewMessageAppearance = (): React.ReactElement<ViewProps> => {
    const { message, themedStyle, alignment } = this.props;

    return (
      <View style={themedStyle.previewAppearanceSubContainer}>
        {alignment === ChatMessageAlignment.right && <Text style={themedStyle.dateLabel}>{message.date}</Text>}
        {this.renderPreviewMessageAppearanceImage()}
        {alignment === ChatMessageAlignment.left && <Text style={themedStyle.dateLabel}>{message.date}</Text>}
      </View>
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, style, appearance } = this.props;

    return (
      <View style={[themedStyle.container, this.getAlignmentContainerStyle(), style]}>
        {appearance === ChatFileMessageAppearance.full && this.renderFullMessageAppearance()}
        {appearance === ChatFileMessageAppearance.preview && this.renderPreviewMessageAppearance()}
      </View>
    );
  }
}

export const ChatFileMessage = withStyles(ChatFileMessageComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerLeft: {
    justifyContent: 'flex-start',
  },
  dateLabel: {
    fontWeight: 'normal',
    color: theme['color-basic-600'],
    fontSize: 11,
    marginHorizontal: 26,
  },
  previewAppearanceSubContainer: {
    flexDirection: 'row',
  },
  containerRight: {
    justifyContent: 'flex-end',
  },
  fileNameLabel: {
    fontSize: 11,
    lineHeight: 16,
    marginRight: 16,
  },
  fullMessageImage: {
    width: 64,
    height: 64,
    borderRadius: 20,
  },
  fullMessageVideo: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullMessageVideoPreview: {
    borderRadius: 20,
  },
  fullMessageVideoPreviewIcon: {
    width: 30,
    height: 30,
    tintColor: theme['color-white'],
  },
  preViewAppearanceImage: {
    width: 124,
    height: 124,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewVideoPreviewIcon: {
    width: 50,
    height: 50,
    tintColor: theme['color-white'],
  },
}));
