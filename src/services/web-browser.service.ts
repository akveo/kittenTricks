import Constants from 'expo-constants';

import { WebBrowserService as RNService } from './web-browser.service.rn';
import { WebBrowserService as ExpoService } from './web-browser.service.expo';

const Service = Constants.platform ? ExpoService : RNService;

export const WebBrowserService = Service;
