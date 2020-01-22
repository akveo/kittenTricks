import React from 'react';
import { ImageRequireSource } from 'react-native';
import { AppLoading, SplashScreen } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { LoadingAnimation, LoadingAnimationProps } from './app-loader-animation.component';
import { AppConfig } from '../model/app-config.model';
import { AppStorage } from '../services/app-storage.service';
import { Mapping } from '../services/theme.service';

export interface Assets {
  images?: ImageRequireSource[];
  fonts?: Record<string, number>;
}

export interface ApplicationLoaderProps extends Omit<LoadingAnimationProps, 'isLoaded'> {
  assets: Assets;
  initialConfig: AppConfig;
  children: (config: AppConfig) => React.ReactNode;
}

SplashScreen.preventAutoHide();

/**
 * Loads application resources and application config from `AppStorage`
 *
 * @property {Assets} assets - assets to load.
 *
 * @property {AppConfig} initialConfig - default application config.
 * Should not be nullable to avoid loading errors.
 *
 * @property {(config: AppConfig) => React.ReactElement} - Should return Application component
 */
export const ApplicationLoader = (props: ApplicationLoaderProps): React.ReactElement => {

  const [loaded, setLoaded] = React.useState<boolean>(false);
  const appConfig = props.initialConfig;

  const onLoadSuccess = (): void => {
    setLoaded(true);
    SplashScreen.hide();
  };

  const loadResourcesAndApplicationConfig = (): Promise<void> => {
    return loadResources(props.assets)
      .then(loadApplicationConfig);
  };

  const loadFonts = (fonts: { [key: string]: number }): Promise<void> => {
    return Font.loadAsync(fonts);
  };

  const loadImages = (images: ImageRequireSource[]): Promise<void[]> => {
    const tasks: Promise<void>[] = images.map((image: ImageRequireSource): Promise<void> => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(tasks);
  };

  const loadApplicationConfig = (): Promise<void> => {
    return AppStorage.getMapping(props.initialConfig.mapping).then((mapping: Mapping): void => {
      appConfig.mapping = mapping;
    });
  };

  const loadResources = (assets: Assets): Promise<any> => {
    return Promise.all([
      loadFonts(assets.fonts || {}),
      loadImages(assets.images || []),
    ]);
  };

  const renderLoading = (): React.ReactElement => (
    <AppLoading
      startAsync={loadResourcesAndApplicationConfig}
      onFinish={onLoadSuccess}
      autoHideSplash={false}
    />
  );

  return (
    <React.Fragment>
      {loaded ? props.children(appConfig) : renderLoading()}
      <LoadingAnimation
        splash={props.splash}
        isLoaded={loaded}
      />
    </React.Fragment>
  );
};
