import React from 'react';
import { View, ViewProps } from 'react-native';
import { StyleService, StyleType, Text, TextElement, useStyleSheet } from '@ui-kitten/components';
import { ChatMessageIndicator } from './chat-message-indicator.component';
import { Message } from './data';

export interface ChatMessageProps extends ViewProps {
  message: Message;
  children: (message: Message, style: StyleType) => React.ReactElement;
}

export type ChatMessageElement = React.ReactElement<ChatMessageProps>;

export const ChatMessage = (props: ChatMessageProps): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  const { style, message, children, ...viewProps } = props;

  const renderDateElement = (): TextElement => (
    <Text
      style={styles.date}
      appearance='hint'
      category='c2'>
      {message.date}
    </Text>
  );

  const renderContentElement = (): React.ReactElement => {
    return children(message, {
      container: [message.reply ? styles.contentOut : styles.contentIn],
    });
  };

  return (
    <View
      {...viewProps}
      style={[message.reply ? styles.containerOut : styles.containerIn, styles.container, style]}>
      <ChatMessageIndicator
        style={[message.reply ? styles.indicatorOut : styles.indicatorIn, styles.indicator]}
        reverse={message.reply}
      />
      {renderContentElement()}
      {renderDateElement()}
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    alignItems: 'center',
  },
  containerIn: {
    flexDirection: 'row',
  },
  containerOut: {
    flexDirection: 'row-reverse',
  },
  contentIn: {
    backgroundColor: 'color-basic-600',
  },
  contentOut: {
    backgroundColor: 'color-primary-default',
  },
  date: {
    marginHorizontal: 18,
  },
  indicator: {
    width: 6,
    height: 6,
  },
  indicatorIn: {
    backgroundColor: 'color-basic-600',
    transform: [
      { rotate: '-90deg' },
      { translateY: 3 },
      { translateX: -12 },
    ],
  },
  indicatorOut: {
    backgroundColor: 'color-primary-default',
    transform: [
      { rotate: '90deg' },
      { translateY: 3 },
      { translateX: 12 },
    ],
  },
});
