import React from 'react';
import { StarIcon } from '../../../components/icons';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

// https://facebook.github.io/react-native/movies.json

const defaultAutocomplete: ComponentShowcaseItem = {
  title: 'Default',
  props: {
    placeholder: 'Place your text',
  },
};

const disabledAutocomplete: ComponentShowcaseItem = {
  title: 'Disabled',
  props: {
    ...defaultAutocomplete.props,
    disabled: true,
  },
};

const labelAutocomplete: ComponentShowcaseItem = {
  title: 'Label',
  props: {
    ...defaultAutocomplete.props,
    label: 'Movies',
  },
};

const captionAutocomplete: ComponentShowcaseItem = {
  title: 'Caption',
  props: {
    ...defaultAutocomplete.props,
    caption: 'You should watch at least one',
  },
};

const captionIconAutocomplete: ComponentShowcaseItem = {
  title: 'Caption Icon',
  props: {
    ...captionAutocomplete.props,
    captionIcon: StarIcon,
  },
};

const leftAccessoryAutocomplete: ComponentShowcaseItem = {
  title: 'Left',
  props: {
    ...defaultAutocomplete.props,
    accessoryLeft: StarIcon,
  },
};

const rightIconAutocomplete: ComponentShowcaseItem = {
  title: 'Right',
  props: {
    ...defaultAutocomplete.props,
    accessoryRight: StarIcon,
  },
};

const defaultSection: ComponentShowcaseSection = {
  items: [
    defaultAutocomplete,
    disabledAutocomplete,
  ],
};

const accessoriesSection: ComponentShowcaseSection = {
  title: 'Accessories',
  items: [
    leftAccessoryAutocomplete,
    rightIconAutocomplete,
    labelAutocomplete,
    // captionAutocomplete,
    // captionIconAutocomplete,
  ],
};

export const autocompleteShowcase: ComponentShowcase = {
  title: 'Autocomplete',
  sections: [
    defaultSection,
    accessoriesSection,
  ],
};

export const autocompleteSettings: ComponentShowcaseSetting[] = [
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
