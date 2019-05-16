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
  textStyle,
} from '@src/components/common';

interface ComponentProps {
  likes: number;
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
          activeOpacity={0.75}
          onPress={onLikePress}>
          {`${likes}`}
        </LikeButton>
      </ActivityBar>
    );
  }
}

export const ProfileActivityBar = withStyles(ProfileActivityBarComponent, (theme: ThemeType) => ({

  likesLabel: {
    lineHeight: 0,
    marginHorizontal: 0,
    ...textStyle.paragraph,
  },
}));
