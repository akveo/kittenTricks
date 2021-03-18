import Constants from 'expo-constants';

import { AppReloadService as RNService } from './app-reload.service.rn';
import { AppReloadService as ExpoService } from './app-reload.service.expo';

const Service = Constants.platform ? ExpoService : RNService;

export const AppReloadService = Service;
