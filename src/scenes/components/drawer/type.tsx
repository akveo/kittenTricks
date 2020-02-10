import React from 'react';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
} from '../../../model/showcase.model';


const defaultDrawer: ComponentShowcaseItem = {
  title: 'Default',
  props: {},
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default',
  items: [
    defaultDrawer,
  ],
};

export const drawerShowcase: ComponentShowcase = {
  title: 'Drawer',
  sections: [
    defaultSection,
  ],
};

