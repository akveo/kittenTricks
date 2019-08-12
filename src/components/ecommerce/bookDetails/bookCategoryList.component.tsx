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
  BookCategoryListItem,
  BookCategoryListItemProps,
} from './bookCategoryListItem.component';

interface ComponentProps {
  data: string[];
}

export type BookCategoryListProps = ThemedComponentProps & ViewProps & ComponentProps;

type ListItemElement = React.ReactElement<BookCategoryListItemProps>;

class BookCategoryListComponent extends React.Component<BookCategoryListProps> {

  private renderItem = (item: string, index: number): ListItemElement => {
    const { themedStyle } = this.props;

    return (
      <BookCategoryListItem
        key={index}
        style={themedStyle.item}>
        {item}
      </BookCategoryListItem>
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

export const BookCategoryList = withStyles(BookCategoryListComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    marginRight: 8,
  },
}));
