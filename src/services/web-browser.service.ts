import Constants from 'expo-constants';

const Service =
  Constants.expoGoConfig === null
    ? require('./web-browser.service.rn')
    : require('./web-browser.service.ex');

export const WebBrowserService = Service.WebBrowserService;
