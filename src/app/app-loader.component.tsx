import React from 'react';
import { ImageRequireSource } from 'react-native';
import { AppLoading, SplashScreen } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { LoadingAnimation, LoadingAnimationProps } from './app-loader-animation.component';

export interface Assets {
  images?: ImageRequireSource[];
  fonts?: Record<string, number>;
}

export interface ApplicationLoaderProps extends Omit<LoadingAnimationProps, 'isLoaded'> {
  assets: Assets;
  children: React.ReactNode;
}

SplashScreen.preventAutoHide();

export const ApplicationLoader = (props: ApplicationLoaderProps): React.ReactElement => {

  const [loaded, setLoaded] = React.useState<boolean>(false);

  const onLoadSuccess = (): void => {
    setLoaded(true);
    SplashScreen.hide();
  };

  const loadResources = (): Promise<void> => {
    return loadResourcesAsync(props.assets);
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

  const loadResourcesAsync = (assets: Assets): Promise<any> => {
    return Promise.all([
      loadFonts(assets.fonts || {}),
      loadImages(assets.images || []),
    ]);
  };

  const renderLoading = (): React.ReactElement => (
    <AppLoading
      startAsync={loadResources}
      onFinish={onLoadSuccess}
      autoHideSplash={false}
    />
  );

  return (
    <React.Fragment>
      {loaded ? props.children : renderLoading()}
      <LoadingAnimation
        splash={props.splash}
        isLoaded={loaded}
      />
    </React.Fragment>
  );
};
