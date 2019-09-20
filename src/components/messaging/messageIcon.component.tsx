import React from 'react';
import { ImageProps } from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { DoneAllIconOutline } from '@src/assets/icons';
import { Message } from '@src/core/model';

interface MessageIconProvider {
  icon(style: StyleType): React.ReactElement<ImageProps>;
}

export enum MessageIcons {
  READ = 'read',
  DELIVERED = 'delivered',
}

const messageIcons: { [key in MessageIcons]: MessageIconProvider } = {
  [MessageIcons.READ]: {
    icon(style: StyleType): React.ReactElement<ImageProps> {
      return DoneAllIconOutline({ ...style.messageIndicatorIcon, ...style.messageIndicatorIconRead });
    },
  },
  [MessageIcons.DELIVERED]: {
    icon(style: StyleType): React.ReactElement<ImageProps> {
      return DoneAllIconOutline({ ...style.messageIndicatorIcon, ...style.messageIndicatorIconDelivered });
    },
  },
};

interface ComponentProps {
  message: Message;
}

type MessageIconProps = ThemedComponentProps & ComponentProps;

export class MessageIconComponent extends React.Component<MessageIconProps> {

  private defineMessageStatus(read: boolean, delivered: boolean): MessageIcons | null {
    if (read) {
      return MessageIcons.READ;
    } else if (delivered && !read) {
      return MessageIcons.DELIVERED;
    } else {
      return null;
    }
  }

  public render(): React.ReactElement<ImageProps> {
    const { themedStyle, message } = this.props;

    const messageStatus: MessageIcons = this.defineMessageStatus(message.read, message.delivered);
    const iconProvider: MessageIconProvider = messageIcons[messageStatus];

    return iconProvider ? iconProvider.icon(themedStyle) : null;
  }
}

export const MessageIcon = withStyles(MessageIconComponent, (theme: ThemeType) => ({
  messageIndicatorIcon: {
    width: 13,
    height: 8,
    marginRight: 4,
  },
  messageIndicatorIconRead: {
    tintColor: theme['color-primary-default'],
  },
  messageIndicatorIconDelivered: {
    tintColor: theme['text-hint-color'],
  },
}));
