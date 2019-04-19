import React from 'react';
import {
  Button,
  ButtonAlignments,
  ButtonProps,
} from '@kitten/ui';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
} from '../common/type';
import { StarIcon } from '@src/assets/icons';

const giantButton: ComponentShowcaseItem = {
  title: 'Giant',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button size='giant'>BUTTON</Button>
    );
  },
};

const largeButton: ComponentShowcaseItem = {
  title: 'Large',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button size='large'>BUTTON</Button>
    );
  },
};

const mediumButton: ComponentShowcaseItem = {
  title: 'Medium',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button size='medium'>BUTTON</Button>
    );
  },
};

const smallButton: ComponentShowcaseItem = {
  title: 'Small',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button size='small'>BUTTON</Button>
    );
  },
};

const tinyButton: ComponentShowcaseItem = {
  title: 'Tiny',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button size='tiny'>BUTTON</Button>
    );
  },
};

const rightIconButton: ComponentShowcaseItem = {
  title: 'Right Icon',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button
        alignment={ButtonAlignments.RIGHT}
        icon={StarIcon}>
        BUTTON
      </Button>
    );
  },
};

const leftIconButton: ComponentShowcaseItem = {
  title: 'Left Icon',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button
        alignment={ButtonAlignments.LEFT}
        icon={StarIcon}>
        BUTTON
      </Button>
    );
  },
};

const filledButton: ComponentShowcaseItem = {
  title: 'Filled',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button appearance='filled'>BUTTON</Button>
    );
  },
};

const outlineButton: ComponentShowcaseItem = {
  title: 'Outline',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button appearance='outline'>BUTTON</Button>
    );
  },
};

const ghostButton: ComponentShowcaseItem = {
  title: 'Ghost',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button appearance='ghost'>BUTTON</Button>
    );
  },
};

const regularButton: ComponentShowcaseItem = {
  title: 'Regular',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button>BUTTON</Button>
    );
  },
};

const disabledButton: ComponentShowcaseItem = {
  title: 'Disabled',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button disabled={true}>BUTTON</Button>
    );
  },
};

const primaryButton: ComponentShowcaseItem = {
  title: 'Primary',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button status='primary'>BUTTON</Button>
    );
  },
};

const successButton: ComponentShowcaseItem = {
  title: 'Success',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button status='success'>BUTTON</Button>
    );
  },
};

const warningButton: ComponentShowcaseItem = {
  title: 'Warning',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button status='warning'>BUTTON</Button>
    );
  },
};

const dangerButton: ComponentShowcaseItem = {
  title: 'Danger',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button status='danger'>BUTTON</Button>
    );
  },
};

const infoButton: ComponentShowcaseItem = {
  title: 'Danger',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button status='info'>BUTTON</Button>
    );
  },
};

const whiteButton: ComponentShowcaseItem = {
  title: 'White',

  view: (): React.ReactElement<ButtonProps> => {
    return (
      <Button status='white'>BUTTON</Button>
    );
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

