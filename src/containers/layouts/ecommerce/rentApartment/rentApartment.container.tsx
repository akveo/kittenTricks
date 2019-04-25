import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { Apartment } from '@src/core/model';
import { apartment1 } from '@src/core/data/apartment';
import { RentApartment } from './rentApartment.component';

interface State {
  apartment: Apartment;
}

export class RentApartmentContainer extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    apartment: apartment1,
  };

  private onBookPress = () => {
    this.props.navigation.navigate('Payment');
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
