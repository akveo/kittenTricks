import React from 'react';
import { BackAction, MenuAction, StarAction } from './top-navigation-action-showcase.component';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

const titleTopNavigation: ComponentShowcaseItem = {
  props: {
    title: 'Title',
  },
};

const subtitleTopNavigation: ComponentShowcaseItem = {
  props: {
    ...titleTopNavigation.props,
    subtitle: 'Subtitle',
  },
};

const accessoryLeftTopNavigation: ComponentShowcaseItem = {
  props: {
    ...subtitleTopNavigation.props,
    accessoryLeft: () => <BackAction/>,
  },
};

const accessoryRightTopNavigation: ComponentShowcaseItem = {
  props: {
    ...accessoryLeftTopNavigation.props,
    accessoryRight: () => (
      <React.Fragment>
        <StarAction/>
        <MenuAction/>
      </React.Fragment>
    ),
  },
};

const accessoriesSection: ComponentShowcaseSection = {
  title: 'Accessories',
  items: [
    accessoryLeftTopNavigation,
    accessoryRightTopNavigation,
  ],
};

const subtitleSection: ComponentShowcaseSection = {
  title: 'Subtitle',
  items: [
    subtitleTopNavigation,
  ],
};

const titleSection: ComponentShowcaseSection = {
  title: 'Title',
  items: [
    titleTopNavigation,
  ],
};

export const topNavigationShowcase: ComponentShowcase = {
  title: 'Top Navigation',
  sections: [
    titleSection,
    subtitleSection,
    accessoriesSection,
  ],
};

export const topNavigationSettings: ComponentShowcaseSetting[] = [
  {
    propertyName: 'appearance',
    value: 'default',
  },
  {
    propertyName: 'appearance',
    value: 'control',
  },
  {
    propertyName: 'alignment',
    value: 'start',
  },
  {
    propertyName: 'alignment',
    value: 'center',
  },
];
