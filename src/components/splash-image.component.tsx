import { isExpo } from '../services/detect-expo.service';

const Component = isExpo
  ? require('./splash-image.component.ex')
  : require('./splash-image.component.rn');

export const SplashImage = Component;
