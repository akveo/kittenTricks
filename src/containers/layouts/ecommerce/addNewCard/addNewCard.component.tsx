import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Button } from '@kitten/ui';
import {
  Text,
  ValidationInput,
} from '@src/components/common';
import {
  CardNumberValidator,
  CardNumberFormatter,
  ExpirationDateValidator,
  ExpirationDateFormatter,
  CvvValidator,
  CvvFormatter,
  CardholderNameValidator,
  CardholderNameFormatter,
} from '@src/components/ecommerce';

interface ComponentProps {
  cardNumber: string;
  expireDate: string;
  cvv: string;
  cardholderName: string;
  isFormValid: boolean;
  onCardNumberChange: (value: string) => void;
  onExpirationDateChange: (value: string) => void;
  onCvvChange: (value: string) => void;
  onCardHolderNameChange: (value: string) => void;
  onAddNewCard: () => void;
}

export type AddNewCardProps = ThemedComponentProps & ComponentProps;

class AddNewCardComponent extends React.Component<AddNewCardProps> {

  private onAddNewCard = (): void => {
    this.props.onAddNewCard();
  };

  private onCardNumberChange = (value: string) => {
    this.props.onCardNumberChange(value);
  };

  private onExpirationDateChange = (value: string): void => {
    this.props.onExpirationDateChange(value);
  };

  private onCvvChange = (value: string): void => {
    this.props.onCvvChange(value);
  };

  private onCardHolderNameChange = (value: string): void => {
    this.props.onCardHolderNameChange(value);
  };

  public render(): React.ReactNode {
    const {
      themedStyle,
      cardNumber,
      expireDate,
      cvv,
      cardholderName,
      isFormValid,
    } = this.props;

    return (
      <View style={themedStyle.container}>
        <View>
          <Text style={themedStyle.inputLabel}>CARD NUMBER</Text>
          <ValidationInput
            style={[themedStyle.input, themedStyle.commonMargin]}
            value={cardNumber}
            validator={CardNumberValidator}
            formatter={CardNumberFormatter}
            placeholder='0000 0000 0000 0000'
            maxLength={19}
            keyboardType='numeric'
            onChangeText={this.onCardNumberChange}
          />
          <View style={[themedStyle.middleContainer, themedStyle.commonMargin]}>
            <View>
              <Text style={themedStyle.inputLabel}>EXPIRE DATE</Text>
              <ValidationInput
                style={[themedStyle.input, themedStyle.expireInput]}
                value={expireDate}
                validator={ExpirationDateValidator}
                formatter={ExpirationDateFormatter}
                placeholder='MM/YY'
                maxLength={5}
                keyboardType='numeric'
                onChangeText={this.onExpirationDateChange}
              />
            </View>
            <View style={themedStyle.cvvContainer}>
              <Text style={themedStyle.inputLabel}>CVV</Text>
              <ValidationInput
                style={[themedStyle.input, themedStyle.cvvInput]}
                value={cvv}
                validator={CvvValidator}
                formatter={CvvFormatter}
                placeholder='CVV'
                maxLength={3}
                keyboardType='numeric'
                onChangeText={this.onCvvChange}
              />
            </View>
          </View>
          <Text style={themedStyle.inputLabel}>CARDHOLDER NAME</Text>
          <ValidationInput
            value={cardholderName}
            style={themedStyle.input}
            validator={CardholderNameValidator}
            formatter={CardholderNameFormatter}
            placeholder='Enter Name'
            onChangeText={this.onCardHolderNameChange}
          />
        </View>
        <Button
          disabled={!isFormValid}
          onPress={this.onAddNewCard}>ADD NEW CARD</Button>
      </View>
    );
  }
}

export const AddNewCard = withStyles(AddNewCardComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-basic-100'],
    paddingTop: 40,
    paddingBottom: 24,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: theme['color-white'],
    color: theme['color-basic-600'],
    fontSize: 15,
    lineHeight: 20,
  },
  expireInput: {
    width: 90,
  },
  cvvContainer: {
    marginLeft: 50,
  },
  cvvInput: {
    width: 65,
  },
  inputLabel: {
    color: theme['color-basic-600'],
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  middleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commonMargin: {
    marginBottom: 24,
  },
}));
