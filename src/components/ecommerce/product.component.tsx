import React from 'react';
import {
  View,
  ViewProps,
  Image,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@src/components/common';
import { Product as ProductModel } from '@src/core/model';
import { CartIcon } from '@src/assets/icons';
import { Button } from '@kitten/ui';

interface ComponentProps {
  product: ProductModel;
  index?: number;
  onAddToBucket: (product: ProductModel) => void;
}

export type ProductProps = ThemedComponentProps & ComponentProps & ViewProps;

class ProductComponent extends React.Component<ProductProps> {

  private onAddToBucket = () => {
    this.props.onAddToBucket(this.props.product);
  };

  public render(): React.ReactNode {
    const { themedStyle, style, product } = this.props;

    return (
      <View style={[themedStyle.container, style]}>
        <Image
          source={{ uri: product.photo }}
          style={themedStyle.image}/>
        <View style={themedStyle.infoContainer}>
          <View>
            <Text style={themedStyle.nameLabel}>{product.name}</Text>
            <Text style={themedStyle.typeLabel}>{product.type}</Text>
          </View>
          <View style={themedStyle.priceContainer}>
            <Text style={themedStyle.costLabel}>{`${product.cost} ${product.currency}`}</Text>
            <Button
              style={themedStyle.buyButton}
              icon={CartIcon}
              onPress={this.onAddToBucket}
            />
          </View>
        </View>
      </View>
    );
  }
}

export const Product = withStyles(ProductComponent, (theme: ThemeType) => ({
  container: {
    width: 164,
    height: 273,
    backgroundColor: theme['color-white'],
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: 164,
    height: 140,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  infoContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  nameLabel: {
    fontFamily: 'opensans-semibold',
    color: theme['color-black'],
    fontSize: 15,
    lineHeight: 24,
  },
  typeLabel: {
    color: theme['color-basic-600'],
    fontSize: 11,
    lineHeight: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  costLabel: {
    fontFamily: 'opensans-bold',
    color: theme['color-black'],
    fontSize: 15,
    lineHeight: 24,
  },
  buyButton: {
    width: 32,
    height: 32,
  },
}));
