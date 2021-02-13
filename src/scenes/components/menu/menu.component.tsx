import React from 'react';
import { MenuElement } from '@ui-kitten/components';
import { MenuShowcase } from './menu-showcase.component';
import { menuSettings, menuShowcase, MenuShowcaseProps } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const MenuScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: MenuShowcaseProps): MenuElement => (
    <MenuShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={menuShowcase}
      settings={menuSettings}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};
