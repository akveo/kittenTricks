import React from 'react';
import { ViewProps } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ReactionButton } from './reactionButton.component';
import { MessageCircleIcon } from '@src/assets/icons';

type Props = ThemedComponentProps & ViewProps;

class CommentsButtonComponent extends React.Component<Props> {

  public render(): React.ReactNode {
    const { themedStyle, ...restProps } = this.props;

    return (
      <ReactionButton
        {...restProps}
        iconStyle={themedStyle.icon}
        icon={MessageCircleIcon}
      />
    );
  }
}

export const CommentsButton = withStyles(CommentsButtonComponent, (theme: ThemeType) => ({
  icon: {
    tintColor: '#A6AEBD',
  },
}));
