import React from 'react';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
} from '../../../model/showcase.model';
import { StarIcon } from '../../../components/icons';

const now: Date = new Date();

const defaultDatepicker: ComponentShowcaseItem = {
  title: 'Default',
  props: {},
};

const iconDatepicker: ComponentShowcaseItem = {
  title: 'Icon',
  props: {
    ...defaultDatepicker.props,
    icon: StarIcon,
  },
};

const labelDatepicker: ComponentShowcaseItem = {
  title: 'Label',
  props: {
    ...defaultDatepicker.props,
    label: 'Date of Birth',
  },
};

const captionDatepicker: ComponentShowcaseItem = {
  title: 'Caption',
  props: {
    ...defaultDatepicker.props,
    caption: 'Place your text',
  },
};

const captionIconDatepicker: ComponentShowcaseItem = {
  title: 'Caption Icon',
  props: {
    ...captionDatepicker.props,
    captionIcon: StarIcon,
  },
};

const boundsDatepicker: ComponentShowcaseItem = {
  title: 'Date Bounds',
  props: {
    ...defaultDatepicker.props,
    min: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1),
    max: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1),
  },
};

const backdropDatepicker: ComponentShowcaseItem = {
  title: 'Backdrop',
  props: {
    ...defaultDatepicker.props,
    backdropStyle: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  },
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default',
  items: [
    defaultDatepicker,
  ],
};

const accessoriesSection: ComponentShowcaseSection = {
  title: 'Accessories',
  items: [
    iconDatepicker,
    labelDatepicker,
    captionDatepicker,
    captionIconDatepicker,
  ],
};

const settingsSection: ComponentShowcaseSection = {
  title: 'Settings',
  items: [
    boundsDatepicker,
    backdropDatepicker,
  ],
};

export const datepickerShowcase: ComponentShowcase = {
  title: 'Datepicker',
  sections: [
    defaultSection,
    accessoriesSection,
    settingsSection,
  ],
};
