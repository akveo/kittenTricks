import {
  CategorisedProfileActivity,
  Gender,
  Profile,
  ProfileActivity,
  ProfileSocials,
} from '@src/core/model';
import {
  imageFeed1,
  imageFeed2,
  imageFeed3,
  imageFeed4,
  imageFeed5,
  imageFeed6,
  imageFeed7,
  imageFeed8,
  imageFeed9,
  imageProfile1,
  imageProfile10,
  imageProfile2,
  imageProfile3,
  imageProfile4,
  imageProfile5,
  imageProfile6,
  imageProfile7,
  imageProfile8,
  imageProfile9,
} from '@src/assets/images';

export const profile1: Profile = {
  photo: imageProfile1,
  about: 'Hi! My name is Jennifer. I\'m 25 and I live in Berlin.' +
    ' I\'m interested in computer science, music, sport and fantasy literature',
  firstName: 'Jennifer',
  lastName: 'Green',
  gender: Gender.FEMALE,
  age: 25,
  weight: 48,
  height: 174,
  inseam: 45,
  email: 'jen.green@gmail.com',
  phoneNumber: '+375 44 846 97 68',
  location: 'Berlin, Germany',
  friends: [],
  onLine: true,
};

export const profile2: Profile = {
  photo: imageProfile2,
  about: 'Hi! My name is Alexa. I\'m 25 and I live in Berlin.' +
    ' I\'m interested in computer science, music, sport and fantasy literature',
  firstName: 'Alexa',
  lastName: 'Tenorio',
  gender: Gender.FEMALE,
  age: 25,
  weight: 48,
  height: 174,
  inseam: 44,
  email: 'alexa.tenorio@gmail.com',
  phoneNumber: '+375 44 123 12 12',
  location: 'Portland, USA',
  friends: [],
  onLine: false,
};

export const profile3: Profile = {
  photo: imageProfile3,
  about: 'Hi! My name is Isaac. I\'m 25 and I live in Berlin.' +
    ' I\'m interested in computer science, music, sport and fantasy literature',
  firstName: 'Isaac',
  lastName: 'Hunt',
  gender: Gender.MALE,
  age: 34,
  weight: 113,
  height: 203,
  inseam: 46,
  email: 'daly.harry@gmail.com',
  phoneNumber: '+375 44 123 12 12',
  location: 'Cleveland, USA',
  friends: [],
  onLine: true,
};

export const profile4: Profile = {
  photo: imageProfile4,
  about: 'Hi! My name is Jen. I\'m 41 and I live in Atlanta.' +
    ' I\'m interested in swag, rap.',
  firstName: 'Jen',
  lastName: 'Austin',
  gender: Gender.FEMALE,
  age: 25,
  weight: 48,
  height: 174,
  inseam: 44,
  email: 'jen.austin@gmail.com',
  phoneNumber: '+375 44 123 12 12',
  location: 'Berlin, Germany',
  friends: [profile1, profile2, profile3],
  onLine: false,
};

export const profile5: Profile = {
  photo: imageProfile5,
  about: 'Hi! My name is Kristen. I\'m 25 and I live in Berlin.' +
    ' I\'m interested in computer science, music, sport and fantasy literature',
  firstName: 'Kirsten',
  lastName: 'Crarke',
  gender: Gender.FEMALE,
  age: 25,
  weight: 48,
  height: 174,
  inseam: 44,
  email: 'kirs.clarke@gmail.com',
  phoneNumber: '+375 44 123 12 12',
  location: 'Australia',
  friends: [profile1, profile2, profile3],
  onLine: true,
};

export const profile6: Profile = {
  photo: imageProfile6,
  about: 'I\'m a Traveller. I like listening to music,' +
    ' going to the cinema, walking with my friends, drawing pictures and travelling',
  firstName: 'Helen',
  lastName: 'Kuper',
  gender: Gender.FEMALE,
  age: 25,
  weight: 48,
  height: 174,
  inseam: 44,
  email: 'helen.kuper@gmail.com',
  phoneNumber: '+375 44 123 12 12',
  location: 'Germany',
  friends: [profile1, profile2, profile3],
  onLine: false,
};

