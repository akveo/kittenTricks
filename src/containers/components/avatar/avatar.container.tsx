import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { AvatarProps } from '@kitten/ui';
import { AvatarShowcase } from './avatarShowcase.component';
import { Showcase } from '../common/showcase.component';
import { avatarShowcase } from './type';

export class AvatarContainer extends React.Component<NavigationScreenProps> {

  private renderItem = (props: AvatarProps): React.ReactElement<AvatarProps> => {
    return (
      <AvatarShowcase {...props}/>
    );
  };

  public render(): React.ReactNode {
    return (
      <Showcase
        showcase={avatarShowcase}
        renderItem={this.renderItem}
      />
    );
  }
}
