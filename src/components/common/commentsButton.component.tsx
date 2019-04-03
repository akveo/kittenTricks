import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { MessageCircleIcon } from '@src/assets/icons';
import {
  ReactionButton,
  ReactionButtonProps,
} from './reactionButton.component';

export type CommentsButtonProps = ThemedComponentProps & ReactionButtonProps;

class CommentsButtonComponent extends React.Component<CommentsButtonProps> {

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
