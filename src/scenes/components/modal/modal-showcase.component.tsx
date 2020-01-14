import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Modal, ModalProps, Text } from '@ui-kitten/components';

export const ModalShowcase = (props: ModalProps): React.ReactElement => {

  const [visible, setVisible] = React.useState<boolean>(false);

  const toggleModal = (): void => {
    setVisible(!visible);
  };

  return (
    <React.Fragment>
      <Button onPress={toggleModal}>
        TOGGLE MODAL
      </Button>
      <Modal
        {...props}
        visible={visible}
        onBackdropPress={toggleModal}>
        <Text>Hi! I'm Modal!</Text>
        <Button
          style={styles.button}
          onPress={toggleModal}>
          TOGGLE MODAL
        </Button>
      </Modal>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 4,
  },
});
