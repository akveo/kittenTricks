import React from 'react';
import { Alert } from 'react-native';
import {
  TopNavigation,
  TopNavigationProps,
  TopNavigationAction,
  TopNavigationActionProps,
} from '@kitten/ui';
import {
  StarIcon,
  BackArrowIcon,
} from '@src/assets/icons';

type TopNavigationElement = React.ReactElement<TopNavigationProps>;
type TopNavigationActionElement = React.ReactElement<TopNavigationActionProps>;

export const TopNavigationCenter = (props?: TopNavigationProps): TopNavigationElement => {
  return (
    <TopNavigation
      {...props}
      alignment='center'
      title='Application Bar'
      leftControl={renderLeftControl()}
      rightControls={renderRightControls()}
    />
  );
};

const renderLeftControl = (): TopNavigationActionElement => {
  return (
    <TopNavigationAction
      icon={BackArrowIcon}
      onPress={() => Alert.alert('On Left Control Press')}
    />
  );
};

const renderRightControls = (): TopNavigationActionElement[] => {
  return ([
    <TopNavigationAction
      icon={StarIcon}
      onPress={() => Alert.alert('On Right Control Press')}
    />,
  ]);
};
