import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ShareIcon,
} from '@src/assets/icons';
import {
  ReactionButton,
  ReactionButtonProps,
} from './reactionButton.component';

export type ShareButtonProps = ThemedComponentProps & ReactionButtonProps;

class ShareButtonComponent extends React.Component<ShareButtonProps> {

  public render(): React.ReactNode {
    const { themedStyle, iconStyle, ...restProps } = this.props;

    return (
      <ReactionButton
        iconStyle={[themedStyle.icon, iconStyle]}
        icon={ShareIcon}
        {...restProps}
      />
    );
  }
}

export const ShareButton = withStyles(ShareButtonComponent, (theme: ThemeType) => ({
  icon: {
    tintColor: '#A6AEBD',
  },
}));
