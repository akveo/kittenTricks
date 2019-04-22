import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { AddNewCard } from './addNewCard.component';
import { AddPaymentCardFormType } from '@src/components/ecommerce';

export class AddNewCardContainer extends React.Component<NavigationScreenProps> {

  private onAddPress = (value: AddPaymentCardFormType) => {
    this.props.navigation.goBack();
  };

  public render(): React.ReactNode {
    return (
      <AddNewCard onAddPress={this.onAddPress}/>
    );
  }
}
