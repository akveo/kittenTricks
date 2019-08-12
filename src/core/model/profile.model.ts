import { ImageSource } from '@src/assets/images';

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
}

export interface Profile {
  photo: ImageSource;
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
  friends: Profile[];
  onLine?: boolean;
}

export interface ProfileSocials {
  followers: number;
  following: number;
  posts: number;
}

export interface CategorisedProfileActivity {
  [category: string]: ProfileActivity[];
}

export interface ProfileActivity {
  category: string;
  source: ImageSource;
}
