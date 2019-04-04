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
    const { themedStyle, iconStyle, ...restProps } = this.props;

    return (
      <ReactionButton
        iconStyle={[themedStyle.icon, iconStyle]}
        icon={MessageCircleIcon}
        {...restProps}
      />
    );
  }
}

export const CommentsButton = withStyles(CommentsButtonComponent, (theme: ThemeType) => ({
  icon: {
    tintColor: '#A6AEBD',
  },
}));
