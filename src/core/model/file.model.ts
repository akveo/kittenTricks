import { ImageSource } from '@src/assets/images';

export enum  FileType {
  photo = 'photo',
  video = 'video',
}

export interface File {
  preview: ImageSource;
  type: FileType;
  name: string;
}
