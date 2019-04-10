import React from 'react';
import {
  ImageProps,
  View,
  TouchableOpacity,
  TouchableOpacityProps, ViewProps,
} from 'react-native';
import {
  Conversation as ConversationModel,
  Message as MessageModel,
} from '@src/core/model';
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

interface ComponentProps {
  index?: number;
  message: MessageModel;
  alignment: 'left' | 'right';
}

export type ChatMessageProps = & ThemedComponentProps & ViewProps & ComponentProps;

class ChatMessageComponent extends React.Component<ChatMessageProps> {

  private getAlignmentContainerStyle = (): StyleType => {
    const { themedStyle, alignment } = this.props;

    if (alignment === 'left') {
      return themedStyle.containerLeft;
    } else {
      return themedStyle.containerRight;
    }
  };

  private renderRightMessage = (): [React.ReactElement<TextProps>, React.ReactElement<ViewProps>] => {
    const { themedStyle, message } = this.props;

    return [
      <Text style={themedStyle.dateLabel}>{message.date}</Text>,
      <View style={themedStyle.cloudContainer}>
        <View style={[themedStyle.cloud, themedStyle.cloudRight]}>
          <Text style={themedStyle.messageLabel}>{message.text}</Text>
          <View style={[themedStyle.triangle, themedStyle.triangleRight]}/>
        </View>
      </View>,
    ];
  };

  private renderLeftMessage = (): [React.ReactElement<ViewProps>, React.ReactElement<TextProps>] => {
    const { themedStyle, message } = this.props;

    return [
      <View style={themedStyle.cloudContainer}>
        <View style={[themedStyle.triangle, themedStyle.triangleLeft]}/>
        <View style={[themedStyle.cloud, themedStyle.cloudLeft]}>
          <Text style={themedStyle.messageLabel}>{message.text}</Text>
        </View>
      </View>,
      <Text style={themedStyle.dateLabel}>{message.date}</Text>,
    ];
  };

  public render(): React.ReactNode {
    const { themedStyle, alignment, style } = this.props;

    return (
      <View style={[themedStyle.container, this.getAlignmentContainerStyle(), style]}>
        {alignment === 'left' && this.renderLeftMessage()}
        {alignment === 'right' && this.renderRightMessage()}
      </View>
    );
  }
}

export const ChatMessage = withStyles(ChatMessageComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerLeft: {
    justifyContent: 'flex-start',
  },
  containerRight: {
    justifyContent: 'flex-end',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 10,
    borderBottomWidth: 15,
    borderLeftWidth: 10,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    transform: [{ rotate: '-90deg' }],
  },
  triangleLeft: {
    borderBottomColor: '#598BFF',
  },
  triangleRight: {
    borderBottomColor: '#A6AEBD',
  },
  cloudContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateLabel: {
    fontWeight: 'normal',
    color: '#8992A3',
    fontSize: 11,
  },
  messageLabel: {
    fontWeight: 'normal',
    fontSize: 15,
  },
  cloud: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  cloudLeft: {
    backgroundColor: '#598BFF',
  },
  cloudRight: {
    backgroundColor: '#A6AEBD',
  },
}));
