import React from 'react';
import {
  StatusBar as RNStatusBar,
  StatusBarProps as RNStatusBarProps,
  ViewProps,
} from 'react-native';
import { styled, StyledComponentProps } from '@ui-kitten/components';

export type StatusBarProps = RNStatusBarProps & StyledComponentProps;

@styled('StatusBar')
class StatusBarComponent extends React.Component<StatusBarProps> {
  public render(): React.ReactElement<ViewProps> {
    const { ...statusBarProps } = this.props;

    return <RNStatusBar {...statusBarProps} />;
  }
}

export const StatusBar = StatusBarComponent;
