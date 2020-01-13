import { LayoutItem } from '../../model/layout-item.model';

export interface EcommerceData extends LayoutItem {
  route: string;
}

export const data: EcommerceData[] = [
  {
    title: 'Product Details',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-product-details-1.jpg'),
    route: 'ProductDetails1',
  },
  {
    title: 'Product Details',
    description: 'Option 2',
    image: require('../../assets/images/image-layout-product-details-2.jpg'),
    route: 'ProductDetails2',
  },
  {
    title: 'Product Details',
    description: 'Option 3',
    image: require('../../assets/images/image-layout-product-details-3.jpg'),
    route: 'ProductDetails3',
  },
  {
    title: 'Product Details',
    description: 'Option 4',
    image: require('../../assets/images/image-layout-product-details-4.jpg'),
    route: 'ProductDetails4',
  },
  {
    title: 'Product List',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-product-list.jpg'),
    route: 'ProductList',
  },
  {
    title: 'Shopping Cart',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-shopping-cart.jpg'),
    route: 'ShoppingCart',
  },
  {
    title: 'Payment',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-payment.jpg'),
    route: 'Payment',
  },
  {
    title: 'Add New Card',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-add-new-card.jpg'),
    route: 'AddNewCard',
  },
];
