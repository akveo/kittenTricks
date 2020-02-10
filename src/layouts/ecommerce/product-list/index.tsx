import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tab, TabBar } from '@ui-kitten/components';
import { ProductListScreen } from './product-list.component';

const ProductsTabBar = ({ navigation, state }): React.ReactElement => {

  const onTabSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };

  const renderTab = (route: string): React.ReactElement => (
    <Tab
      key={route}
      title={route.toUpperCase()}
    />
  );

  return (
    <TabBar
      selectedIndex={state.index}
      onSelect={onTabSelect}>
      {state.routeNames.map(renderTab)}
    </TabBar>
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
