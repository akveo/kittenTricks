import React from 'react';
import { ImageRequireSource } from 'react-native';
import {
  AppLoading,
  AppLoadingProps,
  Asset,
  Font,
} from 'expo';

export interface Assets {
  images: ImageRequireSource[];
  fonts: Font.FontMap;
}

interface Props {
  assets: Assets;
  children: React.ReactNode;
}

interface State {
  loaded: boolean;
}

type LoadingElement = React.ReactElement<AppLoadingProps>;

/**
 * Loads child component after asynchronous tasks are done
 */
export class ApplicationLoader extends React.Component<Props, State> {

  public state: State = {
    loaded: false,
  };

  private onLoadSuccess = () => {
    this.setState({ loaded: true });
  };

  private onLoadError = (error: Error) => {
    console.warn(error);
  };

  private loadResources = (): Promise<void> => {
    return this.loadResourcesAsync(this.props.assets);
  };

  private loadFonts = (fonts: Font.FontMap): Promise<void> => {
    return Font.loadAsync(fonts);
  };

  private loadImages = (images: ImageRequireSource[]): Promise<void[]> => {
    const tasks: Promise<void>[] = images.map((image: ImageRequireSource): Promise<void> => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(tasks);
  };

  private async loadResourcesAsync(assets: Assets): Promise<void> {
    const { fonts, images } = assets;

    // @ts-ignore (expo type error)
    return Promise.all([
      this.loadFonts(fonts),
      this.loadImages(images),
    ]);
  }

  private renderLoading = (): LoadingElement => {
    return (
      <AppLoading
        startAsync={this.loadResources}
        onFinish={this.onLoadSuccess}
        onError={this.onLoadError}
      />
    );
  };

  public render(): React.ReactNode {
    return this.state.loaded ? this.props.children : this.renderLoading();
  }
}
