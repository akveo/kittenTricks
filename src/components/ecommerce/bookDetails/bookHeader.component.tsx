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
import { Text } from '@kitten/ui';
import {
  RateBar,
  textStyle,
} from '@src/components/common';
import { BookCategoryList } from './bookCategoryList.component';

interface ComponentProps {
  image: ImageSourcePropType;
  title: string;
  author: string;
  categories: string[];
  rating: number;
  price: string;
}

export type BookHeaderProps = ThemedComponentProps & ViewProps & ComponentProps;

class BookHeaderComponent extends React.Component<BookHeaderProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, image, title, author, categories, rating, price, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <Image
          style={themedStyle.image}
          source={image}
        />
        <View style={themedStyle.detailsContainer}>
          <Text
            style={themedStyle.titleLabel}
            category='s1'>
            {title}
          </Text>
          <Text
            style={themedStyle.authorLabel}
            appearance='hint'
            category='c1'>
            {`Author: ${author}`}
          </Text>
          <BookCategoryList
            style={themedStyle.categoryList}
            data={categories}
          />
          <RateBar
            style={themedStyle.marginBottomLarge}
            value={rating}
          />
          <Text
            style={themedStyle.priceLabel}
            category='s1'>
            {price}
          </Text>
        </View>
      </View>
    );
  }
}

export const BookHeader = withStyles(BookHeaderComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  detailsContainer: {
    marginLeft: 24,
  },
  image: {
    width: 140,
    height: 180,
    borderRadius: 12,
  },
  titleLabel: textStyle.subtitle,
  authorLabel: {
    marginTop: 4,
    ...textStyle.caption1,
  },
  priceLabel: {
    marginTop: 16,
    ...textStyle.subtitle,
  },
  categoryList: {
    marginVertical: 16,
  },
}));
