import React from 'react';
import { StyleSheet } from 'react-native';
import { ListElement, ListProps } from '@ui-kitten/components';
import { ListShowcase } from './list-showcase';
import { listSettings, listShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const ListScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: ListProps): ListElement => (
    <ListShowcase
      {...props}
      style={[styles.component, props.style]}
    />
  );

  return (
    <ShowcaseContainer
      showcase={listShowcase}
      settings={listSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
});

