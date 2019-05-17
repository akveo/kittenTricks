import React from 'react';
import {
  Image,
  ImageBackground,
  ImageBackgroundProps,
  ImageProps,
  StyleSheet,
} from 'react-native';
import { theme } from '@eva/theme-eva';
import { StyleType } from '@kitten/theme';
import { PlayCircleIcon } from '@src/assets/icons';
import {
  FileType,
  Message,
} from '@src/core/model';
import { ChatFileMessageAppearance } from './type';

interface UiFileType {
  view(message: Message, appearance: ChatFileMessageAppearance): React.ReactElement<any>;
}

function getPhotoFileComponent(message: Message, appearance: ChatFileMessageAppearance) {
  const style: StyleType = isFullAppearance(appearance) ?
    styles.fullMessageImage : styles.preViewAppearanceImage;

  return (
    <Image
      key={2}
      style={style}
      source={message.file.preview.imageSource}
    />
  );
}

type VideoComponentProps = { iconStyle: StyleType } & ImageBackgroundProps;

function getVideoFileComponent(message: Message, appearance: ChatFileMessageAppearance) {
  const style: StyleType = isFullAppearance(appearance) ?
    styles.fullMessageVideo : styles.preViewAppearanceImage;
  const imageStyle: StyleType = isFullAppearance(appearance) ?
    styles.fullMessageVideoPreview : styles.preViewAppearanceImage;
  const iconStyle: StyleType = isFullAppearance(appearance) ? styles.fullVideoIcon : styles.previewVideoIcon;

  return (
    <ImageBackground
      key={2}
      source={message.file.preview.imageSource}
      style={style}
      imageStyle={imageStyle}>
      {PlayCircleIcon(iconStyle)}
    </ImageBackground>
  );
}

const types: { [key in FileType]: UiFileType } = {
  [FileType.photo]: {
    view(message: Message, appearance: ChatFileMessageAppearance): React.ReactElement<ImageProps> {
      return getPhotoFileComponent(message, appearance);
    },
  },
  [FileType.video]: {
    view(message: Message, appearance: ChatFileMessageAppearance): React.ReactElement<VideoComponentProps> {
      return getVideoFileComponent(message, appearance);
    },
  },
};

export function getFileComponent(type: FileType): UiFileType {
  return types[type];
}

function isFullAppearance(appearance: ChatFileMessageAppearance) {
  return appearance === ChatFileMessageAppearance.full;
}

const styles = StyleSheet.create({
  fullMessageImage: {
    width: 64,
    height: 64,
    borderRadius: 20,
  },
  fullMessageVideo: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullMessageVideoPreview: {
    borderRadius: 20,
  },
  preViewAppearanceImage: {
    width: 124,
    height: 124,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullVideoIcon: {
    width: 30,
    height: 30,
    tintColor: theme['color-white'],
  },
  previewVideoIcon: {
    width: 50,
    height: 50,
    tintColor: theme['color-white'],
  },
});
