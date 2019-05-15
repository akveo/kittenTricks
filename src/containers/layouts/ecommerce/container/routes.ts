import {
  addNewCardLayoutImage,
  bookDetailsLayoutImage,
  movieDetailsLayoutImage,
  paymentLayoutImage,
  productDetailsLayoutImage,
  productListLayoutImage,
  rentApartmentLayoutImage,
  shoppingCartLayoutImage,
} from '@src/assets/images';
import { EcommerceContainerData } from './type';

export const routes: EcommerceContainerData[] = [
  {
    title: 'Add New Card',
    description: 'Option 1',
    image: addNewCardLayoutImage,
    route: 'Add New Card',
  },
  {
    title: 'Payment',
    description: 'Option 1',
    image: paymentLayoutImage,
    route: 'Payment',
  },
  {
    title: 'Products List',
    description: 'Option 1',
    image: productListLayoutImage,
    route: 'Products List',
  },
  {
    title: 'Product Details',
    description: 'Option 1',
    image: productDetailsLayoutImage,
    route: 'Product Details',
  },
  {
    title: 'Shopping Cart',
    description: 'Option 1',
    image: shoppingCartLayoutImage,
    route: 'Shopping Cart',
  },
  {
    title: 'Rent Apartment',
    description: 'Option 1',
    image: rentApartmentLayoutImage,
    route: 'Rent Apartment',
  },
  {
    title: 'Book Details',
    description: 'Option 1',
    image: bookDetailsLayoutImage,
    route: 'Book Details',
  },
  {
    title: 'Movie Details',
    description: 'Option 1',
    image: movieDetailsLayoutImage,
    route: 'Movie Details',
  },
];
