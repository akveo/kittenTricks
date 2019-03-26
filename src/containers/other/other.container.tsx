import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { OtherComponent } from './other.component';

export class OtherContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <OtherComponent/>
    );
  }
}
