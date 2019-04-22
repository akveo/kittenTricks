import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  TabProps,
  List,
  ListProps,
  Tab,
  TabView,
} from '@kitten/ui';
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
  tabs: string[];
}

export type ProductsListProps = ThemedComponentProps & ComponentProps;

class ProductsListComponent extends React.Component<ProductsListProps, State> {

  public state: State = {
    selectedIndex: 0,
    tabs: [],
  };

  public componentWillMount(): void {
    this.state.tabs = this.getComponentsTabs();
    this.state.tabs.pop();
  }

  private onSelectTab = (selectedIndex: number): void => {
    this.setState({ selectedIndex });
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

  private renderTab = (title: string, index: number): React.ReactElement<TabProps> => {
    const { themedStyle } = this.props;

    return (
      <Tab
        style={[themedStyle.container, {backgroundColor: 'white'}]}
        title={title}
        key={index}>
        {this.renderProducts()}
      </Tab>
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
    const { tabs, selectedIndex} = this.state;
    const products: ProductModel[] = this.filterProducts(tabs[selectedIndex]);

    return (
      <List
        style={themedStyle.productListContainer}
        contentContainerStyle={themedStyle.productsListContent}
        data={products}
        renderItem={this.renderProduct}
        numColumns={2}
      />
    );
  };

  private renderTabs = (): React.ReactElement<TabProps>[] => {
    return this.state.tabs.map(this.renderTab);
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <TabView
        style={themedStyle.container}
        selectedIndex={this.state.selectedIndex}
        onSelect={this.onSelectTab}>
        {this.renderTabs()}
      </TabView>
    );
  }
}

export const ProductsList = withStyles(ProductsListComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  productListContainer: {
    flex: 1,
    backgroundColor: theme['color-basic-100'],
  },
  productsListContent: {
    padding: 8,
  },
  productItem: {
    flex: 1,
    margin: 8,
  },
}));
