import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Tab,
  TabProps,
  TabView,
} from '@kitten/ui';
import { ProductList } from '@src/components/ecommerce';
import { Product } from '@src/core/model';

interface ComponentProps {
  products: Product[];
  onProductPress: (product: Product) => void;
  onProductAddPress: (product: Product) => void;
}

interface State {
  tabCategories: string[];
  selectedIndex: number;
}

export type ProductsListProps = ThemedComponentProps & ComponentProps;

class ProductsListComponent extends React.Component<ProductsListProps, State> {

  public state: State = {
    tabCategories: [],
    selectedIndex: 0,
  };

  public componentWillMount() {
    this.state.tabCategories = this.getProductCategories();
    this.state.tabCategories.pop();
  }

  private onProductPress = (index: number) => {
    const selectedProduct: Product = this.findCurrentCategorySelectedProduct(index);

    this.props.onProductPress(selectedProduct);
  };

  private onProductAddPress = (index: number) => {
    const selectedProduct: Product = this.findCurrentCategorySelectedProduct(index);

    this.props.onProductAddPress(selectedProduct);
  };

  private onTabSelect = (selectedIndex: number) => {
    this.setState({ selectedIndex });
  };

  private findCurrentCategorySelectedProduct = (index: number): Product => {
    const { products } = this.props;
    const { tabCategories, selectedIndex } = this.state;

    const categoryProducts: Product[] = this.getCategoryProducts(products, tabCategories[selectedIndex]);

    return categoryProducts[index];
  };

  private getCategoryProducts = (source: Product[], category: string): Product[] => {
    const { products } = this.props;

    if (category === 'All') {
      return products;
    }

    return products.filter((item: Product): boolean => {
      return item.type === category;
    });
  };

  private getProductCategories = (): string[] => {
    const { products } = this.props;

    const categories: string[] = products.map((item: Product): string => {
      return item.type;
    });

    return ['All', ...new Set(categories)];
  };

  private renderTab = (title: string, index: number): React.ReactElement<TabProps> => {
    const { themedStyle, products } = this.props;
    const { [index]: tabCategory } = this.state.tabCategories;

    const displayProducts: Product[] = this.getCategoryProducts(products, tabCategory);

    return (
      <Tab
        key={index}
        title={title.toUpperCase()}>
        <ProductList
          contentContainerStyle={themedStyle.productsListContent}
          data={displayProducts}
          onItemPress={this.onProductPress}
          onItemAddPress={this.onProductAddPress}
        />
      </Tab>
    );
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    const tabElements: React.ReactElement<TabProps>[] = this.state.tabCategories.map(this.renderTab);

    return (
      <TabView
        style={themedStyle.container}
        selectedIndex={this.state.selectedIndex}
        onSelect={this.onTabSelect}>
        {tabElements}
      </TabView>
    );
  }
}

export const ProductsList = withStyles(ProductsListComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
  productsListContent: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
}));
