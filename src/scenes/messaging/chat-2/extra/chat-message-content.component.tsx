import React from 'react';
import { Image, StyleSheet, View, ViewProps } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Message } from './data';

export interface ChatMessageContentProps extends ViewProps {
  children: Message;
}

export type ChatMessageContentElement = React.ReactElement<ChatMessageContentProps>;

export const ChatMessageContent = (props: ChatMessageContentProps): React.ReactElement => {

  const { style, children, ...viewProps } = props;

  const renderAttachment = (): React.ReactElement => (
    <Image
      style={styles.attachmentImage}
      source={children.attachment.source}
    />
  );

  const renderText = (): React.ReactElement => (
    <Text
      style={styles.text}
      status='control'>
      {children.text}
    </Text>
  );

  return (
    <View
      {...viewProps}
      style={[styles.container, style]}>
      {children.text && renderText()}
      {children.attachment && renderAttachment()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    minHeight: 48,
    minWidth: 48,
    maxWidth: 276,
    borderRadius: 4,
    // padding: 8,
  },
  text: {
    marginVertical: 12,
    marginHorizontal: 20,
  },
  attachmentImage: {
    width: 124,
    height: 124,
  },
});
