import React from 'react';
import {
  ImageProps,
  View,
  ViewProps,
  TouchableOpacity,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@src/components/common';
import { PaymentCard as PaymentCardModel } from '@src/core/model';
import { MoreVerticalIcon } from '@src/assets/icons';

interface ComponentProps {
  paymentCard: PaymentCardModel;
  index?: number;
  onDetails: (index: number) => void;
}

export type PaymentCardProps = ThemedComponentProps & ComponentProps & ViewProps;

class PaymentCardComponent extends React.Component<PaymentCardProps> {

  private onDetails = (): void => {
    this.props.onDetails(this.props.index);
  };

  private renderDetailsIcon = (): React.ReactElement<ImageProps> => {
    return MoreVerticalIcon(this.props.themedStyle.moreIcon);
  };

  public render(): React.ReactNode {
    const { themedStyle, style, paymentCard } = this.props;
    const detailsHitSlop: StyleType = { top: 20, bottom: 20, left: 20, right: 20 };

    return (
      <View style={[themedStyle.container, style]}>
        <View style={[themedStyle.topBottomContainer, themedStyle.topContainer]}>
          <Text style={themedStyle.typeLabel}>{paymentCard.type}</Text>
          <TouchableOpacity
            hitSlop={detailsHitSlop}
            activeOpacity={0.95}
            onPress={this.onDetails}>
            {this.renderDetailsIcon()}
          </TouchableOpacity>
        </View>
        <Text style={themedStyle.numberLabel}>{paymentCard.number}</Text>
        <View style={themedStyle.topBottomContainer}>
          <View style={themedStyle.bottomLeftContainer}>
            <Text style={themedStyle.bottomLabel}>Cardholder Name</Text>
            <Text style={themedStyle.bottomLabelMain}>{paymentCard.cardHolder}</Text>
          </View>
          <View style={themedStyle.bottomRightContainer}>
            <Text style={[themedStyle.bottomLabel, themedStyle.rightLabel]}>Expire Date</Text>
            <Text style={[themedStyle.bottomLabelMain, themedStyle.rightLabel]}>{paymentCard.expireDate}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export const PaymentCard = withStyles(PaymentCardComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['color-primary-500'],
    borderRadius: 12,
    padding: 24,
  },
  topContainer: {
    marginBottom: 32,
  },
  topBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  typeLabel: {
    fontFamily: 'opensans-bold',
    fontSize: 32,
    lineHeight: 42,
  },
  numberLabel: {
    fontFamily: 'opensans-bold',
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 26,
  },
  bottomLabel: {
    fontSize: 11,
    lineHeight: 16,
  },
  bottomLabelMain: {
    fontFamily: 'opensans-semibold',
    fontSize: 15,
    lineHeight: 24,
  },
  bottomLeftContainer: {
    justifyContent: 'flex-start',
  },
  bottomRightContainer: {
    justifyContent: 'flex-end',
  },
  moreIcon: {
    width: 4,
    height: 18,
    tintColor: theme['color-white'],
  },
  rightLabel: {
    textAlign: 'right',
  },
}));
