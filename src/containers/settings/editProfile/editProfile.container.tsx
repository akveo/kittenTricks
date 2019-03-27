import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ListItemProps } from '@kitten/ui';
import {
  ArrowIcon,
  EditIcon,
} from '../../../icons';
import { EditProfileComponent } from './editProfile.component';

export class EditProfileContainer extends React.Component<NavigationScreenProps> {

  private routes: ListItemProps[] = [
    {
      title: 'Edit Profile 1',
      description: 'Edit Profile 1',
      icon: EditIcon,
      accessory: ArrowIcon,
    },
    {
      title: 'Edit Profile 2',
      description: 'Edit Profile 2',
      icon: EditIcon,
      accessory: ArrowIcon,
    },

    {
      title: 'Edit Profile 3',
      description: 'Edit Profile 3',
      icon: EditIcon,
      accessory: ArrowIcon,
    },
  ];

  private onCategorySelect = (route: string): void => {
    this.props.navigation.navigate(route);
  };

  public render(): React.ReactNode {
    return (
      <EditProfileComponent
        routes={this.routes}
        onCategorySelect={this.onCategorySelect}
      />
    );
  }
}
