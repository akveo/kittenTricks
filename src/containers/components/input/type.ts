import { StarIcon } from '@src/assets/icons';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
} from '../common/type';


const defaultInput: ComponentShowcaseItem = {
  title: 'Default',
  props: {},
};

const disabledInput: ComponentShowcaseItem = {
  title: 'Disabled',
  props: {
    disabled: true,
  },
};

const iconInput: ComponentShowcaseItem = {
  title: 'Icon',
  props: {
    icon: StarIcon,
  },
};

const labelInput: ComponentShowcaseItem = {
  title: 'Label',
  props: {
    label: 'Place your text',
  },
};

const captionInput: ComponentShowcaseItem = {
  title: 'Caption',
  props: {
    caption2: 'Place your text',
  },
};

const captionIconInput: ComponentShowcaseItem = {
  title: 'Caption Icon',
  props: {
    caption2: 'Place your text',
    captionIcon: StarIcon,
  },
};

const primaryInput: ComponentShowcaseItem = {
  title: 'Primary',
  props: {
    status: 'primary',
  },
};

const successInput: ComponentShowcaseItem = {
  title: 'Success',
  props: {
    status: 'success',
  },
};

const warningInput: ComponentShowcaseItem = {
  title: 'Warning',
  props: {
    status: 'warning',
  },
};

const dangerInput: ComponentShowcaseItem = {
  title: 'Danger',
  props: {
    status: 'danger',
  },
};

const infoInput: ComponentShowcaseItem = {
  title: 'Info',
  props: {
    status: 'info',
  },
};

const stateSection: ComponentShowcaseSection = {
  title: 'State',
  items: [
    defaultInput,
    disabledInput,
  ],
};

const accessoriesSection: ComponentShowcaseSection = {
  title: 'Accessories',
  items: [
    iconInput,
    labelInput,
    captionInput,
    captionIconInput,
  ],
};

const statusSection: ComponentShowcaseSection = {
  title: 'Status',
  items: [
    primaryInput,
    successInput,
    warningInput,
    dangerInput,
    infoInput,
  ],
};

export const inputShowcase: ComponentShowcase = {
  sections: [
    stateSection,
    accessoriesSection,
    statusSection,
  ],
};

