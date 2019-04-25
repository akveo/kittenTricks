import React from 'react';
import {
  View,
  Image,
  TouchableOpacityProps,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Text } from '@src/components/common';
import { CartIcon } from '@src/assets/icons';
import { Button } from '@kitten/ui';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore
interface ComponentProps extends ListDerivedProps, TouchableOpacityProps {
  image: ImageSourcePropType;
  name: React.ReactText;
  type: React.ReactText;
  price: React.ReactText;
  onAddPress: (index: number) => void;
  onPress: (index: number) => void;
}

export type ProductListItemProps = ThemedComponentProps & ComponentProps;

class ProductListItemComponent extends React.Component<ProductListItemProps> {

  private onPress = () => {
    this.props.onPress(this.props.index);
  };

  private onAddToBucket = () => {
    this.props.onAddPress(this.props.index);
  };

  public render(): React.ReactNode {
    const { style, themedStyle, image, name, type, price, ...restProps } = this.props;

    return (
      <TouchableOpacity
        {...restProps}
        style={[themedStyle.container, style]}
        onPress={this.onPress}>
        <Image
          source={image}
          style={themedStyle.image}/>
        <View style={themedStyle.infoContainer}>
          <View>
            <Text style={themedStyle.nameLabel}>{name}</Text>
            <Text style={themedStyle.typeLabel}>{type}</Text>
          </View>
          <View style={themedStyle.priceContainer}>
            <Text style={themedStyle.costLabel}>{price}</Text>
            <Button
              style={themedStyle.buyButton}
              icon={CartIcon}
              onPress={this.onAddToBucket}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export const ProductListItem = withStyles(ProductListItemComponent, (theme: ThemeType) => ({
  container: {
    minHeight: 272,
    borderRadius: 12,
    backgroundColor: theme['color-white'],
    overflow: 'hidden',
  },
  infoContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    height: 140,
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
