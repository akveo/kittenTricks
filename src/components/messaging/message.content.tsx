import React from 'react';
import { ViewProps } from 'react-native';
import { Message } from '@src/core/model';
import { LeftMessage } from './leftMessage.component';
import { RightMessage } from './rightMessage.component';
import { Alignments } from './type';

export type MessageElement = React.ReactElement<ViewProps>;

interface MessageContent {
  view(message: Message, children?: React.ReactElement<any>[]): MessageElement;
}

const messageContents: { [key in Alignments]: MessageContent } = {
  [Alignments['ROW-LEFT']]: {
    view(message: Message, children?: React.ReactElement<any>[]): MessageElement {
      return (
        <LeftMessage message={message}>
          {children}
        </LeftMessage>
      );
    },
  },
  [Alignments['ROW-RIGHT']]: {
    view(message: Message, children?: React.ReactElement<any>[]): MessageElement {
      return (
        <RightMessage message={message}>
          {children}
        </RightMessage>
      );
    },
  },
};

export function getMessageContent(alignment: Alignments) {
  return messageContents[alignment];
}
