import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigationElement, BottomNavigationProps } from '@ui-kitten/components';
import { BottomNavigationShowcase } from './bottom-navigation-showcase.component';
import { bottomNavigationSettings, bottomNavigationShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const BottomNavigationScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: BottomNavigationProps): BottomNavigationElement => (
    <BottomNavigationShowcase
      {...props}
      style={styles.bottomNavigation}
    />
  );

  return (
    <ShowcaseContainer
      showcase={bottomNavigationShowcase}
      settings={bottomNavigationSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}>
    </ShowcaseContainer>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    flex: 1,
  },
});
