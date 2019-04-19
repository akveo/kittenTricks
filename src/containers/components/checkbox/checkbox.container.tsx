import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { CheckBox } from './checkbox.component';
import { checkboxShowcase } from './type';

export class CheckBoxContainer extends React.Component<NavigationScreenProps> {

  public render(): React.ReactNode {
    return (
      <CheckBox showcase={checkboxShowcase}/>
    );
  }
}
