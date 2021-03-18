import Constants from 'expo-constants';

import { AppInfoService as RNService } from './app-info.service.rn';
import { AppInfoService as ExpoService} from './app-info.service.expo';

const Service = Constants.platform ? ExpoService : RNService;

export const AppInfoService = Service;
