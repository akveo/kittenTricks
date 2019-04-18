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
import { Text } from '@src/components/common';
import { ConversationInterlocutor } from './conversationInterlocutor.component';
import { getMessageIcon } from './message.icon';

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

    return lastMessage.length <= 37 ? lastMessage : `${lastMessage.substring(0, 37)}...`;
  };

  private getLastMessageDate = (): string => {
    const { conversation } = this.props;

    return conversation.messages[conversation.messages.length - 1].date;
  };

  private renderLastMessageIcon = (): React.ReactElement<ImageProps> | null => {
    const { conversation, themedStyle } = this.props;
    const lastMessage: Message = conversation.messages[conversation.messages.length - 1];
    const lastMessageRead: boolean = lastMessage.read;
    const lastMessageDelivered: boolean = lastMessage.delivered;

    return getMessageIcon(lastMessageRead, lastMessageDelivered);
  };

  public render(): React.ReactNode {
    const { themedStyle, conversation } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.97}
        style={themedStyle.container}
        onPress={this.onConversation}>
        <View style={themedStyle.leftSection}>
          <ConversationInterlocutor
            style={themedStyle.avatar}
            profile={conversation.interlocutor}/>
          <View>
            <Text style={themedStyle.userLabel}>
              {`${conversation.interlocutor.firstName} ${conversation.interlocutor.lastName}`}
            </Text>
            <Text style={themedStyle.lastMessageLabel} adjustsFontSizeToFit={true}>
              {this.getLastMessageText()}
            </Text>
          </View>
        </View>
        <View style={themedStyle.rightSection}>
          {this.renderLastMessageIcon()}
          <Text style={themedStyle.dateLabel}>
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
    borderBottomColor: '#EDF0F5',
    borderBottomWidth: 1,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 16,
  },
  userLabel: {
    fontWeight: '600',
    color: theme['color-black'],
    fontSize: 13,
    lineHeight: 24,
  },
  lastMessageLabel: {
    fontWeight: 'normal',
    color: theme['color-basic-600'],
    fontSize: 11,
    lineHeight: 16,
  },
  dateLabel: {
    fontWeight: 'normal',
    color: theme['color-black'],
    fontSize: 13,
    lineHeight: 16,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));