export const profile7: Profile = {
  photo: imageProfile7,
  about: 'Hi! My name is Dushane. I\'m 25 and I live in Berlin.' +
    ' I\'m interested in computer science, music, sport and fantasy literature',
  firstName: 'Dushane',
  lastName: 'Daniel',
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
  photo: imageProfile8,
  about: 'Hi! My name is Shirai. I\'m 25 and I live in Berlin.' +
    ' I\'m interested in computer science, music, sport and fantasy literature',
  firstName: 'Shirai',
  lastName: 'Subaru',
  gender: Gender.FEMALE,
  age: 60,
  weight: 88,
  height: 167,
  inseam: 43,
  email: 'shirai.subaru@gmail.com',
  phoneNumber: '+375 44 123 12 12',
  location: 'Oslo, Norway',
  friends: [profile1, profile2, profile3],
  onLine: false,
};

export const profile9: Profile = {
  photo: imageProfile9,
  about: 'Hi! My name is Ray. I\'m 25 and I live in Berlin.' +
    ' I\'m interested in computer science, music, sport and fantasy literature',
  firstName: 'Ray',
  lastName: 'Cooper',
  gender: Gender.MALE,
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
  photo: imageProfile10,
  about: 'Hi! My name is Alex. I\'m 25 and I live in Berlin.' +
    ' I\'m interested in computer science, music, sport and fantasy literature',
  firstName: 'Alex',
  lastName: 'Walker',
  gender: Gender.MALE,
  age: 22,
  weight: 55,
  height: 170,
  inseam: 39,
  email: 'alex.walker@gmail.com',
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
      source: imageFeed1,
    },
    {
      category: 'Plants',
      source: imageFeed2,
    },
    {
      category: 'Plants',
      source: imageFeed3,
    },
    {
      category: 'Plants',
      source: imageFeed1,
    },
    {
      category: 'Plants',
      source: imageFeed2,
    },
    {
      category: 'Travel',
      source: imageFeed7,
    },
    {
      category: 'Travel',
      source: imageFeed8,
    },
    {
      category: 'Travel',
      source: imageFeed9,
    },
    {
      category: 'Travel',
      source: imageFeed8,
    },
    {
      category: 'Travel',
      source: imageFeed7,
    },
    {
      category: 'style',
      source: imageFeed4,
    },
    {
      category: 'style',
      source: imageFeed5,
    },
    {
      category: 'style',
      source: imageFeed6,
    },
    {
      category: 'style',
      source: imageFeed4,
    },
    {
      category: 'style',
      source: imageFeed5,
    },
  ]
;

export const categorisedProfileActivity1: CategorisedProfileActivity = {
  ['Plants']: [
    {
      category: 'Plants',
      source: imageFeed1,
    },
    {
      category: 'Plants',
      source: imageFeed2,
    },
    {
      category: 'Plants',
      source: imageFeed3,
    },
    {
      category: 'Plants',
      source: imageFeed1,
    },
    {
      category: 'Plants',
      source: imageFeed2,
    },
  ],
  ['Travel']: [
    {
      category: 'Travel',
      source: imageFeed7,
    },
    {
      category: 'Travel',
      source: imageFeed8,
    },
    {
      category: 'Travel',
      source: imageFeed9,
    },
    {
      category: 'Travel',
      source: imageFeed8,
    },
    {
      category: 'Travel',
      source: imageFeed7,
    },
  ],
  ['Style']: [
    {
      category: 'Style',
      source: imageFeed4,
    },
    {
      category: 'Style',
      source: imageFeed5,
    },
    {
      category: 'Style',
      source: imageFeed6,
    },
    {
      category: 'Style',
      source: imageFeed4,
    },
    {
      category: 'Style',
      source: imageFeed5,
    },
  ],
};
