import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';
import { PaymentCard as PaymentCardModel } from '@src/core/model';
import {
  PaymentCardProps,
  PaymentCard,
} from '@src/components/ecommerce';
import { CreditCardIcon } from '@src/assets/icons';


interface ComponentProps {
  paymentCards: PaymentCardModel[];
  onCardDetailsPress: (index: number) => void;
  onBuy: () => void;
  onAddCard: () => void;
}

export type PaymentProps = ThemedComponentProps & ComponentProps;

class PaymentComponent extends React.Component<PaymentProps> {

  private onCardDetails = (index: number): void => {
    this.props.onCardDetailsPress(index);
  };

  private onBuy = (): void => {
    this.props.onBuy();
  };

  private onAddCard = (): void => {
    this.props.onAddCard();
  };

  private renderPaymentCard = (item: PaymentCardModel,
                               index: number): React.ReactElement<PaymentCardProps> => {

    const { themedStyle } = this.props;

    return (
      <PaymentCard
        index={index}
        style={themedStyle.paymentCard}
        key={index}
        paymentCard={item}
        onDetails={this.onCardDetails}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, paymentCards } = this.props;

    return (
      <ScrollView contentContainerStyle={themedStyle.container}>
        <View>
          {paymentCards.map(this.renderPaymentCard)}
          <TouchableOpacity
            style={themedStyle.addCardContainer}
            activeOpacity={0.9}
            onPress={this.onAddCard}>
            {CreditCardIcon(themedStyle.addCardIcon)}
            <Text
              style={themedStyle.addCardLabel}
              appearance='hintLight'
              category='s1'>
              Add New Card
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          style={themedStyle.buyButton}
          size='giant'
          onPress={this.onBuy}>
          BUY
        </Button>
      </ScrollView>
    );
  }
}

export const Payment = withStyles(PaymentComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-basic-100'],
    paddingVertical: 24,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  addCardContainer: {
    minHeight: 192,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: theme['color-basic-200'],
    borderColor: theme['color-basic-300'],
    borderWidth: 1,
  },
  addCardLabel: {
    marginTop: 12,
    ...textStyle.subtitle,
  },
  addCardIcon: {
    width: 48,
    height: 34,
    tintColor: theme['color-basic-300'],
  },
  paymentCard: {
    marginBottom: 16,
  },
  buyButton: {},
}));
