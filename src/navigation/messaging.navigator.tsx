import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Chat1Screen } from '../scenes/messaging/chat-1.component';
import { Chat2Screen } from '../scenes/messaging/chat-2.component';
import { ConversationListScreen } from '../scenes/messaging/conversation-list.component';
import { MessagingGridScreen } from '../scenes/messaging/messaging-grid.component';
import { MessagingListScreen } from '../scenes/messaging/messaging-list.component';
import { MessagingScreen } from '../scenes/messaging/messaging.component';

import { Profile7Screen } from '../scenes/social/profile-7.component';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const MessagingMenuNavigator = (): React.ReactElement => (
  <TopTab.Navigator tabBar={props => <MessagingScreen {...props} />}>
    <TopTab.Screen name='MessagingGrid' component={MessagingGridScreen} />
    <TopTab.Screen name='MessagingList' component={MessagingListScreen} />
  </TopTab.Navigator>
);

export const MessagingNavigator = (): React.ReactElement => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Messaging' component={MessagingMenuNavigator} />
    <Stack.Screen name='Chat1' component={Chat1Screen} />
    <Stack.Screen name='Chat2' component={Chat2Screen} />
    <Stack.Screen name='ConversationList' component={ConversationListScreen} />

    <Stack.Screen name='Profile7' component={Profile7Screen} />
  </Stack.Navigator>
);
