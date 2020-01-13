import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Layout, Tab, TabBar, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ProductListScreen } from './product-list.component';
import { ArrowIosBackIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';

const ProductsTabBar = ({ navigation, state }): React.ReactElement => {

  const safeArea = useSafeArea();

  const onTabSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  const renderTab = (route: string): React.ReactElement => (
    <Tab
      key={route}
      title={route.toUpperCase()}
    />
  );

  return (
    <Layout
      style={{ paddingTop: safeArea.top }}
      level='2'>
      <TopNavigation
        alignment='center'
        leftControl={renderBackAction()}
        title='All Products'
      />
      <TabBar
        selectedIndex={state.index}
        onSelect={onTabSelect}>
        {state.routeNames.map(renderTab)}
      </TabBar>
    </Layout>
  );
};

const TopTabs = createMaterialTopTabNavigator();

export default (): React.ReactElement => (
  <TopTabs.Navigator tabBar={(props) => <ProductsTabBar {...props}/>}>
    <TopTabs.Screen name='All' component={ProductListScreen}/>
    <TopTabs.Screen name='Furniture' component={ProductListScreen}/>
    <TopTabs.Screen name='Lighting' component={ProductListScreen}/>
  </TopTabs.Navigator>
);
