import React from 'react';
import { ImageProps } from 'react-native';
import { CurrentTheme } from '@src/core/model';

export enum LayoutMenuImages {
  light = 'light',
  dark = 'dark',
}

export type LayoutMenuImageConfig = { [key in LayoutMenuImages]?: React.ReactElement<ImageProps> };

export class MenuImage {

  public static select = (config: LayoutMenuImageConfig,
                          currentTheme: CurrentTheme): any => {

    const currentKey: string = Object.keys(config)
      .find((key: string) => key === currentTheme);

    return config[currentKey];
  };

}
