import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { AddNewCard } from './addNewCard.component';
import { AddPaymentCardFormType } from '@src/components/ecommerce';

export class AddNewCardContainer extends React.Component<NavigationStackScreenProps> {

  private onAddPress = (value: AddPaymentCardFormType) => {
    this.props.navigation.goBack();
  };

  public render(): React.ReactNode {
    return (
      <AddNewCard onAddPress={this.onAddPress}/>
    );
  }
}
