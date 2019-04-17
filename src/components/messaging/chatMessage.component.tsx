import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import { Message as MessageModel } from '@src/core/model';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Alignments,
  getContentAlignment,
  getMessageContent,
  MessageElement,
} from '@src/components/messaging';

export interface ComponentProps {
  index?: number;
  message?: MessageModel;
  alignment: Alignments;
  children?: React.ReactElement<any>[];
}

export type ChatMessageProps = & ThemedComponentProps & ViewProps & ComponentProps;

class ChatMessageComponent extends React.Component<ChatMessageProps> {

  public render(): React.ReactNode {
    const { alignment, style, message, children } = this.props;
    const flexStyle: StyleType = getContentAlignment(alignment).style();
    const content: MessageElement = getMessageContent(alignment).view(message, children);

    return (
      <View style={[flexStyle, style]}>
        {content}
      </View>
    );
  }
}

export const ChatMessage = withStyles(ChatMessageComponent, (theme: ThemeType) => ({}));
