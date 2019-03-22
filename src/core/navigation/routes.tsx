import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  NavigationContainer,
  HeaderProps,
  SafeAreaView,
  NavigationScreenProp,
  NavigationRoute,
} from 'react-navigation';
import { StyleType } from '@kitten/theme';
import {
  TopNavigationBar,
  TopNavigationBarProps,
  TopNavigationBarAction,
  TopNavigationBarActionProps,
} from '@kitten/ui';
import {
  HomeContainer,
  ArticlesContainer,
  AuthContainer,
  DashboardsContainer,
  MessagingContainer,
  OtherContainer,
  SocialContainer,
} from '../../containers';
import {
  StyleSheet,
  Image,
} from 'react-native';

const HomeNavigator: NavigationContainer = createStackNavigator(
  {
    Home: HomeContainer,
    Articles: ArticlesContainer,
    Auth: AuthContainer,
    Dashboards: DashboardsContainer,
    Messaging: MessagingContainer,
    Other: OtherContainer,
    Social: SocialContainer,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
      ...navigation,
      header: (props: HeaderProps) => renderAppBar(props, navigation),
    }),
  },
);

const AppNavigator: NavigationContainer = createStackNavigator(
  {
    Home: HomeNavigator,
  },
  {
    initialRouteName: 'Home',
  },
);

const leftUri: string = 'https://akveo.github.io/eva-icons/fill/png/128/arrow-ios-back.png';

function renderAppBar(props: HeaderProps,
                      navigation: NavigationScreenProp<any>): React.ReactElement<TopNavigationBarProps> {

  const leftControl: React.ReactElement<TopNavigationBarActionProps> | null =
    navigation.state.index !== 0 ?
      (<TopNavigationBarAction
        icon={(style: StyleType) => <Image source={{ uri: leftUri }} style={style}/>}
        onPress={() => props.navigation.goBack(null)}/>) : null;

  const title: string = navigation.state.routes
    .find((route: NavigationRoute, i: number) => i === navigation.state.index)
    .routeName;
  return (
    <SafeAreaView style={styles.header}>
      <TopNavigationBar
        appearance='titleCentered'
        title={title}
        subtitle={navigation.state.index !== 0 ? title : null}
        leftControl={leftControl}
        rightControls={[]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3366FF',
  },
});

export const Router: NavigationContainer = createAppContainer(AppNavigator);
