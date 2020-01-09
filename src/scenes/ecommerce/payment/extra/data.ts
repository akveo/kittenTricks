import { ImageSourcePropType } from 'react-native';

export class PaymentCard {

  constructor(readonly number: string,
              readonly logo: ImageSourcePropType,
              readonly cardholderName: string,
              readonly expireDate: string) {
  }

  static emilyClarckVisa(): PaymentCard {
    return new PaymentCard(
      '4567 5678 7600 4560',
      require('../assets/visa-logo.png'),
      'Emily Clarck',
      '10/22',
    );
  }
}
