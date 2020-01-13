import { ImageSourcePropType } from 'react-native';

export class Profile {

  constructor(readonly firstName: string,
              readonly lastName: string,
              readonly photo: ImageSourcePropType,
              readonly location: string,
              readonly experience: number,
              readonly height: number,
              readonly weight: number,
              readonly age: number,
              readonly inseam: number) {
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static jenAustin(): Profile {
    return new Profile(
      'Jen',
      'Austin',
      require('../assets/image-profile.jpg'),
      'Berlin, Germany',
      3,
      174,
      48,
      25,
      45,
    );
  }
}
