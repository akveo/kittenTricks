import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
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
  PaymentCard,
  PaymentCardProps,
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
      <ScrollView
        style={themedStyle.container}
        contentContainerStyle={themedStyle.contentContainer}>
        <View>
          {paymentCards.map(this.renderPaymentCard)}
          <TouchableOpacity
            style={themedStyle.addCardContainer}
            activeOpacity={0.9}
            onPress={this.onAddCard}>
            {CreditCardIcon(themedStyle.addCardIcon)}
            <Text
              style={themedStyle.addCardLabel}
              appearance='hint'
              category='s1'>
              Add New Card
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          style={themedStyle.buyButton}
          textStyle={textStyle.button}
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
    backgroundColor: theme['background-basic-color-2'],
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  addCardContainer: {
    minHeight: 192,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: theme['background-basic-color-3'],
  },
  addCardLabel: {
    marginTop: 12,
    ...textStyle.subtitle,
  },
  addCardIcon: {
    width: 48,
    height: 34,
    tintColor: theme['text-hint-color'],
  },
  paymentCard: {
    marginBottom: 16,
  },
  buyButton: {},
}));
