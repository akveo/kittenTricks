import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Radio } from './radio.component';
import { radioShowcase } from './type';

export class RadioContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <Radio showcase={radioShowcase}/>
    );
  }
}
