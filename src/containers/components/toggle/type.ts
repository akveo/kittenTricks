import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
} from '../common/type';

const largeToggle: ComponentShowcaseItem = {
  title: 'Large',
  props: {
    size: 'large',
  },
};

const mediumToggle: ComponentShowcaseItem = {
  title: 'Medium',
  props: {
    size: 'medium',
  },
};

const smallToggle: ComponentShowcaseItem = {
  title: 'Small',
  props: {
    size: 'small',
  },
};

const checkedToggle: ComponentShowcaseItem = {
  title: 'Checked',
  props: {
    value: true,
  },
};

const uncheckedToggle: ComponentShowcaseItem = {
  title: 'Unchecked',
  props: {
    value: false,
  },
};

const disabledToggle: ComponentShowcaseItem = {
  title: 'Disabled',
  props: {
    disabled: true,
  },
};

const primaryToggle: ComponentShowcaseItem = {
  title: 'Primary',
  props: {
    status: 'primary',
  },
};

const successToggle: ComponentShowcaseItem = {
  title: 'Success',
  props: {
    status: 'success',
  },
};

const warningToggle: ComponentShowcaseItem = {
  title: 'Warning',
  props: {
    status: 'warning',
  },
};

const dangerToggle: ComponentShowcaseItem = {
  title: 'Danger',
  props: {
    status: 'danger',
  },
};

const infoToggle: ComponentShowcaseItem = {
  title: 'Info',
  props: {
    status: 'info',
  },
};

const statusSection: ComponentShowcaseSection = {
  title: 'Status',
  items: [
    primaryToggle,
    successToggle,
    warningToggle,
    dangerToggle,
    infoToggle,
  ],
};

const stateSection: ComponentShowcaseSection = {
  title: 'State',
  items: [
    checkedToggle,
    uncheckedToggle,
    disabledToggle,
  ],
};

const sizeSection: ComponentShowcaseSection = {
  title: 'Size',
  items: [
    largeToggle,
    mediumToggle,
    smallToggle,
  ],
};

export const toggleShowcase: ComponentShowcase = {
  sections: [
    sizeSection,
    stateSection,
    statusSection,
  ],
};

