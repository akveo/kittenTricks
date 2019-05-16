import { IconSource } from '@src/assets/icons';
import { ImageSource } from '@src/assets/images';

export interface Training {
  icon: IconSource;
  photo: ImageSource;
  category: string;
  time: number;
  styx: number;
  description: string;
}
