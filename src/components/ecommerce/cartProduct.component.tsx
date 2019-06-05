import React from 'react';
import {
  Image,
  ImageProps,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';
import {
  CloseIconOutline,
  MinusIconFill,
  PlusIconFill,
} from '@src/assets/icons';
import { CartProduct as CartProductModel } from '@src/containers/layouts/ecommerce/shoppingCart/cartProduct.model';

interface ComponentProps {
  product: CartProductModel;
  index: number;
  onRemoveProduct: (index: number) => void;
  onAddCopy: (index: number) => void;
  onRemoveCopy: (index: number) => void;
}

export type CartProductProps = ThemedComponentProps & ComponentProps & ViewProps;

class CartProductComponent extends React.Component<CartProductProps> {

  private calculateTotalProductCost = (): number => {
    const { product } = this.props;

    return product.cost * product.count;
  };

  private onRemoveProduct = (): void => {
    this.props.onRemoveProduct(this.props.index);
  };

  private onAddCopy = (): void => {
    this.props.onAddCopy(this.props.index);
  };

  private onRemoveCopy = (): void => {
    this.props.onRemoveCopy(this.props.index);
  };

  private renderCloseIcon = (): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return CloseIconOutline(themedStyle.closeIcon);
  };

  private renderMinusIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return MinusIconFill({ ...style, ...themedStyle.counterIcon });
  };

  private renderPlusIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    const { themedStyle } = this.props;

    return PlusIconFill({ ...style, ...themedStyle.counterIcon });
  };

  public render(): React.ReactNode {
    const {
      themedStyle,
      style,
      product,
    } = this.props;

    return (
      <View style={[themedStyle.container, style]}>
        <Image
          style={themedStyle.image}
          source={product.photo.imageSource}
        />
        <View style={themedStyle.infoContainer}>
          <TouchableOpacity
            style={themedStyle.closeButton}
            activeOpacity={0.9}
            onPress={this.onRemoveProduct}>
            {this.renderCloseIcon()}
          </TouchableOpacity>
          <Text
            style={[themedStyle.nameLabel, themedStyle.labelMargin]}
            category='s1'>
            {product.name}
          </Text>
          <Text
            style={[themedStyle.typeLabel, themedStyle.labelMargin]}
            appearance='hint'
            category='c1'>
            {product.type}
          </Text>
          <Text style={themedStyle.nameLabel}>
            {`${this.calculateTotalProductCost()} ${product.currency}`}
          </Text>
          <View style={themedStyle.counterContainer}>
            <Button
              style={themedStyle.counterButton}
              textStyle={textStyle.button}
              size='small'
              icon={this.renderMinusIcon}
              onPress={this.onRemoveCopy}/>
            <Text style={[themedStyle.nameLabel, themedStyle.countLabel]}>
              {`${product.count}`}
            </Text>
            <Button
              style={themedStyle.counterButton}
              textStyle={textStyle.button}
              size='small'
              icon={this.renderPlusIcon}
              onPress={this.onAddCopy}
            />
          </View>
        </View>
      </View>
    );
  }
}

export const CartProduct = withStyles(CartProductComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    // paddingLeft: 16,
  },
  image: {
    width: 144,
    height: null,
  },
  infoContainer: {
    flex: 1,
    padding: 16,
  },
  closeIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    alignSelf: 'center',
    tintColor: theme['text-hint-color'],
    top: 8,
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    padding: 16,
  },
  labelMargin: {
    marginBottom: 4,
  },
  nameLabel: textStyle.subtitle,
  typeLabel: textStyle.paragraph,
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },
  counterIcon: {
    tintColor: 'white',
  },
  counterButton: {
    width: 10,
    height: 10,
    borderRadius: 20,
  },
  countLabel: {
    marginHorizontal: 14,
  },
}));
