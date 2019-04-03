import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ActivityBar,
  ActivityBarProps,
  LikeButton,
} from '@src/components/common';
import { ButtonAlignments } from '@kitten/ui';

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
          alignment={ButtonAlignments.RIGHT}
          onPress={onLikePress}>
          {likes}
        </LikeButton>
      </ActivityBar>
    );
  }
}

export const ProfileActivityBar = withStyles(ProfileActivityBarComponent, (theme: ThemeType) => ({}));
