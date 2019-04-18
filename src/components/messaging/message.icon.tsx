import React from 'react';
import {
  ImageProps,
  StyleSheet,
} from 'react-native';
import { theme } from 'eva/packages/theme/eva';
import { DoneAllIcon } from '@src/assets/icons';

interface MessageIcon {
  icon(): React.ReactElement<ImageProps>;
}

export enum MessageIcons {
  READ = 'read',
  DELIVERED = 'delivered',
}

const messageIcons: { [key in MessageIcons]: MessageIcon } = {
  [MessageIcons.READ]: {
    icon(): React.ReactElement<ImageProps> {
      return DoneAllIcon([styles.messageIndicatorIcon, styles.messageIndicatorIconRead]);
    },
  },
  [MessageIcons.DELIVERED]: {
    icon(): React.ReactElement<ImageProps> {
      return DoneAllIcon([styles.messageIndicatorIcon, styles.messageIndicatorIconDelivered]);
    },
  },
};

export function getMessageIcon(read: boolean,
                               delivered: boolean): React.ReactElement<ImageProps> | null {

  const iconEntity: MessageIcon = messageIcons[defineMessageStatus(read, delivered)];
  return iconEntity ? iconEntity.icon() : null;
}

function defineMessageStatus(read: boolean, delivered: boolean): MessageIcons | null {
  if (read) {
    return MessageIcons.READ;
  } else if (delivered && !read) {
    return MessageIcons.DELIVERED;
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  messageIndicatorIcon: {
    width: 13,
    height: 8,
    marginRight: 4,
  },
  messageIndicatorIconRead: {
    tintColor: theme['color-primary-500'],
  },
  messageIndicatorIconDelivered: {
    tintColor: theme['color-basic-600'],
  },
});
