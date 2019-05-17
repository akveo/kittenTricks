import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import { theme } from '@eva/theme-eva';
import {
  Text,
  TextProps,
} from '@kitten/ui';
import { Message } from '@src/core/model';
import { Alignments } from './type';
import { textStyle } from '@src/components/common';

type MessageRightElement = [React.ReactElement<TextProps>, React.ReactElement<ViewProps>];
type MessageLeftElement = [React.ReactElement<ViewProps>, React.ReactElement<TextProps>];
export type MessageElement = MessageLeftElement | MessageRightElement;

function renderMessageContent(message: Message,
                              children?: React.ReactElement<any>[])
  : React.ReactElement<any> | React.ReactElement<any>[] | null {

  if (message.text) {
    return (
      <Text
        style={styles.messageLabel}
        appearance='light'>
        {message.text}
      </Text>
    );
  } else if (children) {
    return children;
  } else {
    return null;
  }
}

function getLeftMessage(message: Message,
                        children?: React.ReactElement<any>[]): MessageLeftElement {

  return [
    <View style={styles.cloudContainer} key={0}>
      <View style={[styles.triangle, styles.triangleLeft]}/>
      <View style={[styles.cloud, styles.cloudLeft]}>
        {renderMessageContent(message, children)}
      </View>
    </View>,
    <Text
      key={1}
      style={styles.dateLabel}
      appearance='hintDark'
      category='c1'>
      {message.date}
    </Text>,
  ];
}

function getRightMessage(message: Message,
                         children?: React.ReactElement<any>[]): MessageRightElement {

  return [
    <Text
      key={0}
      style={styles.dateLabel}
      appearance='hintDark'
      category='c1'>{message.date}
    </Text>,
    <View style={styles.cloudContainer} key={1}>
      <View style={[styles.cloud, styles.cloudRight]}>
        {renderMessageContent(message, children)}
      </View>
      <View style={[styles.triangle, styles.triangleRight]}/>
    </View>,
  ];
}

interface MessageContent {
  view(message: Message, children?: React.ReactElement<any>[]): MessageElement;
}

const messageContents: { [key in Alignments]: MessageContent } = {
  [Alignments['ROW-LEFT']]: {
    view(message: Message, children?: React.ReactElement<any>[]): MessageLeftElement {
      return getLeftMessage(message, children);
    },
  },
  [Alignments['ROW-RIGHT']]: {
    view(message: Message, children?: React.ReactElement<any>[]): MessageRightElement {
      return getRightMessage(message, children);
    },
  },
};

export function getMessageContent(alignment: Alignments) {
  return messageContents[alignment];
}

const styles = StyleSheet.create({
  triangle: {
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    backgroundColor: 'transparent',
  },
  triangleLeft: {
    transform: [{ rotate: '-90deg' }],
    borderBottomColor: theme['color-primary-400'],
  },
  triangleRight: {
    transform: [{ rotate: '90deg' }],
    borderBottomColor: theme['color-basic-500'],
  },
  cloudContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateLabel: textStyle.caption1,
  messageLabel: textStyle.paragraph,
  cloud: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    maxWidth: Dimensions.get('window').width - 120,
  },
  cloudLeft: {
    left: -3,
    backgroundColor: theme['color-primary-400'],
    marginRight: 16,
  },
  cloudRight: {
    left: 3,
    backgroundColor: theme['color-basic-500'],
    marginLeft: 16,
  },
});
