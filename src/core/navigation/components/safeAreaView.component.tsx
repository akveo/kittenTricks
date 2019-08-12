import React from 'react';
import { Platform } from 'react-native';
import {
  SafeAreaView as SafeAreaViewReactNavigation,
  SafeAreaViewProps,
} from 'react-navigation';
import Constants from 'expo-constants';

export class SafeAreaView extends React.Component<SafeAreaViewProps> {

  private statusBarHeight: number = Platform.select({
    ios: Constants.statusBarHeight,
    android: 0,
  });

  public componentDidMount() {
    // @ts-ignore (private API)
    // https://github.com/expo/expo/issues/2940#issuecomment-445937038

    SafeAreaViewReactNavigation.setStatusBarHeight(this.statusBarHeight);
  }

  public render(): React.ReactElement<SafeAreaViewProps> {
    return (
      <SafeAreaViewReactNavigation {...this.props}/>
    );
  }
}
