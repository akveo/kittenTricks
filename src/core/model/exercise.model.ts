import { ImageSource } from '@src/assets/images';

export interface Exercise {
  name: string;
  image: ImageSource;
  duration: string;
  level: 'Easy' | 'Medium' | 'Hard';
  energy: string;
}
