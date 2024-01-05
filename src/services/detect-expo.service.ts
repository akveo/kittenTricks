import Constants, { AppOwnership } from 'expo-constants';

export const isExpo = Constants.appOwnership === AppOwnership.Expo;
