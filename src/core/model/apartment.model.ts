import { ImageSource } from '@src/assets/images';
import {
  IconElement,
  IconProps,
} from '@kitten/ui';
import { ImageProps } from 'react-native';

export interface Apartment {
  title: string;
  description: string;
  price: number;
  primaryFacilities: ApartmentFacility[];
  facilities: ApartmentFacility[];
  primaryPhoto: ImageSource;
  photos: ImageSource[];
}

export interface ApartmentFacility {
  title: string;
  icon?: (style: IconProps<ImageProps>) => IconElement<ImageProps>;
}
