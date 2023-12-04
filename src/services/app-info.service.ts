import { isExpo } from './detect-expo.service';

const Service = isExpo
  ? require('./app-info.service.ex')
  : require('./app-info.service.rn');

export const AppInfoService = Service.AppInfoService;
