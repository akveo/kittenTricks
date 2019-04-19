import React from 'react';
import {
  CheckBox,
  CheckBoxProps,
} from '@kitten/ui';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
} from '../common/type';

const giantCheckBox: ComponentShowcaseItem = {
  title: 'Giant',

  view: (): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox checked={true} size='giant'/>
    );
  },
};

const largeCheckBox: ComponentShowcaseItem = {
  title: 'Large',

  view: (): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox checked={true} size='large'/>
    );
  },
};

const mediumCheckBox: ComponentShowcaseItem = {
  title: 'Medium',

  view: (): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox checked={true} size='medium'/>
    );
  },
};

const smallCheckBox: ComponentShowcaseItem = {
  title: 'Small',

  view: (): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox checked={true} size='small'/>
    );
  },
};

const tinyCheckBox: ComponentShowcaseItem = {
  title: 'Tiny',

  view: (): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox checked={true} size='tiny'/>
    );
  },
};

const textCheckBox: ComponentShowcaseItem = {
  title: 'With Text',

  view: (): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox checked={true} text='Place your text'/>
    );
  },
};

const checkedCheckBox: ComponentShowcaseItem = {
  title: 'Checked',

  view: (): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox checked={true}/>
    );
  },
};

const uncheckedCheckBox: ComponentShowcaseItem = {
  title: 'Unchecked',

  view: (): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox checked={false}/>
    );
  },
};

const indeterminateCheckBox: ComponentShowcaseItem = {
  title: 'Indeterminate',

  view: (): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox indeterminate={true}/>
    );
  },
};

const disabledCheckBox: ComponentShowcaseItem = {
  title: 'Disabled',

  view: (): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox checked={true} disabled={true}/>
    );
  },
};

const primaryCheckBox: ComponentShowcaseItem = {
  title: 'Primary',

  view: (): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox checked={true} status='primary'/>
    );
  },
};

const successCheckBox: ComponentShowcaseItem = {
  title: 'Success',

  view: (): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox checked={true} status='success'/>
    );
  },
};

const warningCheckBox: ComponentShowcaseItem = {
  title: 'Warning',

  view: (): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox checked={true} status='warning'/>
    );
  },
};

const dangerCheckBox: ComponentShowcaseItem = {
  title: 'Danger',

  view: (): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox checked={true} status='danger'/>
    );
  },
};

const infoCheckBox: ComponentShowcaseItem = {
  title: 'Danger',

  view: (): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBox checked={true} status='info'/>
    );
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

