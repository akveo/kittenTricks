import React from 'react';
import { ComponentShowcase, ComponentShowcaseItem, ComponentShowcaseSection } from '../../../model/showcase.model';

const now: Date = new Date();

const defaultRangeDatepicker: ComponentShowcaseItem = {
  title: 'Default',
  props: {
    min: new Date(now.getFullYear() - 12, 0, 1),
    max: new Date(now.getFullYear() + 12, 0, 1),
  },
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default',
  items: [
    defaultRangeDatepicker,
  ],
};

export const rangeDatepickerShowcase: ComponentShowcase = {
  title: 'Range Datepicker',
  sections: [
    defaultSection,
  ],
};
