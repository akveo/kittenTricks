import React from 'react';
import {
  Image,
  ViewProps,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Message } from '@src/core/model';
import { ChatFileMessageAppearance } from './type';

interface ComponentProps {
  message: Message;
  appearance: ChatFileMessageAppearance;
}

export type PhotoMessageProps = ThemedComponentProps & ViewProps & ComponentProps;

class PhotoMessageComponent extends React.Component<PhotoMessageProps> {

  private isFullAppearance = (appearance: ChatFileMessageAppearance): boolean => {
    return appearance === ChatFileMessageAppearance.full;
  };

  public render(): React.ReactNode {
    const { themedStyle, appearance, message } = this.props;

    const isFull: boolean = this.isFullAppearance(appearance);

    const style: StyleType = isFull ? themedStyle.fullMessageImage : themedStyle.preViewAppearanceImage;

    return (
      <Image
        key={2}
        style={style}
        source={message.file.preview.imageSource}
      />
    );
  }
}

export const PhotoMessage = withStyles(PhotoMessageComponent, (theme: ThemeType) => ({
  fullMessageImage: {
    width: 64,
    height: 64,
    borderRadius: 20,
  },
  preViewAppearanceImage: {
    width: 124,
    height: 124,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
