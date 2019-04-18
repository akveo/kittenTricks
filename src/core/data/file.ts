import {
  File,
  FileType,
} from '@src/core/model';

export const file1: File = {
  type: FileType.photo,
  preview: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Big_and_little_dog_1.jpg',
  name: 'IMG_1357.JSG',
};

export const file2: File = {
  type: FileType.video,
  preview: 'https://ichef.bbci.co.uk/news/624/cpsprodpb/108E/production/_103883240_gettyimages-673732464.jpg',
  name: 'Video_1231231242141.AVI',
};
