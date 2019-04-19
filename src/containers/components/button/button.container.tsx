import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Button } from './button.component';
import { buttonShowcase } from './type';

export class ButtonContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <Button showcase={buttonShowcase}/>
    );
  }
}
