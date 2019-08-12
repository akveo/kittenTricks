import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  textStyle,
  ValidationInput,
} from '@src/components/common';
import {
  CardNumberValidator,
  ExpirationDateValidator,
  CvvValidator,
  CardholderNameValidator,
} from '@src/core/validators';
import {
  CardNumberFormatter,
  ExpirationDateFormatter,
  CvvFormatter,
  CardholderNameFormatter,
} from '@src/core/formatters';

export interface AddPaymentCardFormType {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  cardholderName: string;
}

interface ComponentProps {
  /**
   * Will emit changes depending on validation:
   * Will be called with form value if it is valid, otherwise will be called with undefined
   */
  onFormValueChange: (value: AddPaymentCardFormType | undefined) => void;
}

export type AddPaymentCardFormProps = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
  cardNumber: string | undefined;
  expirationDate: string | undefined;
  cvv: string | undefined;
  cardholderName: string | undefined;
}

class AddNewCardComponent extends React.Component<AddPaymentCardFormProps, State> {

  public state: State = {
    cardNumber: undefined,
    expirationDate: undefined,
    cvv: undefined,
    cardholderName: undefined,
  };

  public componentDidUpdate(prevProps: AddPaymentCardFormProps, prevState: State) {
    const oldFormValid: boolean = this.isValid(prevState);
    const newFormValid: boolean = this.isValid(this.state);

    const becomeValid: boolean = !oldFormValid && newFormValid;
    const becomeInvalid: boolean = oldFormValid && !newFormValid;

    if (becomeValid) {
      this.props.onFormValueChange(this.state);
    } else if (becomeInvalid) {
      this.props.onFormValueChange(undefined);
    }
  }

  private onCardNumberChange = (cardNumber: string) => {
    this.setState({ cardNumber });
  };

  private onExpirationDateChange = (expirationDate: string) => {
    this.setState({ expirationDate });
  };

  private onCvvChange = (cvv: string) => {
    this.setState({ cvv });
  };

  private onCardHolderNameChange = (cardholderName: string) => {
    this.setState({ cardholderName });
  };

  private isValid = (value: AddPaymentCardFormType): boolean => {
    const { cardNumber, expirationDate, cvv, cardholderName } = value;

    return cardNumber !== undefined
      && expirationDate !== undefined
      && cvv !== undefined
      && cardholderName !== undefined;
  };

  public render(): React.ReactNode {
    const { style, themedStyle, ...restProps } = this.props;

    return (
      <View
        style={[themedStyle.container, style]}
        {...restProps}>
        <ValidationInput
          style={themedStyle.input}
          textStyle={textStyle.paragraph}
          labelStyle={textStyle.label}
          label='CARD NUMBER'
          placeholder='0000 0000 0000 0000'
          validator={CardNumberValidator}
          formatter={CardNumberFormatter}
          maxLength={19}
          keyboardType='numeric'
          onChangeText={this.onCardNumberChange}
        />
        <View style={themedStyle.middleContainer}>
          <ValidationInput
            style={[themedStyle.input, themedStyle.expireInput]}
            textStyle={textStyle.paragraph}
            labelStyle={textStyle.label}
            label='EXPIRE DATE'
            placeholder='MM/YY'
            validator={ExpirationDateValidator}
            formatter={ExpirationDateFormatter}
            maxLength={5}
            keyboardType='numeric'
            onChangeText={this.onExpirationDateChange}
          />
          <ValidationInput
            style={[themedStyle.input, themedStyle.cvvInput]}
            textStyle={textStyle.paragraph}
            labelStyle={textStyle.label}
            label='CVV'
            placeholder='CVV'
            validator={CvvValidator}
            formatter={CvvFormatter}
            maxLength={3}
            keyboardType='numeric'
            onChangeText={this.onCvvChange}
          />
        </View>
        <ValidationInput
          style={[themedStyle.input, themedStyle.cardholderNameInput]}
          textStyle={textStyle.paragraph}
          labelStyle={textStyle.label}
          label='CARDHOLDER NAME'
          placeholder='Enter Name'
          validator={CardholderNameValidator}
          formatter={CardholderNameFormatter}
          onChangeText={this.onCardHolderNameChange}
        />
      </View>
    );
  }
}

export const AddPaymentCardForm = withStyles(AddNewCardComponent, (theme: ThemeType) => ({
  container: {
  },
  middleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  input: {
    backgroundColor: theme['background-basic-color-1'],
  },
  expireInput: {
    width: 90,
  },
  cvvInput: {
    marginLeft: 24,
    width: 64,
  },
  cardholderNameInput: {
    marginTop: 24,
  },
}));
