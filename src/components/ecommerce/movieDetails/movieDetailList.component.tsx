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
import { MovieDetail } from '@src/core/model';
import {
  MovieDetailListItem,
  MovieDetailListItemProps,
} from './movieDetailListItem.component';

interface ComponentProps {
  data: MovieDetail[];
}

export type MovieDetailListProps = ThemedComponentProps & ViewProps & ComponentProps;

type ListItemElement = React.ReactElement<MovieDetailListItemProps>;

class MovieDetailListComponent extends React.Component<MovieDetailListProps> {

  private renderItem = (item: MovieDetail, index: number): ListItemElement => {
    return (
      <MovieDetailListItem
        key={index}
        description={item.description}
        value={`${item.value}`}
      />
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

export const MovieDetailList = withStyles(MovieDetailListComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}));
