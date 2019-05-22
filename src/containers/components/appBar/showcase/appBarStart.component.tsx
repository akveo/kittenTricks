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

export const TopNavigationStart = (props?: TopNavigationProps): TopNavigationElement => {
  return (
    <TopNavigation
      {...props}
      alignment='start'
      title='Application Bar'
      subtitle='Application Bar Subtitle'
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
      onPress={() => Alert.alert('On Right Control 1 Press')}
    />,
    <TopNavigationAction
      icon={StarIcon}
      onPress={() => Alert.alert('On Right Control 2 Press')}
    />,
  ]);
};
