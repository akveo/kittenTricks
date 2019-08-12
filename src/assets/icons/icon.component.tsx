import React from 'react';
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';

export interface IconSource {
  imageSource: ImageSourcePropType;
}

export class RemoteIcon implements IconSource {
  readonly source: string;

  constructor(source: string) {
    this.source = source;
  }

  get imageSource(): ImageSourcePropType {
    return { uri: this.source };
  }
}

export type IconElement = React.ReactElement<ImageProps>;

export const Icon = (source: IconSource, style: StyleProp<ImageStyle>): React.ReactElement<ImageProps> => {
  return (
    <Image
      style={style}
      source={source.imageSource}
    />
  );
};
