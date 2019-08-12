import { ImageSource } from '@src/assets/images';

export interface Movie {
  name: string;
  part: string;
  description: string;
  preview: ImageSource;
  rating: number;
  categories: string[];
  details: MovieDetail[];
  screenshots: ImageSource[];
}

export interface MovieDetail {
  description: string;
  value: string | number;
}

export class YearDetail implements MovieDetail {
  readonly year: number;

  constructor(year: number) {
    this.year = year;
  }

  readonly description: string = 'Year';

  get value(): string | number {
    return this.year;
  }
}

export class CountryDetail implements MovieDetail {
  readonly country: string;

  constructor(country: string) {
    this.country = country;
  }

  readonly description: string = 'Country';

  get value(): string | number {
    return this.country;
  }
}

export class LengthDetail implements MovieDetail {
  readonly length: number;

  constructor(length: number) {
    this.length = length;
  }

  readonly description: string = 'Length';

  get value(): string | number {
    return `${this.length} min`;
  }
}

