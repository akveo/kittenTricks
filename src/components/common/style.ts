import { Platform } from 'react-native';
import { StyleType } from '@kitten/theme';

export const textStyle = {
  headline: getPlatformDependentFontStyle('opensans-bold', 'normal'),
  subtitle: getPlatformDependentFontStyle('opensans-semibold', 'normal'),
  paragraph: getPlatformDependentFontStyle('opensans-regular', 'normal'),
  caption1: getPlatformDependentFontStyle('opensans-regular', 'normal'),
  caption2: getPlatformDependentFontStyle('opensans-semibold', 'normal'),
  label: getPlatformDependentFontStyle('opensans-bold', 'normal'),
  button: {
    // fontFamily: 'opensans-extrabold',
  },
};

function getPlatformDependentFontStyle(fontFamily: string, fontWeight: string): StyleType {
  return Platform.select({
    ios: {
      fontFamily: fontFamily,
    },
    android: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
    },
  });
}
