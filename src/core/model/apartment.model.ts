export interface Apartment {
  title: string;
  description: string;
  price: number;
  primaryFacilities: ApartmentFacility[];
  facilities: ApartmentFacility[];
  primaryPhoto: string;
  photos: string[];
}

export interface ApartmentFacility {
  title: string;
  icon?: string;
}
