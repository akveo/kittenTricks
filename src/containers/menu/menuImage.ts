import React from 'react';
import { ImageProps } from 'react-native';
import { ThemeKey } from '@src/core/themes';

export type LayoutMenuImageConfig = { [key in ThemeKey]?: React.ReactElement<ImageProps> };

export class MenuImage {

  public static select = (config: LayoutMenuImageConfig,
                          currentTheme: ThemeKey): any => {

    const currentKey: string = Object.keys(config)
      .find((key: string) => key === currentTheme);

    return config[currentKey];
  };

}
