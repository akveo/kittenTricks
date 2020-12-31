import React from 'react';
import { StarIcon } from '../../../components/icons';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

const defaultButton: ComponentShowcaseItem = {
  title: 'Default',
  props: {},
};

const disabledButton: ComponentShowcaseItem = {
  title: 'Disabled',
  props: {
    disabled: true,
  },
};

const leftIconButton: ComponentShowcaseItem = {
  title: 'Left Icon',
  props: {
    accessoryLeft: StarIcon,
  },
};

const rightIconButton: ComponentShowcaseItem = {
  title: 'Right Icon',
  props: {
    accessoryLeft: StarIcon,
    style: {
      flexDirection: 'row-reverse',
    },
  },
};

const disabledIconButton: ComponentShowcaseItem = {
  title: 'Disabled',
  props: {
    accessoryLeft: StarIcon,
    disabled: true,
  },
};

const giantButton: ComponentShowcaseItem = {
  title: 'Giant',
  props: {
    accessoryLeft: StarIcon,
    size: 'giant',
  },
};

const largeButton: ComponentShowcaseItem = {
  title: 'Large',
  props: {
    accessoryLeft: StarIcon,
    size: 'large',
  },
};

const mediumButton: ComponentShowcaseItem = {
  title: 'Medium',
  props: {
    accessoryLeft: StarIcon,
    size: 'medium',
  },
};

const smallButton: ComponentShowcaseItem = {
  title: 'Small',
  props: {
    accessoryLeft: StarIcon,
    size: 'small',
  },
};

const tinyButton: ComponentShowcaseItem = {
  title: 'Tiny',
  props: {
    accessoryLeft: StarIcon,
    size: 'tiny',
  },
};
const textSection: ComponentShowcaseSection = {
  title: 'Text',
  items: [
    defaultButton,
    disabledButton,
  ],
};

const iconSection: ComponentShowcaseSection = {
  title: 'Icon',
  items: [
    leftIconButton,
    rightIconButton,
    disabledIconButton,
  ],
};

const sizeSection: ComponentShowcaseSection = {
  title: 'Size',
  items: [
    giantButton,
    largeButton,
    mediumButton,
    smallButton,
    tinyButton,
  ],
};

export const buttonShowcase: ComponentShowcase = {
  title: 'Button',
  sections: [
    textSection,
    iconSection,
    sizeSection,
  ],
};

export const buttonSettings: ComponentShowcaseSetting[] = [
  {
    propertyName: 'appearance',
    value: 'filled',
  },
  {
    propertyName: 'appearance',
    value: 'outline',
  },
  {
    propertyName: 'appearance',
    value: 'ghost',
  },
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
    value: 'control',
  },
  {
    propertyName: 'status',
    value: 'basic',
  },
];

