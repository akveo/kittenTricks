import React from 'react';
import { StyleSheet } from 'react-native';
import { LayoutElement, LayoutProps } from '@ui-kitten/components';
import { LayoutShowcase } from './layout-showcase.component';
import { layoutSettings, layoutShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const LayoutScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: LayoutProps): LayoutElement => (
    <LayoutShowcase
      {...props}
      style={[styles.component, props.style]}
    />
  );

  return (
    <ShowcaseContainer
      showcase={layoutShowcase}
      settings={layoutSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    height: 256,
  },
});

