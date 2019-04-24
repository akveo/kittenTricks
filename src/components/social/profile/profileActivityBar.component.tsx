import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ButtonIconAlignments } from '@kitten/ui';
import {
  ActivityBar,
  ActivityBarProps,
  LikeButton,
} from '@src/components/common';

interface ComponentProps {
  likes: React.ReactText;
  onLikePress: () => void;
}

export type ProfileActivityBarProps = ThemedComponentProps & ActivityBarProps & ComponentProps;

class ProfileActivityBarComponent extends React.Component<ProfileActivityBarProps> {

  public render(): React.ReactNode {
    const { themedStyle, likes, onLikePress, children, ...restProps } = this.props;

    return (
      <ActivityBar {...restProps}>
        {children}
        <LikeButton
          style={themedStyle.likeButton}
          iconAlignment={ButtonIconAlignments.RIGHT}
          onPress={onLikePress}>
          {likes}
        </LikeButton>
      </ActivityBar>
    );
  }
}

export const ProfileActivityBar = withStyles(ProfileActivityBarComponent, (theme: ThemeType) => ({
  likeButton: {
    flex: 0.25,
  },
}));
