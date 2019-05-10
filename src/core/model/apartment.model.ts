import { ImageRequireSource } from 'react-native';

export interface Apartment {
  title: string;
  description: string;
  price: number;
  primaryFacilities: ApartmentFacility[];
  facilities: ApartmentFacility[];
  primaryPhoto: ImageRequireSource;
  photos: string[];
}

export interface ApartmentFacility {
  title: string;
  icon?: string;
}
