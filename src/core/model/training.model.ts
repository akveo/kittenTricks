import { ImageSource } from '@src/assets/images';
import {
  IconElement,
  IconProps,
} from '@kitten/ui';
import { ImageProps } from 'react-native';

export interface Training {
  icon: (style: IconProps<ImageProps>) => IconElement<ImageProps>;
  photo: ImageSource;
  category: string;
  time: number;
  styx: number;
  description: string;
}
