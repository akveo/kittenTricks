import React from 'react';
import { BackAction, RightAction } from './top-navigation-action-showcase.component';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

const rightControlsTopNavigation: ComponentShowcaseItem = {
  props: {
    title: 'Title',
    subtitle: 'Subtitle',
    accessoryLeft: BackAction,
    accessoryRight: RightAction,
  },
};

const leftControlTopNavigation: ComponentShowcaseItem = {
  props: {
    title: 'Title',
    subtitle: 'Subtitle',
    accessoryLeft: BackAction,
  },
};

const subtitleTopNavigation: ComponentShowcaseItem = {
  props: {
    title: 'Title',
    subtitle: 'Subtitle',
  },
};

const titleTopNavigation: ComponentShowcaseItem = {
  props: {
    title: 'Title',
  },
};

const rightControlsSection: ComponentShowcaseSection = {
  title: 'Right Controls',
  items: [
    rightControlsTopNavigation,
  ],
};

const leftControlSection: ComponentShowcaseSection = {
  title: 'Left Control',
  items: [
    leftControlTopNavigation,
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
    leftControlSection,
    rightControlsSection,
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
