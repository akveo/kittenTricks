import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Modal, ModalProps, Text } from '@ui-kitten/components';

interface RestartAppModalProps extends Omit<ModalProps, 'children'> {
  onGotItButtonPress: () => void;
}

export const RestartAppModal = (props: RestartAppModalProps): React.ReactElement => {

  const { onGotItButtonPress, ...modalProps } = props;

  return (
    <Modal
      backdropStyle={styles.backdrop}
      {...modalProps}>
      <Layout style={styles.container}>
        <Text category='h4'>
          Restart
        </Text>
        <Text
          style={styles.description}
          appearance='hint'
          category='s1'>
          Please restart the application for switching Design System.
        </Text>
        <Button
          onPress={onGotItButtonPress}>
          GOT IT
        </Button>
      </Layout>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    padding: 16,
    width: 320,
  },
  description: {
    marginTop: 8,
    marginBottom: 24,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
