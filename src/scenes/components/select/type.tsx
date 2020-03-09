import React from 'react';
import { SelectGroup, SelectItem } from '@ui-kitten/components';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';
import { StarIcon } from '../../../components/icons';

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

const disabledSelect: ComponentShowcaseItem = {
  title: 'Disabled',
  props: {
    ...defaultSelect.props,
    disabled: true,
  },
};

const multiSelect: ComponentShowcaseItem = {
  title: 'Default',
  props: {
    ...defaultSelect.props,
    multiSelect: true,
  },
};

const groupsSelect: ComponentShowcaseItem = {
  title: 'Grouping',
  props: {
    children: [
      <SelectGroup title='Group 1'>
        <SelectItem title='Option 1.1'/>
        <SelectItem title='Option 1.2'/>
      </SelectGroup>,
      <SelectGroup title='Group 2'>
        <SelectItem title='Option 2.1'/>
        <SelectItem title='Option 2.2'/>
      </SelectGroup>,
    ],
  },
};

const groupsMultiSelect: ComponentShowcaseItem = {
  title: 'Grouping',
  props: {
    ...groupsSelect.props,
    multiSelect: true,
  },
};

const placeholderSelect: ComponentShowcaseItem = {
  title: 'Placeholder',
  props: {
    ...defaultSelect.props,
    placeholder: 'Place your text',
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
  title: 'Left',
  props: {
    ...defaultSelect.props,
    accessoryLeft: StarIcon,
    accessoryRight: () => null,
  },
};

const accessoryRightSelect: ComponentShowcaseItem = {
  title: 'Right',
  props: {
    ...defaultSelect.props,
    accessoryRight: StarIcon,
  },
};

const optionAccessoryLeftSelect: ComponentShowcaseItem = {
  title: 'Left',
  props: {
    ...defaultSelect.props,
    children: [
      <SelectItem accessoryLeft={StarIcon} title='Option 1'/>,
      <SelectItem accessoryLeft={StarIcon} title='Option 2'/>,
      <SelectItem accessoryLeft={StarIcon} title='Option 3'/>,
      <SelectItem accessoryLeft={StarIcon} title='Option 4'/>,
    ],
  },
};

const optionAccessoryRightSelect: ComponentShowcaseItem = {
  title: 'Right',
  props: {
    ...defaultSelect.props,
    children: [
      <SelectItem accessoryRight={StarIcon} title='Option 1'/>,
      <SelectItem accessoryRight={StarIcon} title='Option 2'/>,
      <SelectItem accessoryRight={StarIcon} title='Option 3'/>,
      <SelectItem accessoryRight={StarIcon} title='Option 4'/>,
    ],
  },
};

const optionAccessoriesSection: ComponentShowcaseSection = {
  title: 'Option Accessories',
  items: [
    optionAccessoryLeftSelect,
    optionAccessoryRightSelect,
  ],
};

const accessoriesSection: ComponentShowcaseSection = {
  title: 'Accessories',
  items: [
    placeholderSelect,
    labelSelect,
    captionSelect,
    accessoryLeftSelect,
    accessoryRightSelect,
  ],
};

const multiSection: ComponentShowcaseSection = {
  title: 'Multi Select',
  items: [
    multiSelect,
    groupsMultiSelect,
  ],
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default',
  items: [
    defaultSelect,
    disabledSelect,
    groupsSelect,
  ],
};

export const selectShowcase: ComponentShowcase = {
  title: 'Select',
  sections: [
    defaultSection,
    multiSection,
    accessoriesSection,
    optionAccessoriesSection,
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

