import React from 'react';
import { ModalProps } from '@kitten/ui';
import { ModalShowcase } from './modalShowcase.component';

type ModalElement = React.ReactElement<ModalProps>;

export const DefaultModal = (): ModalElement => {
  return (
    <ModalShowcase/>
  );
};
