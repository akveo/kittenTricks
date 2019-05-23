import React from 'react';
import {
  View,
  ListRenderItemInfo,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
  Button,
  Text,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';
import { CartProduct as CartProductModel } from './cartProduct.model';
import {
  CartProduct,
  CartProductProps,
} from '@src/components/ecommerce';

interface ComponentProps {
  products: CartProductModel[];
  onCheckout: () => void;
  onRemoveProductPress: (index: number) => void;
  onAddCopyPress: (index: number) => void;
  onRemoveCopyPress: (index: number) => void;
}

export type ShoppingCartProps = ThemedComponentProps & ComponentProps;

class ShoppingCartComponent extends React.Component<ShoppingCartProps> {

  private currency: string;

  public componentWillMount(): void {
    this.currency = this.props.products[0].currency;
  }

  private calculateTotalPrice = (): number => {
    const { products } = this.props;

    return products
      .reduce((acc: number, item: CartProductModel) => {
        return acc + item.count * item.cost;
      }, 0);
  };

  private onCheckout = (): void => {
    this.props.onCheckout();
  };

  private onRemoveProductPress = (index: number): void => {
    this.props.onRemoveProductPress(index);
  };

  private onAddCopyPress = (index: number) => {
    this.props.onAddCopyPress(index);
  };

  private onRemoveCopyPress = (index: number) => {
    this.props.onRemoveCopyPress(index);
  };

  private renderProduct = (info: ListRenderItemInfo<CartProductModel>): React.ReactElement<CartProductProps> => {
    const { themedStyle } = this.props;

    return (
      <CartProduct
        style={themedStyle.item}
        product={info.item}
        index={info.index}
        onRemoveProduct={this.onRemoveProductPress}
        onAddCopy={this.onAddCopyPress}
        onRemoveCopy={this.onRemoveCopyPress}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, products } = this.props;

    return (
      <ScrollView
        style={themedStyle.container}
        contentContainerStyle={themedStyle.contentContainer}>
        <View>
          <List
            style={themedStyle.productsList}
            data={products}
            renderItem={this.renderProduct}
          />
          <View style={themedStyle.totalCostContainer}>
            <Text
              style={themedStyle.totalCostLabel}
              category='h6'>
              Total Cost:
            </Text>
            <Text
              style={themedStyle.totalPriceLabel}>
              {`${this.currency} ${this.calculateTotalPrice()}`}
            </Text>
          </View>
        </View>
        <Button
          style={themedStyle.checkoutButton}
          textStyle={textStyle.button}
          size='giant'
          onPress={this.onCheckout}>
          CHECKOUT
        </Button>
      </ScrollView>
    );
  }
}

export const ShoppingCart = withStyles(ShoppingCartComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['background-color-default-1'],
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productsList: {
    // borderTopWidth: 1,
    // borderTopColor: theme['border-color-default-2'],
  },
  item: {
    marginVertical: 1,
    backgroundColor: theme['background-color-default-1'],
  },
  totalCostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme['border-color-default-2'],
  },
  totalCostLabel: textStyle.headline,
  totalPriceLabel: {
    fontFamily: 'opensans-bold',
    fontSize: 22,
    lineHeight: 32,
  },
  checkoutButton: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
}));
