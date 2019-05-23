import React from 'react';
import {
  ImageBackgroundProps,
  ImageProps,
} from 'react-native';
import { StyleType } from '@kitten/theme';
import {
  FileType,
  Message,
} from '@src/core/model';
import { ChatFileMessageAppearance } from './type';
import { VideoMessage } from './videoMessage.component';
import { PhotoMessage } from './photoMessage.component';

interface UiFileType {
  view(message: Message, appearance: ChatFileMessageAppearance): React.ReactElement<any>;
}

type VideoComponentProps = { iconStyle: StyleType } & ImageBackgroundProps;

const types: { [key in FileType]: UiFileType } = {
  [FileType.photo]: {
    view(message: Message, appearance: ChatFileMessageAppearance): React.ReactElement<ImageProps> {
      return (
        <PhotoMessage
          appearance={appearance}
          message={message}
        />
      );
    },
  },

  [FileType.video]: {
    view(message: Message, appearance: ChatFileMessageAppearance): React.ReactElement<VideoComponentProps> {
      return (
        <VideoMessage
          appearance={appearance}
          message={message}
        />
      );
    },
  },
};

export function getFileComponent(type: FileType): UiFileType {
  return types[type];
}

