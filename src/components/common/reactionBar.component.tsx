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
import { ReactionButtonProps } from './reactionButton.component';

type ChildElement = React.ReactElement<ReactionButtonProps>;

interface ComponentProps {
  children: ChildElement | ChildElement[];
}

export type ReactionBarProps = ThemedComponentProps & ViewProps & ComponentProps;

class ReactionBarComponent extends React.Component<ReactionBarProps> {

  public render(): React.ReactNode {
    const { themedStyle, style, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}
      />
    );
  }
}

export const ReactionBar = withStyles(ReactionBarComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
  },
}));
