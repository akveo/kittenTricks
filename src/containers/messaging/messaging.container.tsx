import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { MessagingComponent } from './messaging.component';

export class MessagingContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <MessagingComponent/>
    );
  }
}
