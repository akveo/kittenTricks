export enum  FileType {
  photo = 'photo',
  video = 'video',
}

export interface File {
  preview: string;
  type: FileType;
  name: string;
}
