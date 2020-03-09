import React from 'react';
import { MenuGroup, MenuItem } from '@ui-kitten/components';
import { StarIcon } from '../../../components/icons';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

const defaultMenu: ComponentShowcaseItem = {
  title: 'Default',
  props: {
    children: [
      <MenuItem title='Users'/>,
      <MenuItem title='Orders'/>,
      <MenuItem title='Transactions'/>,
    ],
  },
};

const disabledMenu: ComponentShowcaseItem = {
  title: 'Disabled Item',
  props: {
    children: [
      <MenuItem title='Users' accessoryLeft={StarIcon}/>,
      <MenuItem title='Orders' accessoryLeft={StarIcon}/>,
      <MenuItem title='Transactions' disabled={true} accessoryLeft={StarIcon}/>,
    ],
  },
};

const leftAccessoryMenu: ComponentShowcaseItem = {
  title: 'Left',
  props: {
    children: [
      <MenuItem title='Users' accessoryLeft={StarIcon}/>,
      <MenuItem title='Orders' accessoryLeft={StarIcon}/>,
      <MenuItem title='Transactions' accessoryLeft={StarIcon}/>,
    ],
  },
};

const rightAccessoryMenu: ComponentShowcaseItem = {
  title: 'Right',
  props: {
    children: [
      <MenuItem title='Users' accessoryRight={StarIcon}/>,
      <MenuItem title='Orders' accessoryRight={StarIcon}/>,
      <MenuItem title='Transactions' accessoryRight={StarIcon}/>,
    ],
  },
};

const groupedMenu: ComponentShowcaseItem = {
  title: 'Groups',
  props: {
    children: [
      <MenuGroup title='Certificates'>
        <MenuItem title='iOS Distribution' accessoryRight={StarIcon}/>
        <MenuItem title='iOS Development' accessoryRight={StarIcon}/>
      </MenuGroup>,
      <MenuGroup title='Devices'>
        <MenuItem title='iPhone 11 Pro Max' accessoryRight={StarIcon}/>
        <MenuItem title='iPhone 11 Pro' accessoryRight={StarIcon}/>
        <MenuItem title='iPhone 11' accessoryRight={StarIcon}/>
      </MenuGroup>,
    ],
  },
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default',
  items: [
    defaultMenu,
    disabledMenu,
  ],
};

const accessoriesSection: ComponentShowcaseSection = {
  title: 'Accessories',
  items: [
    leftAccessoryMenu,
    rightAccessoryMenu,
  ],
};

const groupedSection: ComponentShowcaseSection = {
  title: 'Groups',
  items: [
    groupedMenu,
  ],
};

export const menuShowcase: ComponentShowcase = {
  title: 'Menu',
  sections: [
    defaultSection,
    accessoriesSection,
    groupedSection,
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
