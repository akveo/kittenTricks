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
  onLine: true,
};

export const profile2: Profile = {
  photo: 'https://ewscripps.brightspotcdn.com/dims4/default/b8015c0/2147483647/strip/true/' +
    'crop/3000x1688+0+153/resize/1280x720!/quality/90/' +
    '?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F13%2Fdd%2Fa7ecf5684cce9f5902dc1b3275fe%2Fs105307045.JPG',
  about: 'Hi! My name is 21 Savage. I\'m 41 and I live in Atlanta.' +
    ' I\'m interested in swag, rap.',
  firstName: '21',
  lastName: 'Savage',
  gender: Gender.MALE,
  age: 26,
  weight: 75,
  height: 188,
  inseam: 43,
  email: '21.savage@gmail.com',
  phoneNumber: '+375 44 123 12 12',
  location: 'Atlanta, USA',
  onLine: false,
};

export const profile3: Profile = {
  photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Lebron_wizards_2017_%28cropped%29.jpg/' +
    '240px-Lebron_wizards_2017_%28cropped%29.jpg',
  about: 'Hi! My name is LeBron James. I\'m 34 and I live in Cleveland.' +
    ' I\'m interested in basketball.',
  firstName: 'LeBron',
  lastName: 'James',
  gender: Gender.MALE,
  age: 34,
  weight: 113,
  height: 203,
  inseam: 46,
  email: 'lebron.james@gmail.com',
  phoneNumber: '+375 44 123 12 12',
  location: 'Cleveland, USA',
  onLine: true,
};

export const profile4: Profile = {
  photo: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/' +
    'MTIwNjA4NjMzODc0NTE1NDY4/stephen-king-9365136-1-402.jpg',
  about: 'Hi! My name is Stephen King. I\'m 71 and I live in Portland.' +
    ' I\'m interested in writing.',
  firstName: 'Stephen',
  lastName: 'King',
  gender: Gender.MALE,
  age: 71,
  weight: 80,
  height: 180,
  inseam: 44,
  email: 'stephen.king@gmail.com',
  phoneNumber: '+375 44 123 12 12',
  location: 'Portland, USA',
  onLine: false,
};

export const profileSocials1: ProfileSocials = {
  followers: 1500,
  following: 86,
  posts: 116,
};
