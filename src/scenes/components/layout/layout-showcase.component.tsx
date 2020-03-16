import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, LayoutElement, LayoutProps, Text } from '@ui-kitten/components';

export const LayoutShowcase = (props?: LayoutProps): LayoutElement => (
  <React.Fragment>
    <Layout style={styles.container} level='1'>
      <Text>1</Text>
    </Layout>
    <Layout style={styles.container} level='2'>
      <Text>2</Text>
    </Layout>
    <Layout style={styles.container} level='3'>
      <Text>3</Text>
    </Layout>
    <Layout style={styles.container} level='4'>
      <Text>4</Text>
    </Layout>
  </React.Fragment>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
