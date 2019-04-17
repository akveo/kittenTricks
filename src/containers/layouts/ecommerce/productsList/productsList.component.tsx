import React from 'react';
import {
  View,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  TabProps,
  List,
  ListProps,
} from '@kitten/ui';
import { Text } from '@src/components/common';
import { Product as ProductModel } from '@src/core/model';
import {
  ProductProps,
  Product,
} from '@src/components/ecommerce';

interface ComponentProps {
  products: ProductModel[];
  onAddToBucketPress: (product: ProductModel) => void;
}

interface State {
  selectedIndex: number;
  currentProducts: ProductModel[];
}

export type ProductsListProps = ThemedComponentProps & ComponentProps;

class ProductsListComponent extends React.Component<ProductsListProps, State> {

  public state: State = {
    selectedIndex: 0,
    currentProducts: this.props.products,
  };

  private extractKey = (item: string, index: number): string => {
    return `${item}-${index}`;
  };

  private onSelectTab = (selectedIndex: number, category: string): void => {
    const products: ProductModel[] = this.filterProducts(category);
    this.setState({
      selectedIndex: selectedIndex,
      currentProducts: products,
    });
  };

  private onAddToBucketPress = (product: ProductModel): void => {
    this.props.onAddToBucketPress(product);
  };

  private getComponentsTabs = (): string[] => {
    const { products } = this.props;
    const tabs: string[] = products.map((item: ProductModel) => item.type);

    return ['ALL', ...new Set(tabs)];
  };

  private filterProducts = (criteria: string): ProductModel[] => {
    const { products } = this.props;

    if (criteria === 'ALL') {
      return products;
    } else {
      return products.filter((item: ProductModel) => item.type === criteria);
    }
  };

  private renderTab = (info: ListRenderItemInfo<string>): React.ReactElement<TabProps> => {
    const { themedStyle } = this.props;
    const isSelected: boolean = info.index === this.state.selectedIndex;

    return (
      <TouchableOpacity
        onPress={() => this.onSelectTab(info.index, info.item)}
        style={themedStyle.tabContainer}>
        <Text style={themedStyle.tabLabel(isSelected)}>{info.item.toUpperCase()}</Text>
        {isSelected && <View style={themedStyle.tabIndicator}/>}
      </TouchableOpacity>
    );
  };

  private renderProduct = (info: ListRenderItemInfo<ProductModel>): React.ReactElement<ProductProps> => {
    const { themedStyle } = this.props;

    return (
      <Product
        style={themedStyle.productItem}
        product={info.item}
        index={info.index}
        onAddToBucket={this.onAddToBucketPress}
      />
    );
  };

  private renderProducts = (): React.ReactElement<ListProps> => {
    const { themedStyle } = this.props;

    return (
      <List
        style={themedStyle.productsList}
        contentContainerStyle={themedStyle.productsListContent}
        data={this.state.currentProducts}
        renderItem={this.renderProduct}
        numColumns={2}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;
    const tabs: string[] = this.getComponentsTabs();

    return (
      <View style={themedStyle.container}>
        <List
          style={themedStyle.headerList}
          keyExtractor={this.extractKey}
          contentContainerStyle={themedStyle.tabsList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={tabs}
          renderItem={this.renderTab}/>
        {this.renderProducts()}
      </View>
    );
  }
}

export const ProductsList = withStyles(ProductsListComponent, (theme: ThemeType) => ({
  container: {
    flexGrow: 1,
  },
  headerList: {
    height: 48,
  },
  tabsList: {
    paddingHorizontal: 38,
    marginTop: 10,
  },
  tabContainer: {
    width: 125,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: (isSelected: boolean) => ({
    color: isSelected ? theme['color-primary-500'] : theme['color-basic-600'],
    fontFamily: 'opensans-extrabold',
    fontSize: 14,
    lineHeight: 16,
  }),
  tabIndicator: {
    width: 125,
    height: 4,
    borderRadius: 100,
    backgroundColor: theme['color-primary-500'],
    position: 'absolute',
    bottom: 0,
  },
  productsList: {
    height: '100%',
  },
  productsListContent: {
    flex: 1,
    padding: 8,
    backgroundColor: theme['color-basic-100'],
  },
  productItem: {
    flex: 1,
    margin: 8,
  },
}));
