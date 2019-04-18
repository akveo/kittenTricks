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
import { Message as MessageModel } from '@src/core/model';
import {
  Alignments,
  getContentAlignment,
} from './type';
import {
  getMessageContent,
  MessageElement,
} from './message.content';

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
