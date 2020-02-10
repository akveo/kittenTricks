import React from 'react';
import {
  TopNavigationAction,
  TopNavigationActionElement,
  TopNavigationActionProps,
} from '@ui-kitten/components';
import { ArrowIosBackIcon, MoreVerticalIcon, StarIcon } from '../../../components/icons';

type TopNavigationActionShowcaseProps = Omit<TopNavigationActionProps, 'icon'>;

export const BackAction = (props: TopNavigationActionShowcaseProps): TopNavigationActionElement => (
  <TopNavigationAction
    {...props}
    icon={ArrowIosBackIcon}
  />
);

export const MenuAction = (props: TopNavigationActionShowcaseProps): TopNavigationActionElement => (
  <TopNavigationAction
    {...props}
    icon={MoreVerticalIcon}
  />
);

export const StarAction = (props: TopNavigationActionShowcaseProps): TopNavigationActionElement => (
  <TopNavigationAction
    {...props}
    icon={StarIcon}
  />
);
