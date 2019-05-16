import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  MovieCategoryListItem,
  MovieCategoryListItemProps,
} from './movieCategoryListItem.component';

interface ComponentProps {
  data: string[];
}

export type MovieCategoryListProps = ThemedComponentProps & ViewProps & ComponentProps;

type ListItemElement = React.ReactElement<MovieCategoryListItemProps>;

class MovieCategoryListComponent extends React.Component<MovieCategoryListProps> {

  private renderItem = (item: string, index: number): ListItemElement => {
    const { themedStyle } = this.props;

    return (
      <MovieCategoryListItem
        key={index}
        style={themedStyle.item}>
        {item}
      </MovieCategoryListItem>
    );
  };

  public render(): React.ReactNode {
    const { style, themedStyle, data, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        {data.map(this.renderItem)}
      </View>
    );
  }
}

export const MovieCategoryList = withStyles(MovieCategoryListComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    marginHorizontal: 4,
  },
}));
