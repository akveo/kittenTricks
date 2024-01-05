import React from 'react';
import { StarIcon } from '../../../components/icons';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

const giant: ComponentShowcaseItem = {
  title: 'Giant',
  props: {
    accessoryLeft: StarIcon,
    size: 'giant',
  },
};

const large: ComponentShowcaseItem = {
  title: 'Large',
  props: {
    accessoryLeft: StarIcon,
    size: 'large',
  },
};

const medium: ComponentShowcaseItem = {
  title: 'Medium',
  props: {
    size: 'medium',
  },
};

const small: ComponentShowcaseItem = {
  title: 'Small',
  props: {
    size: 'small',
  },
};

const tiny: ComponentShowcaseItem = {
  title: 'Tiny',
  props: {
    size: 'tiny',
  },
};

const sizeSection: ComponentShowcaseSection = {
  title: 'Size',
  items: [
    giant,
    large,
    medium,
    small,
    tiny,
  ],
};

export const progressBarSettings: ComponentShowcaseSetting[] = [
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

export const progressBarShowcase: ComponentShowcase = {
  title: 'ProgressBar',
  sections: [
    sizeSection,
  ],
};

