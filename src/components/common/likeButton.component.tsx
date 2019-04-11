import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { HeartIcon } from '@src/assets/icons';
import {
  ReactionButton,
  ReactionButtonProps,
} from './reactionButton.component';

export type LikeButtonProps = ThemedComponentProps & ReactionButtonProps;

class LikeButtonComponent extends React.Component<LikeButtonProps> {

  public render(): React.ReactNode {
    const { themedStyle, iconStyle, ...restProps } = this.props;

    return (
      <ReactionButton
        iconStyle={[themedStyle.icon, iconStyle]}
        icon={HeartIcon}
        {...restProps}
      />
    );
  }
}

export const LikeButton = withStyles(LikeButtonComponent, (theme: ThemeType) => ({
  icon: {
    tintColor: theme['color-danger-500'],
  },
}));
