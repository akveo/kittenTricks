import { isExpo } from '../services/detect-expo.service';

const Component = isExpo
  ? require('./app-loading.component.ex')
  : require('./app-loading.component.rn');

export type TaskResult<T = any> = [string, T];
export type Task = () => Promise<TaskResult | null>;

export const AppLoading = Component.AppLoading;
export const LoadFontsTask = Component.LoadFontsTask;
