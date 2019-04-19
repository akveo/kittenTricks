import React from 'react';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
} from '../common/type';

const giantCheckBox: ComponentShowcaseItem = {
  title: 'Giant',
  props: {
    size: 'giant',
  },
};

const largeCheckBox: ComponentShowcaseItem = {
  title: 'Large',
  props: {
    size: 'large',
  },
};

const mediumCheckBox: ComponentShowcaseItem = {
  title: 'Medium',
  props: {
    size: 'medium',
  },
};

const smallCheckBox: ComponentShowcaseItem = {
  title: 'Small',
  props: {
    size: 'small',
  },
};

const tinyCheckBox: ComponentShowcaseItem = {
  title: 'Tiny',
  props: {
    size: 'tiny',
  },
};

const textCheckBox: ComponentShowcaseItem = {
  title: 'With Text',
  props: {
    text: 'Place your text',
  },
};

const checkedCheckBox: ComponentShowcaseItem = {
  title: 'Checked',
  props: {
    checked: true,
  },
};

const uncheckedCheckBox: ComponentShowcaseItem = {
  title: 'Unchecked',
  props: {
    checked: false,
  },
};

const indeterminateCheckBox: ComponentShowcaseItem = {
  title: 'Indeterminate',
  props: {
    indeterminate: true,
  },
};

const disabledCheckBox: ComponentShowcaseItem = {
  title: 'Disabled',
  props: {
    disabled: true,
  },
};

const primaryCheckBox: ComponentShowcaseItem = {
  title: 'Primary',
  props: {
    status: 'primary',
  },
};

const successCheckBox: ComponentShowcaseItem = {
  title: 'Success',
  props: {
    status: 'success',
  },
};

const warningCheckBox: ComponentShowcaseItem = {
  title: 'Warning',
  props: {
    status: 'warning',
  },
};

const dangerCheckBox: ComponentShowcaseItem = {
  title: 'Danger',
  props: {
    status: 'danger',
  },
};

const infoCheckBox: ComponentShowcaseItem = {
  title: 'info',
  props: {
    status: 'info',
  },
};

const statusSection: ComponentShowcaseSection = {
  title: 'Status',
  items: [
    primaryCheckBox,
    successCheckBox,
    warningCheckBox,
    dangerCheckBox,
    infoCheckBox,
  ],
};

const stateSection: ComponentShowcaseSection = {
  title: 'State',
  items: [
    checkedCheckBox,
    uncheckedCheckBox,
    indeterminateCheckBox,
    disabledCheckBox,
  ],
};

const sizeSection: ComponentShowcaseSection = {
  title: 'Size',
  items: [
    giantCheckBox,
    largeCheckBox,
    mediumCheckBox,
    smallCheckBox,
    tinyCheckBox,
    textCheckBox,
  ],
};

export const checkboxShowcase: ComponentShowcase = {
  sections: [
    sizeSection,
    stateSection,
    statusSection,
  ],
};

