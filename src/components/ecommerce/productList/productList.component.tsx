import React from 'react';
import {
  ListRenderItemInfo,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
  ListProps,
} from '@kitten/ui';
import { Product } from '@src/core/model';
import {
  ProductListItem,
  ProductListItemProps,
} from './productListItem.component';

// @ts-ignore (override `renderItem` prop)
interface ComponentProps extends ListProps {
  onItemAddPress: (index: number) => void;
  onItemPress: (index: number) => void;
  renderItem?: (info: ListRenderItemInfo<Product>) => ListItemElement;
}

export type ProductListProps = ThemedComponentProps & ComponentProps;

type ListItemElement = React.ReactElement<ProductListItemProps>;

class ProductListComponent extends React.Component<ProductListProps> {

  private onProductAddPress = (index: number) => {
    this.props.onItemAddPress(index);
  };

  private onProductPress = (index: number) => {
    this.props.onItemPress(index);
  };

  private renderListItemElement = (item: Product): ListItemElement => {
    const { themedStyle } = this.props;

    return (
      <ProductListItem
        style={themedStyle.item}
        activeOpacity={0.75}
        image={item.photo.imageSource}
        name={item.name}
        type={item.type}
        price={`${item.cost} ${item.currency}`}
        onAddPress={this.onProductAddPress}
        onPress={this.onProductPress}
      />
    );
  };

  private renderItem = (info: ListRenderItemInfo<Product>): ListItemElement => {
    const { item, index } = info;

    const listItemElement: ListItemElement = this.renderListItemElement(item);

    return React.cloneElement(listItemElement, { index });
  };

  public render(): React.ReactNode {
    const { contentContainerStyle, themedStyle, data, ...restProps } = this.props;

    return (
      <List
        {...restProps}
        contentContainerStyle={[contentContainerStyle, themedStyle.container]}
        data={data}
        renderItem={this.renderItem}
        numColumns={2}
      />
    );
  }
}

export const ProductList = withStyles(ProductListComponent, (theme: ThemeType) => ({
  container: {},
  item: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
    backgroundColor: theme['background-basic-color-1'],
  },
}));
