import React from 'react';
import {
  Radio,
  RadioGroup,
  RadioProps,
} from '@kitten/ui';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
} from '../common/type';

const giantRadio: ComponentShowcaseItem = {
  title: 'Giant',

  view: (): React.ReactElement<RadioProps> => {
    return (
      <Radio checked={true} size='giant'/>
    );
  },
};

const largeRadio: ComponentShowcaseItem = {
  title: 'Large',

  view: (): React.ReactElement<RadioProps> => {
    return (
      <Radio checked={true} size='large'/>
    );
  },
};

const mediumRadio: ComponentShowcaseItem = {
  title: 'Medium',

  view: (): React.ReactElement<RadioProps> => {
    return (
      <Radio checked={true} size='medium'/>
    );
  },
};

const smallRadio: ComponentShowcaseItem = {
  title: 'Small',

  view: (): React.ReactElement<RadioProps> => {
    return (
      <Radio checked={true} size='small'/>
    );
  },
};

const tinyRadio: ComponentShowcaseItem = {
  title: 'Tiny',

  view: (): React.ReactElement<RadioProps> => {
    return (
      <Radio checked={true} size='tiny'/>
    );
  },
};

const textRadio: ComponentShowcaseItem = {
  title: 'With Text',

  view: (): React.ReactElement<RadioProps> => {
    return (
      <Radio checked={true} text='Place your text'/>
    );
  },
};

const checkedRadio: ComponentShowcaseItem = {
  title: 'Checked',

  view: (): React.ReactElement<RadioProps> => {
    return (
      <Radio checked={true}/>
    );
  },
};

const uncheckedRadio: ComponentShowcaseItem = {
  title: 'Unchecked',

  view: (): React.ReactElement<RadioProps> => {
    return (
      <Radio checked={false}/>
    );
  },
};

const disabledRadio: ComponentShowcaseItem = {
  title: 'Disabled',

  view: (): React.ReactElement<RadioProps> => {
    return (
      <Radio checked={true} disabled={true}/>
    );
  },
};

const primaryRadio: ComponentShowcaseItem = {
  title: 'Primary',

  view: (): React.ReactElement<RadioProps> => {
    return (
      <Radio checked={true} status='primary'/>
    );
  },
};

const successRadio: ComponentShowcaseItem = {
  title: 'Success',

  view: (): React.ReactElement<RadioProps> => {
    return (
      <Radio checked={true} status='success'/>
    );
  },
};

const warningRadio: ComponentShowcaseItem = {
  title: 'Warning',

  view: (): React.ReactElement<RadioProps> => {
    return (
      <Radio checked={true} status='warning'/>
    );
  },
};

const dangerRadio: ComponentShowcaseItem = {
  title: 'Danger',

  view: (): React.ReactElement<RadioProps> => {
    return (
      <Radio checked={true} status='danger'/>
    );
  },
};

const infoRadio: ComponentShowcaseItem = {
  title: 'Danger',

  view: (): React.ReactElement<RadioProps> => {
    return (
      <Radio checked={true} status='info'/>
    );
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

