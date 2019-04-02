import {
  Gender,
  Profile,
  ProfileSocials,
} from '@src/core/model';

export const profile1: Profile = {
  photo: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7790309/cena.jpg',
  about: 'Hi! My name is John Cena. I\'m 41 and I live in Florida.' +
    ' I\'m interested in computer science, music, sport and fantasy literature.',
  firstName: 'John',
  lastName: 'Cena',
  gender: Gender.MALE,
  age: 41,
  weight: 114,
  height: 184,
  inseam: 45,
  email: 'john.cena@gmail.com',
  phoneNumber: '+375 44 846 97 68',
  location: 'Florida, USA',
};

export const profileSocials1: ProfileSocials = {
  followers: 1500,
  following: 86,
  posts: 116,
};
