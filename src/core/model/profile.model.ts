export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
}

export interface Profile {
  photo: string;
  about: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  age: number;
  weight: number;
  height: number;
  inseam: number;
  email: string;
  phoneNumber: string;
  location: string;
  onLine?: boolean;
}

export interface ProfileSocials {
  followers: number;
  following: number;
  posts: number;
}
