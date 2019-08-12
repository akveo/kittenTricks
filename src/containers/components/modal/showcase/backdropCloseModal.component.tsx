import React from 'react';
import { StyleSheet } from 'react-native';
import { ModalProps } from '@kitten/ui';
import { ModalShowcase } from './modalShowcase.component';

type ModalElement = React.ReactElement<ModalProps>;

export const BackdropCloseModal = (): ModalElement => {
  return (
    <ModalShowcase
      style={styles.modal}
      backdropStyle={styles.backdropStyle}
      allowBackdrop={true}
    />
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 200,
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  backdropStyle: {
    backgroundColor: 'black',
    opacity: 0.5,
  },
});
