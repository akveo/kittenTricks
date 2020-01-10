import React from 'react';
import { Tab, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { BrandTabBar } from '../../components/brand-tab-bar.component';
import { ArrowIosBackIcon, GridIcon, ListIcon } from '../../components/icons';

export const ArticlesScreen = (props): React.ReactElement => {

  const onTabSelect = (index: number): void => {
    props.navigation.navigate(props.state.routeNames[index]);
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={props.navigation.goBack}
    />
  );

  return (
    <SafeAreaLayout
      insets='top'
      level='2'>
      <TopNavigation
        title='Articles'
        alignment='center'
        leftControl={renderBackAction()}
      />
      <BrandTabBar
        selectedIndex={props.state.index}
        onSelect={onTabSelect}>
        <Tab icon={GridIcon}/>
        <Tab icon={ListIcon}/>
      </BrandTabBar>
    </SafeAreaLayout>
  );
};
