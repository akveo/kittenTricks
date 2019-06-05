import React from 'react';
import {
  Dimensions,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@kitten/ui';
import { textStyle } from '@src/components/common';
import { Message } from '@src/core/model';
import { MessageContent } from './messageContent.component';

interface ComponentProps {
  message: Message;
  children?: React.ReactNode;
}

export type RigheMessageProps = ThemedComponentProps & ViewProps & ComponentProps;

class RigheMessageComponent extends React.Component<RigheMessageProps> {

  public render(): React.ReactNode {
    const { themedStyle, message, children } = this.props;

    return [
      <Text
        key={0}
        style={themedStyle.dateLabel}
        appearance='hint'
        category='c1'>{message.date}
      </Text>,
      <View style={themedStyle.cloudContainer} key={1}>
        <View style={[themedStyle.cloud, themedStyle.cloudRight]}>
          <MessageContent message={message}>
            {children}
          </MessageContent>
        </View>
        <View style={[themedStyle.triangle, themedStyle.triangleRight]}/>
      </View>,
    ];
  }
}

export const RightMessage = withStyles(RigheMessageComponent, (theme: ThemeType) => ({
  triangle: {
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    backgroundColor: 'transparent',
  },
  triangleRight: {
    transform: [{ rotate: '90deg' }],
    borderBottomColor: theme['text-hint-color'],
  },
  cloudContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateLabel: textStyle.caption1,
  cloud: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    maxWidth: Dimensions.get('window').width - 120,
  },
  cloudRight: {
    left: 3,
    backgroundColor: theme['text-hint-color'],
    marginLeft: 16,
  },
}));
