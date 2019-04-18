import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { AddNewCard } from './addNewCard.component';
import {
  CardNumberValidator,
  ExpirationDateValidator,
  CvvValidator,
  CardholderNameValidator,
} from '@src/components/ecommerce';

interface State {
  cardNumber: string;
  expireDate: string;
  cvv: string;
  cardholderName: string;
}

export class AddNewCardContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    cardNumber: '',
    expireDate: '',
    cvv: '',
    cardholderName: '',
  };

  private isFormValid = (): boolean => {
    const {
      cardNumber,
      cardholderName,
      cvv,
      expireDate,
    } = this.state;

    return CardholderNameValidator(cardholderName) &&
      CvvValidator(cvv) &&
      ExpirationDateValidator(expireDate) &&
      CardNumberValidator(cardNumber);
  };

  private onAddNewCardPress = (): void => {
    if (this.isFormValid()) {

    }
  };

  private onCardNumberChange = (value: string): void => {
    this.setState({ cardNumber: value });
  };

  private onExpirationDateChange = (value: string): void => {
    this.setState({ expireDate: value });
  };

  private onCvvChange = (value: string): void => {
    this.setState({ cvv: value });
  };

  private onCardHolderNameChange = (value: string): void => {
    this.setState({ cardholderName: value });
  };

  public render(): React.ReactNode {
    return (
      <AddNewCard
        cardNumber={this.state.cardNumber}
        expireDate={this.state.expireDate}
        cvv={this.state.cvv}
        cardholderName={this.state.cardholderName}
        isFormValid={this.isFormValid()}
        onCardNumberChange={this.onCardNumberChange}
        onExpirationDateChange={this.onExpirationDateChange}
        onCvvChange={this.onCvvChange}
        onCardHolderNameChange={this.onCardHolderNameChange}
        onAddNewCard={this.onAddNewCardPress}
      />
    );
  }
}
