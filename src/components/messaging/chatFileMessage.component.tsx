import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@src/components/common';
import {
  ChatMessage,
  ComponentProps,
} from './chatMessage.component';
import {
  ChatFileMessageAppearance,
  Alignments,
  getContentAlignment,
} from './type';
import { getFileComponent } from './file.component';

interface FileComponentProps {
  appearance: ChatFileMessageAppearance;
}

export type ChatFileMessageProps = ComponentProps & FileComponentProps & ThemedComponentProps & ViewProps;

class ChatFileMessageComponent extends React.Component<ChatFileMessageProps> {

  static defaultProps: Partial<ChatFileMessageProps> = {
    appearance: ChatFileMessageAppearance.full,
  };

  private renderPreviewImage = (): React.ReactElement<any> => {
    const { message, appearance } = this.props;

    return getFileComponent(message.file.type).view(message, appearance);
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
        {this.renderPreviewImage()}
      </ChatMessage>
    );
  };

  private renderPreviewMessageAppearance = (): React.ReactElement<ViewProps> => {
    const { themedStyle, alignment, message } = this.props;
    const style: StyleType = themedStyle
      .previewAppearanceSubContainer(alignment === Alignments['ROW-LEFT']);

    return (
      <View style={style}>
        {this.renderPreviewImage()}
        <Text key={0} style={themedStyle.dateLabel}>{message.date}</Text>
      </View>
    );
  };

  private renderContent = (): React.ReactElement<ViewProps> => {
    const { appearance } = this.props;

    if (appearance === ChatFileMessageAppearance.full) {
      return this.renderFullMessageAppearance();
    } else {
      return this.renderPreviewMessageAppearance();
    }
  };

  public render(): React.ReactNode {
    const { style, alignment } = this.props;
    const flexStyle: StyleType = getContentAlignment(alignment).style();

    return (
      <View style={[flexStyle, style]}>
        {this.renderContent()}
      </View>
    );
  }
}

export const ChatFileMessage = withStyles(ChatFileMessageComponent, (theme: ThemeType) => ({
  dateLabel: {
    fontWeight: 'normal',
    color: theme['color-basic-600'],
    fontSize: 11,
    marginHorizontal: 26,
  },
  previewAppearanceSubContainer: (isLeft: boolean) => ({
    flexDirection: isLeft ? 'row' : 'row-reverse',
  }),
  fileNameLabel: {
    fontSize: 11,
    lineHeight: 16,
    marginRight: 16,
  },
}));
