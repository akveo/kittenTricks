import React from 'react';
import { SelectGroup, SelectItem } from '@ui-kitten/components';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';
import { AssetAppIcon, StarIcon } from '../../../components/icons';

const defaultSelect: ComponentShowcaseItem = {
  title: 'Default',
  props: {
    children: [
      <SelectItem title='Option 1'/>,
      <SelectItem title='Option 2'/>,
      <SelectItem title='Option 3'/>,
      <SelectItem title='Option 4'/>,
    ],
  },
};

const multiSelect: ComponentShowcaseItem = {
  title: 'Multi',
  props: {
    ...defaultSelect.props,
    multiSelect: true,
  },
};

const groupsSelect: ComponentShowcaseItem = {
  title: 'Default',
  props: {
    children: [
      <SelectGroup title='Group 1'>
        <SelectItem title='Option 1.1'/>
        <SelectItem title='Option 1.2'/>
      </SelectGroup>,
      <SelectGroup title='Group 2'>
        <SelectItem title='Option 2.1'/>
        <SelectItem title='Option 2.2'/>
      </SelectGroup>
    ],
  },
};

const groupsMultiSelect: ComponentShowcaseItem = {
  title: 'Multi',
  props: {
    ...groupsSelect.props,
    multiSelect: true,
  },
};

const labelSelect: ComponentShowcaseItem = {
  title: 'Label',
  props: {
    ...defaultSelect.props,
    label: 'LABEL',
  },
};

const captionSelect: ComponentShowcaseItem = {
  title: 'Caption',
  props: {
    ...defaultSelect.props,
    caption: 'Caption',
  },
};

const accessoryLeftSelect: ComponentShowcaseItem = {
  title: 'Accessory Left',
  props: {
    ...defaultSelect.props,
    accessoryLeft: StarIcon,
    accessoryRight: () => null,
  },
};

const accessoryRightSelect: ComponentShowcaseItem = {
  title: 'Accessory Right',
  props: {
    ...defaultSelect.props,
    accessoryRight: StarIcon,
  },
};

const renderItemAccessoryLeftSelect: ComponentShowcaseItem = {
  title: 'Accessory Left',
  props: {
    ...defaultSelect.props,
    renderItem: ({ item }) => (
      <SelectItem accessoryLeft={AssetAppIcon} title={item.title}/>
    ),
  },
};

const renderItemAccessoryRightSelect: ComponentShowcaseItem = {
  title: 'Accessory Right',
  props: {
    ...defaultSelect.props,
    renderItem: ({ item }) => (
      <SelectItem accessoryRight={AssetAppIcon} title={item.title}/>
    ),
  },
};

const renderItemSection: ComponentShowcaseSection = {
  title: 'Render Item',
  items: [
    renderItemAccessoryLeftSelect,
    renderItemAccessoryRightSelect,
  ],
};

const accessoriesSection: ComponentShowcaseSection = {
  title: 'Accessories',
  items: [
    labelSelect,
    captionSelect,
    accessoryLeftSelect,
    accessoryRightSelect,
  ],
};

const groupsSection: ComponentShowcaseSection = {
  title: 'Groups',
  items: [
    groupsSelect,
    groupsMultiSelect,
  ],
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default',
  items: [
    defaultSelect,
    multiSelect,
  ],
};

export const selectShowcase: ComponentShowcase = {
  title: 'Select',
  sections: [
    defaultSection,
    groupsSection,
    accessoriesSection,
    renderItemSection,
  ],
};

export const selectSettings: ComponentShowcaseSetting[] = [
  {
    propertyName: 'status',
    value: 'primary',
  },
  {
    propertyName: 'status',
    value: 'success',
  },
  {
    propertyName: 'status',
    value: 'info',
  },
  {
    propertyName: 'status',
    value: 'warning',
  },
  {
    propertyName: 'status',
    value: 'danger',
  },
  {
    propertyName: 'status',
    value: 'basic',
  },
  {
    propertyName: 'status',
    value: 'control',
  },
  {
    propertyName: 'size',
    value: 'small',
  },
  {
    propertyName: 'size',
    value: 'medium',
  },
  {
    propertyName: 'size',
    value: 'large',
  },
];

