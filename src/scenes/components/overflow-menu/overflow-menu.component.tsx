import React from 'react';
import { OverflowMenuElement, OverflowMenuProps } from '@ui-kitten/components';
import { OverflowMenuShowcase } from './overflow-menu-showcase.component';
import { overflowMenuSettings, overflowMenuShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const OverflowMenuScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: OverflowMenuProps): OverflowMenuElement => (
    <OverflowMenuShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={overflowMenuShowcase}
      settings={overflowMenuSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};

