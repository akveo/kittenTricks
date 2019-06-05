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
import {
  Button,
  Text,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';
import { CartIconOutline } from '@src/assets/icons';

interface ListDerivedProps {
  index?: number;
}

// @ts-ignore
interface ComponentProps extends ListDerivedProps, TouchableOpacityProps {
  image: ImageSourcePropType;
  name: string;
  type: string;
  price: string;
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
          style={themedStyle.image}
          source={image}
        />
        <View style={themedStyle.infoContainer}>
          <View>
            <Text
              style={themedStyle.nameLabel}
              category='s1'>
              {name}
            </Text>
            <Text
              style={themedStyle.typeLabel}
              appearance='hint'
              category='c1'>
              {type}
            </Text>
          </View>
          <View style={themedStyle.priceContainer}>
            <Text
              style={themedStyle.costLabel}
              category='s1'>
              {price}
            </Text>
            <Button
              style={themedStyle.buyButton}
              textStyle={textStyle.button}
              icon={CartIconOutline}
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
    width: null,
    height: 140,
  },
  nameLabel: textStyle.subtitle,
  typeLabel: textStyle.caption1,
  costLabel: textStyle.subtitle,
  buyButton: {
    width: 32,
    height: 32,
  },
}));
