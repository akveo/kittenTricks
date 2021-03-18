import Constants from 'expo-constants';

import { SplashImage as RNComponent } from './splash-image.component.rn';
import { SplashImage as ExpoComponent } from './splash-image.component.expo';

const Component = Constants.platform ? ExpoComponent : RNComponent;

export const SplashImage = Component;
