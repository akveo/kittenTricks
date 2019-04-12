import React from 'react';
import {
  View,
  ViewProps,
  Dimensions,
} from 'react-native';
import { Message as MessageModel } from '@src/core/model';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Text,
  TextProps,
} from '@src/components/common';
import {
  Alignments,
  getContentAlignment,
} from '@src/components/messaging';

export interface ComponentProps {
  index?: number;
  message?: MessageModel;
  alignment: Alignments;
  children?: React.ReactElement<any>[];
}

type MessageRightElement = [React.ReactElement<TextProps>, React.ReactElement<ViewProps>];
type MessageLeftElement = [React.ReactElement<ViewProps>, React.ReactElement<TextProps>];

export type ChatMessageProps = & ThemedComponentProps & ViewProps & ComponentProps;

class ChatMessageComponent extends React.Component<ChatMessageProps> {

  private renderMessageContent = (): React.ReactElement<any> | React.ReactElement<any>[] | null => {
    const { message, children, themedStyle } = this.props;

    if (message.text) {
      return (
        <Text style={themedStyle.messageLabel}>{message.text}</Text>
      );
    } else if (children) {
      return children;
    } else {
      return null;
    }
  };

  private renderRightMessage = (): [React.ReactElement<TextProps>, React.ReactElement<ViewProps>] => {
    const { themedStyle, message } = this.props;

    return [
      <Text style={themedStyle.dateLabel} key={0}>{message.date}</Text>,
      <View style={themedStyle.cloudContainer} key={1}>
        <View style={[themedStyle.cloud, themedStyle.cloudRight]}>
          {this.renderMessageContent()}
        </View>
        <View style={[themedStyle.triangle, themedStyle.triangleRight]}/>
      </View>,
    ];
  };

  private renderLeftMessage = (): [React.ReactElement<ViewProps>, React.ReactElement<TextProps>] => {
    const { themedStyle, message } = this.props;

    return [
      <View style={themedStyle.cloudContainer} key={0}>
        <View style={[themedStyle.triangle, themedStyle.triangleLeft]}/>
        <View style={[themedStyle.cloud, themedStyle.cloudLeft]}>
          {this.renderMessageContent()}
        </View>
      </View>,
      <Text style={themedStyle.dateLabel} key={1}>{message.date}</Text>,
    ];
  };

  private renderContent = (): MessageRightElement | MessageLeftElement | null => {
    const { alignment } = this.props;

    if (alignment === Alignments['ROW-LEFT']) {
      return this.renderLeftMessage();
    } else if (alignment === Alignments['ROW-RIGHT']) {
      return this.renderRightMessage();
    } else {
      return null;
    }
  };

  public render(): React.ReactNode {
    const { alignment, style } = this.props;
    const flexStyle: StyleType = getContentAlignment(alignment).style();

    return (
      <View style={[flexStyle, style]}>
        {this.renderContent()}
      </View>
    );
  }
}

export const ChatMessage = withStyles(ChatMessageComponent, (theme: ThemeType) => ({
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
  dateLabel: {
    fontWeight: 'normal',
    color: theme['color-basic-600'],
    fontSize: 11,
  },
  messageLabel: {
    fontWeight: 'normal',
    fontSize: 15,
  },
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
}));
