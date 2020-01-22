import { AsyncStorage } from 'react-native';
import { Mapping } from './theme.service';

export class AppStorage {

  static getMapping = (fallback?: Mapping): Promise<Mapping> => {
    return AsyncStorage.getItem('mapping').then((mapping: Mapping) => {
      return mapping || fallback;
    });
  };

  static setMapping = (mapping: Mapping): Promise<void> => {
    return AsyncStorage.setItem('mapping', mapping);
  };
}
