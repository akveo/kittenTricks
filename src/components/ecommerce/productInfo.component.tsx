import React from 'react';
import {
  Image,
  ImageSourcePropType,
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Text,
  Radio,
  RadioGroup,
  RadioProps,
} from '@kitten/ui';
import { textStyle } from '@src/components/common';

interface ComponentProps {
  image: ImageSourcePropType;
  name: React.ReactText;
  type: React.ReactText;
  price: React.ReactText;
  description: React.ReactText;
  size: React.ReactText;
  colors: string[];
  selectedColorIndex: number;
  onColorSelect: (index: number) => void;
}

export type ProductInfoProps = ThemedComponentProps & ViewProps & ComponentProps;

class ProductInfoComponent extends React.Component<ProductInfoProps> {

  private onColorSelectChange = (index: number) => {
    this.props.onColorSelect(index);
  };

  private renderColorRadio = (color: string, index: number): React.ReactElement<RadioProps> => {
    const { themedStyle } = this.props;

    return (
      <Radio
        key={index}
        style={themedStyle.radioItem}
        text={color}
      />
    );
  };

  public render(): React.ReactNode {
    const { style, themedStyle, selectedColorIndex, ...withDataProps } = this.props;
    const { image, name, type, price, description, size, colors, ...restProps } = withDataProps;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <Image
          style={[themedStyle.image, themedStyle.bottomSpace]}
          source={image}
        />
        <View style={[themedStyle.nameContainer, themedStyle.bottomSpace]}>
          <View>
            <Text
              style={[themedStyle.nameLabel, themedStyle.labelBottomSpace]}
              category='h6'>
              {name}
            </Text>
            <Text
              style={themedStyle.typeLabel}
              appearance='hintDark'
              category='p2'>
              {type}
            </Text>
          </View>
          <Text style={themedStyle.costLabel}>{price}</Text>
        </View>
        <Text
          style={[themedStyle.descriptionText, themedStyle.bottomSpace]}
          appearance='hintDark'>
          {description}
        </Text>
        <Text
          style={[themedStyle.nameLabel, themedStyle.labelBottomSpace]}
          category='h6'>
          Size
        </Text>
        <Text
          style={[themedStyle.descriptionText, themedStyle.bottomSpace]}
          appearance='hintDark'>
          {size}
        </Text>
        <Text
          style={[themedStyle.nameLabel, themedStyle.labelBottomSpace]}
          category='h6'>
          Color
        </Text>
        <RadioGroup
          style={themedStyle.colorSelector}
          selectedIndex={selectedColorIndex}
          onChange={this.onColorSelectChange}>
          {colors.map(this.renderColorRadio)}
        </RadioGroup>
      </View>
    );
  }
}

export const ProductInfo = withStyles(ProductInfoComponent, (theme: ThemeType) => ({
  container: {},
  image: {
    flex: 1,
    height: 340,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameLabel: textStyle.headline,
  typeLabel: textStyle.paragraph,
  costLabel: {
    fontFamily: 'opensans-bold',
    fontSize: 26,
    lineHeight: 32,
  },
  descriptionText: textStyle.paragraph,
  colorSelector: {
    flexDirection: 'row',
  },
  radioItem: {
    marginRight: 16,
  },
  bottomSpace: {
    marginBottom: 24,
  },
  labelBottomSpace: {
    marginBottom: 8,
  },
}));
