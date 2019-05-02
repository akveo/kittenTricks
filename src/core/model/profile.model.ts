import { ImageRequireSource } from 'react-native';

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
  source: ImageRequireSource;
}
