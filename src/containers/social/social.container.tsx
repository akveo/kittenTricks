import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SocialComponent } from './social.component';

export class SocialContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <SocialComponent/>
    );
  }
}
