import React from 'react';
import { MenuElement, MenuProps } from '@ui-kitten/components';
import { MenuShowcase } from './menu-showcase.component';
import { menuSettings, menuShowcase } from './type';
import { ShowcaseContainer } from '../../../components/showcase-container.component';

export const MenuScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: MenuProps): MenuElement => (
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
