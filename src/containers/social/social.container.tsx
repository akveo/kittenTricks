import React from 'react';
import { Image } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { ListItemProps } from '@kitten/ui';
import { StyleType } from '@kitten/theme';
import { SocialComponent } from './social.component';

export class SocialContainer extends React.Component<NavigationScreenProps> {

  private onPress = (route: string): void => {
    this.props.navigation.navigate(route);
  };

  public render(): React.ReactNode {
    return (
      <SocialComponent
        routes={routes}
        onPress={this.onPress}/>
    );
  }
}

const routes: ListItemProps[] = [
  {
    title: 'Followers',
    description: 'Followers',
    icon: (index: number, style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/person-done.png' }}
        style={style}/>,
    accessory: (index: number, style: StyleType) =>
      <Image
        source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/arrow-ios-forward.png' }}
        style={style}/>,
  },
];
