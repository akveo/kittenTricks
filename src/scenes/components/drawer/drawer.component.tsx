import React from 'react';
import { StyleSheet } from 'react-native';
import { ButtonProps, DrawerElement } from '@ui-kitten/components';
import { DrawerShowcase } from './drawer-showcase.component';
import { drawerShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const DrawerScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: ButtonProps): DrawerElement => (
    <DrawerShowcase
      {...props}
      style={[styles.component, props.style]}
      onPress={navigation.toggleDrawer}
    />
  );

  return (
    <ShowcaseContainer
      showcase={drawerShowcase}
      renderItem={renderItem}
      onBackPress={() => navigation.goBack()}
    />
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
});

