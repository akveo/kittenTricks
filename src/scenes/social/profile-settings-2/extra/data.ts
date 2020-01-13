import { ImageSourcePropType } from 'react-native';

export class Profile {

  constructor(readonly firstName: string,
              readonly lastName: string,
              readonly photo: ImageSourcePropType,
              readonly gender: Gender,
              readonly description: string,
              readonly age: number,
              readonly weight: number,
              readonly height: number,
              readonly email: string,
              readonly phoneNumber: string) {
  }

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static jenniferGreen(): Profile {
    return new Profile(
      'Jennifer',
      'Green',
      require('../assets/image-profile.jpg'),
      Gender.FEMALE,
      'Hi! My name is Jennifer. I’m 25 and I live in Berlin. I’m interested in computer science, music, sport and fantasy literature.',
      25,
      48,
      174,
      'jen.green@gmail.com',
      '+375 44 846 97 68',
    );
  }
}

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
}
