export enum GenderType {
  MALE = 'Male',
  FEMALE = 'Female',
}

export interface ProfileType {
  photo: string;
  about: string;
  firstName: string;
  lastName: string;
  gender: GenderType;
  age: number;
  weight: number;
  height: number;
  email: string;
  phoneNumber: string;
}
