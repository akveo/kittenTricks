import {
  Apartment,
  ApartmentFacility,
} from '../model/apartment.model';

/* tslint:disable */

class GuestsFacility implements ApartmentFacility {
  readonly count: number;

  constructor(count: number) {
    this.count = count;
  }

  get title(): string {
    return `${this.count} Guests`;
  }
}

class BedsFacility implements ApartmentFacility {
  readonly count: number;

  constructor(count: number) {
    this.count = count;
  }

  get title(): string {
    return `${this.count} Bed`;
  }
}

class BathFacility implements ApartmentFacility {
  readonly count: number;

  constructor(count: number) {
    this.count = count;
  }

  get title(): string {
    return `${this.count} Baths`;
  }
}

const wifiFacility: ApartmentFacility = {
  title: 'Wi-Fi',
  icon: 'https://akveo.github.io/eva-icons/outline/png/128/wifi-outline.png',
};

const tvFacility: ApartmentFacility = {
  title: 'TV',
  icon: 'https://akveo.github.io/eva-icons/fill/png/128/tv.png',
};

const freeParkingFacility: ApartmentFacility = {
  title: 'Free Parking',
  icon: 'https://akveo.github.io/eva-icons/fill/png/128/car.png',
};

export const apartment1: Apartment = {
  title: 'Private Rooms with Central Park View',
  description: 'The apartment consists of 2 separate bedrooms, 1 bathroom with a hair dryer. A flat-screen TV and Blu-ray player are available.\n\nRodin Museum is 4.2 km from the apartment, while Orsay Museum is 5 km away. The nearest airport is Paris - Orly Airport, 13 km from the property.',
  price: 10,
  primaryFacilities: [
    new GuestsFacility(2),
    new BedsFacility(2),
    new BathFacility(2),
  ],
  facilities: [
    wifiFacility,
    tvFacility,
    freeParkingFacility,
  ],
  primaryPhoto: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
  photos: [
    'https://images.unsplash.com/photo-1527030280862-64139fba04ca',
    'https://images.unsplash.com/photo-1486304873000-235643847519',
    'https://images.unsplash.com/photo-1528914137830-c85ee162f588',
    'https://images.unsplash.com/photo-1499955085172-a104c9463ece',
  ],
};


