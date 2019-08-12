import React from 'react';
import {
  TopNavigation,
  TopNavigationProps,
  TopNavigationAction,
  TopNavigationActionProps,
} from '@kitten/ui';
import {
  StarIconFill,
  ArrowIosBackFill,
  MoreVerticalIconFill,
} from '@src/assets/icons';

type TopNavigationElement = React.ReactElement<TopNavigationProps>;
type TopNavigationActionElement = React.ReactElement<TopNavigationActionProps>;

export const StartTopNavigation = (props?: TopNavigationProps): TopNavigationElement => {
  return (
    <TopNavigation
      {...props}
      alignment='start'
      title='Title'
      subtitle='Subtitle'
      leftControl={renderLeftControl()}
      rightControls={renderRightControls()}
    />
  );
};

const renderLeftControl = (): TopNavigationActionElement => {
  return (
    <TopNavigationAction icon={ArrowIosBackFill}/>
  );
};

const renderRightControls = (): TopNavigationActionElement[] => {
  return ([
    <TopNavigationAction icon={StarIconFill}/>,
    <TopNavigationAction icon={MoreVerticalIconFill}/>,
  ]);
};
