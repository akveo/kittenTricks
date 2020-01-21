import { ImageSourcePropType } from 'react-native';

export class Profile {

  constructor(readonly firstName: string,
              readonly lastName: string,
              readonly photo: ImageSourcePropType,
              readonly location: string,
              readonly followers: number,
              readonly following: number,
              readonly posts: number) {
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static jenniferGreen(): Profile {
    return new Profile(
      'Jennifer',
      'Green',
      require('../assets/image-profile-1.jpg'),
      'Berlin, Germany',
      1500,
      700,
      86,
    );
  }

  static alexaTenorio(): Profile {
    return new Profile(
      'Alexa',
      'Tenorio',
      require('../assets/image-profile-2.jpg'),
      'Tokyo, Japan',
      2500,
      172,
      32,
    );
  }
}

export class Post {

  constructor(readonly image: ImageSourcePropType,
              readonly author: Profile,
              readonly date: string,
              readonly likes: Like[]) {
  }

  static byAlexaTenorio(): Post {
    return new Post(
      require('../assets/image-post-1.jpg'),
      Profile.alexaTenorio(),
      'Today 12:35 pm',
      [
        Like.byAlexaTenorio(),
        Like.byJenniferGreen(),
      ],
    );
  }

  static byJenniferGreen(): Post {
    return new Post(
      require('../assets/image-post-2.jpg'),
      Profile.jenniferGreen(),
      'Today 12:35 pm',
      [
        Like.byAlexaTenorio(),
      ],
    );
  }
}

export class Like {

  constructor(readonly author: Profile) {
  }

  static byAlexaTenorio(): Like {
    return new Like(Profile.alexaTenorio());
  }

  static byJenniferGreen(): Like {
    return new Like(Profile.jenniferGreen());
  }
}
