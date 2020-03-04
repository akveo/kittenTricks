import React from 'react';
import { CardCustomHeader, CardDefaultHeader, CardFooter } from './card-examples';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';

const defaultCard: ComponentShowcaseItem = {
  props: {},
};

const headerCard: ComponentShowcaseItem = {
  props: {
    ...defaultCard.props,
    header: CardDefaultHeader,
  },
};

const headerFooterCard: ComponentShowcaseItem = {
  props: {
    ...headerCard.props,
    footer: CardFooter,
  },
};

const customHeaderCard: ComponentShowcaseItem = {
  props: {
    ...defaultCard.props,
    header: CardCustomHeader,
  },
};

const accentCard: ComponentShowcaseItem = {
  props: {
    ...defaultCard.props,
    status: 'basic',
  },
};

const accentSection: ComponentShowcaseSection = {
  title: 'Accent',
  items: [
    accentCard,
  ],
};

const headerFooterSection: ComponentShowcaseSection = {
  title: 'Header & Footer',
  items: [
    headerCard,
    headerFooterCard,
    customHeaderCard,
  ],
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default',
  items: [
    defaultCard,
  ],
};

export const cardShowcase: ComponentShowcase = {
  title: 'Card',
  sections: [
    defaultSection,
    headerFooterSection,
    accentSection,
  ],
};

export const cardSettings: ComponentShowcaseSetting[] = [
  {
    propertyName: 'appearance',
    value: 'outline',
  },
  {
    propertyName: 'appearance',
    value: 'filled',
  },
  {
    propertyName: 'status',
    value: 'basic',
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
];
