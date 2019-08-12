import {
  File,
  FileType,
} from '@src/core/model';
import {
  imageMessage1,
  imageMessage2,
} from '@src/assets/images';

export const file1: File = {
  type: FileType.photo,
  preview: imageMessage1,
  name: 'IMG_1357.JSG',
};

export const file2: File = {
  type: FileType.video,
  preview: imageMessage2,
  name: 'Video_1231231242141.AVI',
};
