import React from 'react';
import {
  ImageProps,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  Conversation as ConversationModel,
  Message,
} from '@src/core/model';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { textStyle } from '@src/components/common';
import { MessageIcon } from './messageIcon.component';
import { ConversationInterlocutor } from './conversationInterlocutor.component';

interface ComponentProps {
  index?: number;
  conversation: ConversationModel;
  onConversation: (index: number) => void;
}

export type ConversationProps = & ThemedComponentProps & TouchableOpacityProps & ComponentProps;

class ConversationComponent extends React.Component<ConversationProps> {

  private onConversation = (): void => {
    this.props.onConversation(this.props.index);
  };

  private getLastMessageText = (): string => {
    const { conversation } = this.props;
    const lastMessage: string = conversation.messages[conversation.messages.length - 1].text;

    return lastMessage.length <= 37 ? lastMessage : `${lastMessage.substring(0, 32)}...`;
  };

  private getLastMessageDate = (): string => {
    const { conversation } = this.props;

    return conversation.messages[conversation.messages.length - 1].date;
  };

  private renderLastMessageIcon = (): React.ReactElement<ImageProps> | null => {
    const { conversation } = this.props;
    const lastMessage: Message = conversation.messages[conversation.messages.length - 1];

    return (
      <MessageIcon message={lastMessage}/>
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, style, conversation } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.95}
        style={[themedStyle.container, style]}
        onPress={this.onConversation}>
        <View style={themedStyle.leftSection}>
          <ConversationInterlocutor
            style={themedStyle.avatar}
            profile={conversation.interlocutor}/>
          <View style={themedStyle.messageContainer}>
            <Text
              style={themedStyle.userLabel}
              category='s2'>
              {`${conversation.interlocutor.firstName} ${conversation.interlocutor.lastName}`}
            </Text>
            <Text
              style={themedStyle.lastMessageLabel}
              appearance='hint'
              category='c1'
              adjustsFontSizeToFit={true}>
              {this.getLastMessageText()}
            </Text>
          </View>
        </View>
        <View style={themedStyle.rightSection}>
          {this.renderLastMessageIcon()}
          <Text
            style={themedStyle.dateLabel}
            appearance='hint'
            category='p2'>
            {this.getLastMessageDate()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export const Conversation = withStyles(ConversationComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  messageContainer: {
    // flex: 1,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 16,
  },
  userLabel: textStyle.subtitle,
  lastMessageLabel: textStyle.caption1,
  dateLabel: textStyle.paragraph,
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));
