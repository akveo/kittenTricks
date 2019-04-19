import React from 'react';
import {
  ButtonAlignments,
} from '@kitten/ui';
import { StarIcon } from '@src/assets/icons';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
} from '../common/type';

const giantButton: ComponentShowcaseItem = {
  title: 'Giant',
  props: {
    size: 'giant',
  },
};

const largeButton: ComponentShowcaseItem = {
  title: 'Large',
  props: {
    size: 'large',
  },
};

const mediumButton: ComponentShowcaseItem = {
  title: 'Medium',
  props: {
    size: 'medium',
  },
};

const smallButton: ComponentShowcaseItem = {
  title: 'Small',
  props: {
    size: 'small',
  },
};

const tinyButton: ComponentShowcaseItem = {
  title: 'Tiny',
  props: {
    size: 'tiny',
  },
};

const rightIconButton: ComponentShowcaseItem = {
  title: 'Right Icon',
  props: {
    icon: StarIcon,
    alignment: ButtonAlignments.RIGHT,
  },
};

const leftIconButton: ComponentShowcaseItem = {
  title: 'Left Icon',
  props: {
    icon: StarIcon,
    alignment: ButtonAlignments.LEFT,
  },
};

const filledButton: ComponentShowcaseItem = {
  title: 'Filled',
  props: {
    appearance: 'filled',
  },
};

const outlineButton: ComponentShowcaseItem = {
  title: 'Outline',
  props: {
    appearance: 'outline',
  },
};

const ghostButton: ComponentShowcaseItem = {
  title: 'Ghost',
  props: {
    appearance: 'ghost',
  },
};

const regularButton: ComponentShowcaseItem = {
  title: 'Regular',
  props: {},
};

const disabledButton: ComponentShowcaseItem = {
  title: 'Disabled',
  props: {
    disabled: true,
  },
};

const primaryButton: ComponentShowcaseItem = {
  title: 'Primary',
  props: {
    status: 'primary',
  },
};

const successButton: ComponentShowcaseItem = {
  title: 'Success',
  props: {
    status: 'success',
  },
};

const warningButton: ComponentShowcaseItem = {
  title: 'Warning',
  props: {
    status: 'warning',
  },
};

const dangerButton: ComponentShowcaseItem = {
  title: 'Danger',
  props: {
    status: 'danger',
  },
};

const infoButton: ComponentShowcaseItem = {
  title: 'Info',
  props: {
    status: 'info',
  },
};

const whiteButton: ComponentShowcaseItem = {
  title: 'White',
  props: {
    status: 'white',
  },
};

const statusSection: ComponentShowcaseSection = {
  title: 'Status',
  items: [
    primaryButton,
    successButton,
    warningButton,
    dangerButton,
    infoButton,
    whiteButton,
  ],
};

const stateSection: ComponentShowcaseSection = {
  title: 'State',
  items: [
    regularButton,
    disabledButton,
  ],
};

const styleSection: ComponentShowcaseSection = {
  title: 'Style',
  items: [
    filledButton,
    outlineButton,
    ghostButton,
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
    rightIconButton,
    leftIconButton,
  ],
};

export const buttonShowcase: ComponentShowcase = {
  sections: [
    sizeSection,
    styleSection,
    stateSection,
    statusSection,
  ],
};

