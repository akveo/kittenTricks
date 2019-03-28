import {
  GenderType,
  ProfileType,
} from './type';

export const Profile1: ProfileType = {
  photo: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7790309/cena.jpg',
  about: 'Hi! My name is John Cena. I\'m 41 and I live in Florida.' +
    ' I\'m interested in computer science, music, sport and fantasy literature.',
  firstName: 'John',
  lastName: 'Cena',
  gender: GenderType.MALE,
  age: 41,
  weight: 114,
  height: 184,
  email: 'john.cena@gmail.com',
  phoneNumber: '+375 44 846 97 68',
};
