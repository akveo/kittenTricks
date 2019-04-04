import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ReactionButton } from './reactionButton.component';
import { HeartIcon } from '@src/assets/icons';

interface ComponentProps {

}

type Props = ThemedComponentProps & ViewProps & ComponentProps;

class LikeButtonComponent extends React.Component<Props> {

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
