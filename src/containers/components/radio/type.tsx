import React from 'react';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
} from '../common/type';

const giantRadio: ComponentShowcaseItem = {
  title: 'Giant',
  props: {
    size: 'giant',
  },
};

const largeRadio: ComponentShowcaseItem = {
  title: 'Large',
  props: {
    size: 'large',
  },
};

const mediumRadio: ComponentShowcaseItem = {
  title: 'Medium',
  props: {
    size: 'medium',
  },
};

const smallRadio: ComponentShowcaseItem = {
  title: 'Small',
  props: {
    size: 'small',
  },
};

const tinyRadio: ComponentShowcaseItem = {
  title: 'Tiny',
  props: {
    size: 'tiny',
  },
};

const textRadio: ComponentShowcaseItem = {
  title: 'With Text',
  props: {
    text: 'Place your text',
  },
};

const checkedRadio: ComponentShowcaseItem = {
  title: 'Checked',
  props: {
    checked: true,
  },
};

const uncheckedRadio: ComponentShowcaseItem = {
  title: 'Unchecked',
  props: {
    checked: false,
  },
};

const disabledRadio: ComponentShowcaseItem = {
  title: 'Disabled',
  props: {
    disabled: true,
  },
};

const primaryRadio: ComponentShowcaseItem = {
  title: 'Primary',
  props: {
    status: 'primary',
  },
};

const successRadio: ComponentShowcaseItem = {
  title: 'Success',
  props: {
    status: 'success',
  },
};

const warningRadio: ComponentShowcaseItem = {
  title: 'Warning',
  props: {
    status: 'warning',
  },
};

const dangerRadio: ComponentShowcaseItem = {
  title: 'Danger',
  props: {
    status: 'danger',
  },
};

const infoRadio: ComponentShowcaseItem = {
  title: 'Info',
  props: {
    status: 'info',
  },
};

const statusSection: ComponentShowcaseSection = {
  title: 'Status',
  items: [
    primaryRadio,
    successRadio,
    warningRadio,
    dangerRadio,
    infoRadio,
  ],
};

const stateSection: ComponentShowcaseSection = {
  title: 'State',
  items: [
    checkedRadio,
    uncheckedRadio,
    disabledRadio,
  ],
};

const sizeSection: ComponentShowcaseSection = {
  title: 'Size',
  items: [
    giantRadio,
    largeRadio,
    mediumRadio,
    smallRadio,
    tinyRadio,
    textRadio,
  ],
};

export const radioShowcase: ComponentShowcase = {
  sections: [
    sizeSection,
    stateSection,
    statusSection,
  ],
};

