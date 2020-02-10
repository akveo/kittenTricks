import React from 'react';
import {
  StatusBar as RNStatusBar,
  StatusBarProps as RNStatusBarProps,
  ViewProps,
} from 'react-native';
import { styled, StyledComponentProps } from '@ui-kitten/components';

export type StatusBarProps = RNStatusBarProps & StyledComponentProps;

class StatusBarComponent extends React.Component<StatusBarProps> {

  static styledComponentName: string = 'StatusBar';

  public render(): React.ReactElement<ViewProps> {
    const { themedStyle, ...statusBarProps } = this.props;

    return (
      <RNStatusBar
        {...themedStyle}
        {...statusBarProps}
      />
    );
  }
}

export const StatusBar = styled(StatusBarComponent);
