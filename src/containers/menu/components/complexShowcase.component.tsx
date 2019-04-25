import {
  ImageStyle,
  StyleProp,
} from 'react-native';
import { theme } from 'eva/packages/theme/eva';
import { StarIcon } from '@src/assets/icons';

export const ComplexComponentShowcase = () => {
  const style: StyleProp<ImageStyle> = {
    width: 32,
    height: 32,
    tintColor: theme['color-primary-500'],
  };

  return StarIcon(style);
};
