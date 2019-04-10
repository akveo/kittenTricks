import React from 'react';
import { ListRenderItemInfo, View, Text } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { List } from '@kitten/ui';
import { Conversation as ConversationModel } from '@src/core/model';

interface ComponentProps {
  conversation: ConversationModel;
}

export type Chat1ComponentProps = ThemedComponentProps & ComponentProps;

class Chat1Component extends React.Component<Chat1ComponentProps> {

  public render(): React.ReactNode {
    const { themedStyle, conversation } = this.props;

    return (
      <View/>
    );
  }
}

export const Chat1 = withStyles(Chat1Component, (theme: ThemeType) => ({

}));

