import { ImageSource } from '@src/assets/images';

export interface Product {
  name: string;
  type: string;
  cost: number;
  currency: string;
  photo: ImageSource;
  description: string;
  size: string;
  colors: string[];
}
