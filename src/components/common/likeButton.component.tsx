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
    const { themedStyle, ...restProps } = this.props;

    return (
      <ReactionButton
        {...restProps}
        iconStyle={themedStyle.icon}
        icon={HeartIcon}
      />
    );
  }
}

export const LikeButton = withStyles(LikeButtonComponent, (theme: ThemeType) => ({
  icon: {
    tintColor: '#FF3D71',
  },
}));
