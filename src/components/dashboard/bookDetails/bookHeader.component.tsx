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
  RateBar,
  Text,
} from '@src/components/common';
import { BookCategoryList } from './bookCategoryList.component';

interface ComponentProps {
  image: ImageSourcePropType;
  title: React.ReactText;
  author: React.ReactText;
  categories: React.ReactText[];
  rating: number;
  price: React.ReactText;
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
          <Text style={themedStyle.titleLabel}>{title}</Text>
          <Text style={themedStyle.authorLabel}>{`Author: ${author}`}</Text>
          <BookCategoryList
            style={themedStyle.categoryList}
            data={categories}
          />
          <RateBar
            style={themedStyle.marginBottomLarge}
            value={rating}
          />
          <Text style={themedStyle.priceLabel}>{price}</Text>
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
  titleLabel: {
    fontFamily: 'opensans-bold',
    color: theme['color-black'],
    fontSize: 15,
    lineHeight: 24,
  },
  authorLabel: {
    marginTop: 4,
    color: theme['color-basic-600'],
    fontSize: 11,
    lineHeight: 16,
  },
  priceLabel: {
    marginTop: 16,
    fontFamily: 'opensans-bold',
    color: theme['color-black'],
    fontSize: 15,
    lineHeight: 24,
  },
  categoryList: {
    marginVertical: 16,
  },
}));
