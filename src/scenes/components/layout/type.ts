import { ComponentShowcase, ComponentShowcaseItem, ComponentShowcaseSection } from '../../../model/showcase.model';

const defaultLayout: ComponentShowcaseItem = {
  props: {},
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Levels',
  items: [
    defaultLayout,
  ],
};

export const layoutShowcase: ComponentShowcase = {
  title: 'Layout',
  sections: [
    defaultSection,
  ],
};
