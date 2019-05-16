import {
  imageAddNewCardLayout,
  imageBookDetailsLayout,
  imageMovieDetailsLayout,
  imagePaymentLayout,
  imageProductDetailsLayout,
  imageProductListLayout,
  imageRentApartmentLayout,
  imageShoppingCartLayout,
} from '@src/assets/images';
import { EcommerceContainerData } from './type';

export const routes: EcommerceContainerData[] = [
  {
    title: 'Add New Card',
    description: 'Option 1',
    image: imageAddNewCardLayout.imageSource,
    route: 'Add New Card',
  },
  {
    title: 'Payment',
    description: 'Option 1',
    image: imagePaymentLayout.imageSource,
    route: 'Payment',
  },
  {
    title: 'Products List',
    description: 'Option 1',
    image: imageProductListLayout.imageSource,
    route: 'Products List',
  },
  {
    title: 'Product Details',
    description: 'Option 1',
    image: imageProductDetailsLayout.imageSource,
    route: 'Product Details',
  },
  {
    title: 'Shopping Cart',
    description: 'Option 1',
    image: imageShoppingCartLayout.imageSource,
    route: 'Shopping Cart',
  },
  {
    title: 'Rent Apartment',
    description: 'Option 1',
    image: imageRentApartmentLayout.imageSource,
    route: 'Rent Apartment',
  },
  {
    title: 'Book Details',
    description: 'Option 1',
    image: imageBookDetailsLayout.imageSource,
    route: 'Book Details',
  },
  {
    title: 'Movie Details',
    description: 'Option 1',
    image: imageMovieDetailsLayout.imageSource,
    route: 'Movie Details',
  },
];
