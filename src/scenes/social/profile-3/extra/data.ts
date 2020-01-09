import { ImageSourcePropType } from 'react-native';

export class Profile {

  constructor(readonly firstName: string,
              readonly lastName: string,
              readonly photo: ImageSourcePropType,
              readonly location: string,
              readonly experience: number,
              readonly description: string,
              readonly followers: number,
              readonly following: number,
              readonly posts: number,
              readonly height: number,
              readonly weight: number) {
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static jenniferGreen(): Profile {
    return new Profile(
      'Jennifer',
      'Green',
      require('../assets/image-profile.jpg'),
      'Berlin, Germany',
      3,
      'Hi! My name is Jennifer. I’m 25 and I live in Berlin. I’m interested in computer science, music, sport and fantasy literature.',
      1500,
      86,
      116,
      174,
      48,
    );
  }
}
