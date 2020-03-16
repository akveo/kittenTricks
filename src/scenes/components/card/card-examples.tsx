import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import { ImageOverlay } from '../../../components/image-overlay.component';

export const CardDefaultHeader = (props: ViewProps): React.ReactElement => (
  <Layout {...props} level='1'>
    <Text category='h6'>Maldives</Text>
    <Text category='s2'>By Wikipedia</Text>
  </Layout>
);

export const CardCustomHeader = (props: ViewProps): React.ReactElement => (
  <ImageOverlay
    style={[props.style, styles.headerImage]}
    source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg' }}>
    <Text category='h4' status='control'>Maldives</Text>
  </ImageOverlay>
);

export const CardFooter = (props: ViewProps): React.ReactElement => (
  <Layout
    {...props}
    level='1'
    style={[props.style, styles.footerContainer]}>
    <Button
      style={styles.footerControl}
      size='small'
      status='basic'>
      CANCEL
    </Button>
    <Button
      style={styles.footerControl}
      size='small'>
      ACCEPT
    </Button>
  </Layout>
);

const styles = StyleSheet.create({
  headerImage: {
    flex: 1,
    height: 192,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 4,
  },
});
