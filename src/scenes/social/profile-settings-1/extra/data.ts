import { ImageSourcePropType } from 'react-native';

export class Profile {

  constructor(readonly firstName: string,
              readonly lastName: string,
              readonly photo: ImageSourcePropType,
              readonly gender: Gender,
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
