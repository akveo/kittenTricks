import React, { ReactElement } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  Button,
  Text,
  TextElement,
  Layout,
} from '@ui-kitten/components';

export const CardDefaultHeader = (evaProps): ReactElement => (
  <Layout {...evaProps}>
    <Text category='h6'>Title</Text>
    <Text category='s1'>Description</Text>
  </Layout>
);

export const CardCustomHeader = (): ReactElement => (
  <React.Fragment>
    <Image
      source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg' }}
      style={styles.headerImage}
    />
    <View style={styles.headerTextContainer}>
      <Text category='h6'>
        Title
      </Text>
    </View>
  </React.Fragment>
);

export const CardFooter = (): ReactElement => (
  <View style={styles.footerContainer}>
    <Button
      style={styles.footerControl}
      size='small'
      status='basic'>
      Cancel
    </Button>
    <Button
      style={styles.footerControl}
      size='small'>
      Accept
    </Button>
  </View>
);

export const CardBody = (): TextElement => (
  <Text>
    A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
    Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the
    Milky Way.
  </Text>
);

const styles = StyleSheet.create({
  headerTextContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerImage: {
    flex: 1,
    height: 192,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  footerControl: {
    marginHorizontal: 4,
  },
});
