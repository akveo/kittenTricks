import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { EcommerceScreen } from '../scenes/ecommerce/ecommerce.component';
import { EcommerceGridScreen } from '../scenes/ecommerce/ecommerce-grid.component';
import { EcommerceListScreen } from '../scenes/ecommerce/ecommerce-list.component';
import AddNewCardScreen from '../scenes/ecommerce/add-new-card';
import ProductDetails1Screen from '../scenes/ecommerce/product-details-1';
import ProductDetails2Screen from '../scenes/ecommerce/product-details-2';
import ProductDetails3Screen from '../scenes/ecommerce/product-details-3';
import ProductDetails4Screen from '../scenes/ecommerce/product-details-4';
import PaymentScreen from '../scenes/ecommerce/payment';
import ProductListScreen from '../scenes/ecommerce/product-list';
import ShoppingCartScreen from '../scenes/ecommerce/shopping-cart';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const EcommerceMenuNavigator = (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <EcommerceScreen {...props}/>}>
    <TopTab.Screen name='EcommerceGrid' component={EcommerceGridScreen}/>
    <TopTab.Screen name='EcommerceList' component={EcommerceListScreen}/>
  </TopTab.Navigator>
);

export const EcommerceNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Ecommerce' component={EcommerceMenuNavigator}/>
    <Stack.Screen name='AddNewCard' component={AddNewCardScreen}/>
    <Stack.Screen name='ProductDetails1' component={ProductDetails1Screen}/>
    <Stack.Screen name='ProductDetails2' component={ProductDetails2Screen}/>
    <Stack.Screen name='ProductDetails3' component={ProductDetails3Screen}/>
    <Stack.Screen name='ProductDetails4' component={ProductDetails4Screen}/>
    <Stack.Screen name='Payment' component={PaymentScreen}/>
    <Stack.Screen name='ProductList' component={ProductListScreen}/>
    <Stack.Screen name='ShoppingCart' component={ShoppingCartScreen}/>
  </Stack.Navigator>
);
