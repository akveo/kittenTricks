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
  MoreVerticalIcon,
} from '@src/assets/icons';

type TopNavigationElement = React.ReactElement<TopNavigationProps>;
type TopNavigationActionElement = React.ReactElement<TopNavigationActionProps>;

export const CenterTopNavigation = (props?: TopNavigationProps): TopNavigationElement => {
  return (
    <TopNavigation
      {...props}
      alignment='center'
      title='Title'
      subtitle='Subtitle'
      leftControl={renderLeftControl()}
      rightControls={renderRightControls()}
    />
  );
};

const renderLeftControl = (): TopNavigationActionElement => {
  return (
    <TopNavigationAction icon={BackArrowIcon} />
  );
};

const renderRightControls = (): TopNavigationActionElement[] => {
  return ([
    <TopNavigationAction icon={StarIcon}/>,
    <TopNavigationAction icon={MoreVerticalIcon}/>,
  ]);
};
