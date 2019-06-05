import React from 'react';
import {
  ImageBackground,
  ViewProps,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { PlayCircleIconFill } from '@src/assets/icons';
import { Message } from '@src/core/model';
import { ChatFileMessageAppearance } from './type';

interface ComponentProps {
  message: Message;
  appearance: ChatFileMessageAppearance;
}

export type VideoMessageProps = ThemedComponentProps & ViewProps & ComponentProps;

class VideoMessageComponent extends React.Component<VideoMessageProps> {

  private isFullAppearance = (appearance: ChatFileMessageAppearance): boolean => {
    return appearance === ChatFileMessageAppearance.full;
  };

  public render(): React.ReactNode {
    const { themedStyle, appearance, message } = this.props;

    const isFull: boolean = this.isFullAppearance(appearance);

    const style: StyleType = isFull ? themedStyle.fullMessageVideo : themedStyle.preViewAppearanceImage;
    const imageStyle: StyleType = isFull ? themedStyle.fullMessageVideoPreview : themedStyle.preViewAppearanceImage;
    const iconStyle: StyleType = isFull ? themedStyle.fullVideoIcon : themedStyle.previewVideoIcon;

    return (
      <ImageBackground
        key={2}
        source={message.file.preview.imageSource}
        style={style}
        imageStyle={imageStyle}>
        {PlayCircleIconFill(iconStyle)}
      </ImageBackground>
    );
  }
}

export const VideoMessage = withStyles(VideoMessageComponent, (theme: ThemeType) => ({
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
    tintColor: 'white',
  },
  previewVideoIcon: {
    width: 50,
    height: 50,
    tintColor: 'white',
  },
}));
