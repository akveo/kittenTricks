import React from 'react';
import { Image } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { ListItemProps } from '@kitten/ui';
import { StyleType } from '@kitten/theme';
import { HomeComponent } from './home.component';


export class HomeContainer extends React.Component<NavigationScreenProps> {

  private onPress = (route: string): void => {
    this.props.navigation.navigate(route);
  };

  public render(): React.ReactNode {
    return (
      <HomeComponent
        routes={routes}
        onPress={this.onPress}/>
    );
  }
}

const routes: ListItemProps[] = [
  {
    title: 'Auth',
    description: 'Auth',
    icon: (index: number, style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/lock.png' }}
        style={style}/>,
    accessory: (index: number, style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/arrow-ios-forward.png' }}
        style={style}/>,
  },
  {
    title: 'Social',
    description: 'Social',
    icon: (index: number, style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/heart.png' }}
        style={style}/>,
    accessory: (index: number, style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/arrow-ios-forward.png' }}
        style={style}/>,
  },
  {
    title: 'Articles',
    description: 'Articles',
    icon: (index: number, style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/edit-2.png' }}
        style={style}/>,
    accessory: (index: number, style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/arrow-ios-forward.png' }}
        style={style}/>,
  },
  {
    title: 'Messaging',
    description: 'Messaging',
    icon: (index: number, style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/message-circle.png' }}
        style={style}/>,
    accessory: (index: number, style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/arrow-ios-forward.png' }}
        style={style}/>,
  },
  {
    title: 'Dashboards',
    description: 'Dashboards',
    icon: (index: number, style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/list.png' }}
        style={style}/>,
    accessory: (index: number, style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/arrow-ios-forward.png' }}
        style={style}/>,
  },
  {
    title: 'Other',
    description: 'Other',
    icon: (index: number, style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/more-horizontal.png' }}
        style={style}/>,
    accessory: (index: number, style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/arrow-ios-forward.png' }}
        style={style}/>,
  },
];
