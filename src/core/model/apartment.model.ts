import { ImageSource } from '@src/assets/images';
import { IconSource } from '@src/assets/icons';

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
  icon?: IconSource;
}
