import React from 'react';
import {
  TopNavigationAction,
  TopNavigationActionElement,
  TopNavigationActionProps,
} from '@ui-kitten/components';
import { ArrowIosBackIcon, MenuIcon, MoreVerticalIcon, StarIcon } from '../../../components/icons';

type TopNavigationActionShowcaseProps = Omit<TopNavigationActionProps, 'icon'>;

export const BackAction = (props: TopNavigationActionShowcaseProps): TopNavigationActionElement => (
  <TopNavigationAction
    {...props}
    icon={ArrowIosBackIcon}
  />
);

export const RightAction = (props: TopNavigationActionShowcaseProps): TopNavigationActionElement => (
  <>
    <TopNavigationAction
    {...props}
    icon={StarIcon}
  />
  <TopNavigationAction
    {...props}
    icon={MenuIcon}
  />
  </>
);
