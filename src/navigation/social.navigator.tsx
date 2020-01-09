import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SocialScreen } from '../scenes/social/social.component';
import { SocialGridScreen } from '../scenes/social/social-grid.component';
import { SocialListScreen } from '../scenes/social/social-list.component';
import Feed1Screen from '../scenes/social/feed-1';
import Feed2Screen from '../scenes/social/feed-2';
import Profile1Screen from '../scenes/social/profile-1';
import Profile2Screen from '../scenes/social/profile-2';
import Profile3Screen from '../scenes/social/profile-3';
import Profile4Screen from '../scenes/social/profile-4';
import Profile5Screen from '../scenes/social/profile-5';
import Profile6Screen from '../scenes/social/profile-6';
import Profile7Screen from '../scenes/social/profile-7';
import ProfileSettings1Screen from '../scenes/social/profile-settings-1';
import ProfileSettings2Screen from '../scenes/social/profile-settings-2';
import ProfileSettings3Screen from '../scenes/social/profile-settings-3';
import Chat1Screen from '../scenes/messaging/chat-1';
import Chat2Screen from '../scenes/messaging/chat-2';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const SocialMenuNavigator = (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <SocialScreen {...props}/>}>
    <TopTab.Screen name='SocialGrid' component={SocialGridScreen}/>
    <TopTab.Screen name='SocialList' component={SocialListScreen}/>
  </TopTab.Navigator>
);

export const SocialNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Social' component={SocialMenuNavigator}/>
    <Stack.Screen name='Feed1' component={Feed1Screen}/>
    <Stack.Screen name='Feed2' component={Feed2Screen}/>
    <Stack.Screen name='Profile1' component={Profile1Screen}/>
    <Stack.Screen name='Profile2' component={Profile2Screen}/>
    <Stack.Screen name='Profile3' component={Profile3Screen}/>
    <Stack.Screen name='Profile4' component={Profile4Screen}/>
    <Stack.Screen name='Profile5' component={Profile5Screen}/>
    <Stack.Screen name='Profile6' component={Profile6Screen}/>
    <Stack.Screen name='Profile7' component={Profile7Screen}/>
    <Stack.Screen name='ProfileSettings1' component={ProfileSettings1Screen}/>
    <Stack.Screen name='ProfileSettings2' component={ProfileSettings2Screen}/>
    <Stack.Screen name='ProfileSettings3' component={ProfileSettings3Screen}/>

    <Stack.Screen name='Chat1' component={Chat1Screen}/>
    <Stack.Screen name='Chat2' component={Chat2Screen}/>
  </Stack.Navigator>
);
