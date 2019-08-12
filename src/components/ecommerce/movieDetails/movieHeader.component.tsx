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
import { MovieCategoryList } from './movieCategoryList.component';

interface ComponentProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
  categories: string[];
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
          source={image}
        />
        <Text
          style={themedStyle.titleLabel}
          category='h6'>
          {title}
        </Text>
        <Text
          style={themedStyle.descriptionLabel}
          category='p2'>
          {description}
        </Text>
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
    backgroundColor: theme['background-basic-color-1'],
  },
  titleLabel: {
    textAlign: 'center',
    ...textStyle.headline,
  },
  descriptionLabel: {
    marginTop: 8,
    marginBottom: 16,
    ...textStyle.paragraph,
  },
}));
