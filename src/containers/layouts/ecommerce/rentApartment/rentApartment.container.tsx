import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Apartment } from '@src/core/model';
import { apartment1 } from '@src/core/data/apartment';
import { RentApartment } from './rentApartment.component';

interface State {
  apartment: Apartment;
}

export class RentApartmentContainer extends React.Component<NavigationStackScreenProps, State> {

  public state: State = {
    apartment: apartment1,
  };

  private navigationKey: string = 'RentApartmentContainer';

  private onBookPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Payment',
    });
  };

  private onPhotoPress = (index: number) => {
  };

  public render(): React.ReactNode {
    return (
      <RentApartment
        apartment={this.state.apartment}
        onBookPress={this.onBookPress}
        onPhotoPress={this.onPhotoPress}
      />
    );
  }
}
