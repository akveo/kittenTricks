import { ImageSourcePropType } from 'react-native';

export class Product {

  constructor(readonly title: string,
              readonly subtitle: string,
              readonly description: string,
              readonly price: string,
              readonly image: ImageSourcePropType,
              readonly size: string,
              readonly colors: ProductColor[],
              readonly comments: Comment[]) {
  }

  static pinkChair(): Product {
    return new Product(
      'Pink Chair',
      'Furniture',
      'The Vitra Plastic Side Chairs are undoubtedly an absolute classic when it comes to the living area. The unusual mix of a plastic seat shell and wooden frame has since become a source of inspiration for many designers.',
      '150$',
      require('../assets/image-product.png'),
      'H:80cm W:50cm D:40cm',
      [
        ProductColor.gray(),
        ProductColor.pink(),
        ProductColor.orange(),
      ],
      [
        Comment.byHubertFranck(),
      ],
    );
  }
}

export class ProductColor {

  constructor(readonly value: string,
              readonly description: string) {
  }

  static gray(): ProductColor {
    return new ProductColor('#3366FF', 'blue');
  }

  static pink(): ProductColor {
    return new ProductColor('#FF708D', 'pink');
  }

  static orange(): ProductColor {
    return new ProductColor('#FFC94D', 'orange');
  }
}

export class Profile {

  constructor(readonly firstName: string,
              readonly lastName: string,
              readonly photo: ImageSourcePropType) {
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static markVolter(): Profile {
    return new Profile(
      'Mark',
      'Volter',
      require('../assets/image-profile.jpg'),
    );
  }

  static hubertFranck(): Profile {
    return new Profile(
      'Hubert',
      'Franck',
      require('../assets/image-profile.jpg'),
    );
  }
}

export class Like {

  constructor(readonly author: Profile) {

  }

  static byMarkVolter(): Like {
    return new Like(
      Profile.markVolter(),
    );
  }

  static byHubertFranck(): Like {
    return new Like(
      Profile.hubertFranck(),
    );
  }
}

export class Comment {

  constructor(readonly text: string,
              readonly date: string,
              readonly author: Profile,
              readonly comments: Comment[],
              readonly likes: Like[]) {
  }

  static byHubertFranck(): Comment {
    return new Comment(
      'The chair has a good quality!',
      'Today 11:10 am',
      Profile.hubertFranck(),
      [
        Comment.byMarkVolter(),
      ],
      [
        Like.byMarkVolter(),
      ],
    );
  }

  static byMarkVolter(): Comment {
    return new Comment(
      'Yes! I agree with you',
      'Today 11:10 am',
      Profile.markVolter(),
      [],
      [],
    );
  }
}
