import {
  CategorisedProfileActivity,
  Gender,
  Profile,
  ProfileActivity,
  ProfileSocials,
} from '@src/core/model';
import {
  feedImage1,
  feedImage2,
  feedImage3,
  feedImage4,
  feedImage5,
  feedImage6,
  feedImage7,
  feedImage8,
} from '@src/assets/images';

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
  friends: [],
  onLine: true,
};

export const profile2: Profile = {
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
  friends: [],
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
  friends: [],
  onLine: true,
};

export const profile4: Profile = {
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
  friends: [profile1, profile2, profile3],
  onLine: false,
};

export const profile5: Profile = {
  photo: 'https://images.findagrave.com/photos250/photos/2014/340/113073357_1417983022.jpg',
  about: 'Hi! My name is Dushane Daniel.',
  firstName: 'Daniel',
  lastName: 'Dushane',
  gender: Gender.MALE,
  age: 62,
  weight: 80,
  height: 175,
  inseam: 44,
  email: 'dushane.daniel@gmail.com',
  phoneNumber: '+375 44 123 12 12',
  location: 'Manchester, UK',
  friends: [profile1, profile2, profile3],
  onLine: true,
};

export const profile6: Profile = {
  photo: 'https://di-uploads-pod1.dealerinspire.com/bigislandmotors/uploads/2016/08/myyaauld3.png',
  about: 'Hi! My name is Shirai Subaru.',
  firstName: 'Shirai',
  lastName: 'Subaru',
  gender: Gender.FEMALE,
  age: 22,
  weight: 61,
  height: 165,
  inseam: 38,
  email: 'shirai.subaru@gmail.com',
  phoneNumber: '+375 44 123 12 12',
  location: 'Tokyo, Japan',
  friends: [profile1, profile2, profile3],
  onLine: false,
};

export const profile7: Profile = {
  photo: 'https://pbs.twimg.com/profile_images/1544045988/IMG00012-1_400x400.jpg',
  about: 'Hi! My name is Isaac Hunt.',
  firstName: 'Isaac',
  lastName: 'Hunt',
  gender: Gender.MALE,
  age: 56,
  weight: 99,
  height: 185,
  inseam: 45,
  email: 'isaac.hunt@gmail.com',
  phoneNumber: '+375 44 123 12 12',
  location: 'NY, USA',
  friends: [profile1, profile2, profile3],
  onLine: true,
};

export const profile8: Profile = {
  photo: 'https://peab.inpublix.com/2016/wp-content/uploads/sites/2/2016/12/mp.jpg',
  about: 'Hi! My name is Torsten Paulsson.',
  firstName: 'Torsten',
  lastName: 'Paulsson',
  gender: Gender.MALE,
  age: 60,
  weight: 88,
  height: 167,
  inseam: 43,
  email: 'torsten.paulsson@gmail.com',
  phoneNumber: '+375 44 123 12 12',
  location: 'Oslo, Norway',
  friends: [profile1, profile2, profile3],
  onLine: false,
};

export const profile9: Profile = {
  photo: 'https://i.pinimg.com/280x280_RS/5e/78/36/5e783642a0719119c2e066367643b373.jpg',
  about: 'Hi! My name is Lidmila Vilensky.',
  firstName: 'Lidmila',
  lastName: 'Vilensky',
  gender: Gender.FEMALE,
  age: 26,
  weight: 55,
  height: 175,
  inseam: 36,
  email: 'lidmila.vilensky@gmail.com',
  phoneNumber: '+375 44 123 12 12',
  location: 'Minsk, Belarus',
  friends: [profile1, profile2, profile3],
  onLine: false,
};

export const profile10: Profile = {
  photo: 'https://digitaltechteam.com/wp-content/uploads/2018/12/team-member-4.jpg',
  about: 'Hi! My name is Olivia Arribas.',
  firstName: 'Olivia',
  lastName: 'Arribas',
  gender: Gender.FEMALE,
  age: 22,
  weight: 55,
  height: 170,
  inseam: 39,
  email: 'olivia.arribas@gmail.com',
  phoneNumber: '+375 44 123 12 12',
  location: 'Erlangen, Germany',
  friends: [profile1, profile2, profile3],
  onLine: false,
};

export const profileSocials1: ProfileSocials = {
  followers: 1500,
  following: 86,
  posts: 116,
};

export const profileActivity1: ProfileActivity[] = [
    {
      category: 'Plants',
      source: feedImage1,
    },
    {
      category: 'Plants',
      source: feedImage2,
    },
    {
      category: 'Plants',
      source: feedImage3,
    },
    {
      category: 'Plants',
      source: feedImage1,
    },
    {
      category: 'Plants',
      source: feedImage2,
    },
    {
      category: 'Travel',
      source: feedImage7,
    },
    {
      category: 'Travel',
      source: feedImage8,
    },
    {
      category: 'Travel',
      source: feedImage7,
    },
    {
      category: 'Travel',
      source: feedImage8,
    },
    {
      category: 'Travel',
      source: feedImage7,
    },
    {
      category: 'style',
      source: feedImage4,
    },
    {
      category: 'style',
      source: feedImage5,
    },
    {
      category: 'style',
      source: feedImage6,
    },
    {
      category: 'style',
      source: feedImage4,
    },
    {
      category: 'style',
      source: feedImage5,
    },
  ]
;

export const categorisedProfileActivity1: CategorisedProfileActivity = {
  ['Plants']: [
    {
      category: 'Plants',
      source: feedImage1,
    },
    {
      category: 'Plants',
      source: feedImage2,
    },
    {
      category: 'Plants',
      source: feedImage3,
    },
    {
      category: 'Plants',
      source: feedImage1,
    },
    {
      category: 'Plants',
      source: feedImage2,
    },
  ],
  ['Travel']: [
    {
      category: 'Travel',
      source: feedImage7,
    },
    {
      category: 'Travel',
      source: feedImage8,
    },
    {
      category: 'Travel',
      source: feedImage7,
    },
    {
      category: 'Travel',
      source: feedImage8,
    },
    {
      category: 'Travel',
      source: feedImage7,
    },
  ],
  ['Style']: [
    {
      category: 'Style',
      source: feedImage4,
    },
    {
      category: 'Style',
      source: feedImage5,
    },
    {
      category: 'Style',
      source: feedImage6,
    },
    {
      category: 'Style',
      source: feedImage4,
    },
    {
      category: 'Style',
      source: feedImage5,
    },
  ],
};
