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
import { MovieCategoryList } from './movieCategoryList.component';

interface ComponentProps {
  image: ImageSourcePropType;
  title: React.ReactText;
  description: React.ReactText;
  categories: React.ReactText[];
  rating: number;
}

export type MovieHeaderProps = ThemedComponentProps & ViewProps & ComponentProps;

class MovieHeaderComponent extends React.Component<MovieHeaderProps> {

  public render(): React.ReactNode {
    const { style, themedStyle, image, title, description, categories, rating, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <Image
          style={themedStyle.image}
          source={image}/>
        <Text style={themedStyle.titleLabel}>{title}</Text>
        <Text style={themedStyle.descriptionLabel}>{description}</Text>
        <MovieCategoryList
          style={themedStyle.categoriesContainer}
          data={categories}
        />
        <RateBar value={rating}/>
      </View>
    );
  }
}

export const MovieHeader = withStyles(MovieHeaderComponent, (theme: ThemeType) => ({
  container: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  categoriesContainer: {
    justifyContent: 'center',
    marginHorizontal: 4,
    marginBottom: 24,
  },
  image: {
    width: 256,
    height: 360,
    borderRadius: 12,
    marginBottom: 24,
  },
  titleLabel: {
    textAlign: 'center',
    fontFamily: 'opensans-extrabold',
    color: theme['color-black'],
    fontSize: 20,
    lineHeight: 28,
  },
  descriptionLabel: {
    color: theme['color-black'],
    fontSize: 13,
    lineHeight: 16,
    marginTop: 8,
    marginBottom: 16,
  },
}));
