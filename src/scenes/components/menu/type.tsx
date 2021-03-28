import { ImageStyle } from 'react-native'
import { IconElement, MenuProps } from '@ui-kitten/components';
import { StarIcon } from '../../../components/icons';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

interface MenuType {
  title: string;
  accessoryLeft?: (style: ImageStyle) => IconElement;
  disabled?: boolean;
  expanded?: boolean;
}

export interface MenuShowcaseProps extends MenuProps {
  data: MenuGroupType[],
}

export interface MenuGroupType extends MenuType {
  subItems?: MenuType[],
}

const defaultMenuItems: MenuType[] = [
  { title: 'Item 1' },
  { title: 'Item 2' },
  { title: 'Item 3' },
];

const withIconMenuItems: MenuType[] = [
  {
    title: 'Item 1',
    accessoryLeft: StarIcon,
  },
  {
    title: 'Item 2',
    accessoryLeft: StarIcon,
  },
  {
    title: 'Item 3',
    accessoryLeft: StarIcon,
  },
];

const withDisabledItemMenuItems: MenuType[] = [
  {
    title: 'Item 1',
    accessoryLeft: StarIcon,
  },
  {
    title: 'Item 2',
    accessoryLeft: StarIcon,
    disabled: true,
  },
  {
    title: 'Item 3',
    accessoryLeft: StarIcon,
  },
];

const withGroupsMenuItems: MenuGroupType[] = [
  {
    title: 'Item 1',
    accessoryLeft: StarIcon,
  },
  {
    title: 'Item 2',
    accessoryLeft: StarIcon,
    subItems: [
      {
        title: 'Item 21',
        accessoryLeft: StarIcon,
        disabled: true,
      },
      {
        title: 'Item 22',
        accessoryLeft: StarIcon,
      },
      {
        title: 'Item 23',
        accessoryLeft: StarIcon,
      },
    ],
  },
  {
    title: 'Item 3',
    accessoryLeft: StarIcon,
  },
];

const withGroupsExpandedMenuItems: MenuGroupType[] = [
  {
    title: 'Item 1',
    accessoryLeft: StarIcon,
    expanded: true,
    subItems: [
      {
        title: 'Item 11',
        accessoryLeft: StarIcon,
        disabled: true,
      },
      {
        title: 'Item 12',
        accessoryLeft: StarIcon,
      },
      {
        title: 'Item 13',
        accessoryLeft: StarIcon,
      },
    ],
  }
];

const defaultMenu: ComponentShowcaseItem = {
  title: 'Default',
  props: {
    data: defaultMenuItems,
  },
};

const withIconsMenu: ComponentShowcaseItem = {
  title: 'Icon',
  props: {
    data: withIconMenuItems,
  },
};

const withDisabledItemMenu: ComponentShowcaseItem = {
  title: 'Disabled Item',
  props: {
    data: withDisabledItemMenuItems,
  },
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default',
  items: [
    defaultMenu,
    withIconsMenu,
    withDisabledItemMenu,
  ],
};

const withGroupsMenu: ComponentShowcaseItem = {
  title: 'Groups',
  props: {
    data: withGroupsMenuItems,
  },
};

const withExpandedGroupsMenu: ComponentShowcaseItem = {
  title: 'Default expand',
  props: {
    data: withGroupsExpandedMenuItems,
  },
};

const withGroupsSection: ComponentShowcaseSection = {
  title: 'With Groups',
  items: [
    withGroupsMenu,
    withExpandedGroupsMenu,
  ],
};

export const menuShowcase: ComponentShowcase = {
  title: 'Menu',
  sections: [
    defaultSection,
    withGroupsSection,
  ],
};

export const menuSettings: ComponentShowcaseSetting[] = [
  {
    propertyName: 'appearance',
    value: 'default',
  },
  {
    propertyName: 'appearance',
    value: 'noDivider',
  },
];
