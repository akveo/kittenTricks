import React from 'react';
import { ViewProps } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { Message } from '@src/core/model';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  message: Message;
  children?: React.ReactNode;
}

export type MessageContentProps = ThemedComponentProps & ViewProps & ComponentProps;

class MessageContentComponent extends React.Component<MessageContentProps> {

  public render(): React.ReactNode {
    const { themedStyle, message, children } = this.props;

    if (message.text) {
      return (
        <Text
          style={themedStyle.messageLabel}>
          {message.text}
        </Text>
      );
    } else if (children) {
      return children;
    } else {
      return null;
    }

  }
}

export const MessageContent = withStyles(MessageContentComponent, (theme: ThemeType) => ({
  messageLabel: {
    color: 'white',
    ...textStyle.paragraph,
  },
}));
