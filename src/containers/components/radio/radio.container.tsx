import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { RadioProps } from '@kitten/ui';
import { RadioShowcase } from './radioShowcase.component';
import { Showcase } from '../common/showcase.component';
import { radioShowcase } from './type';

export class RadioContainer extends React.Component<NavigationScreenProps> {

  private renderItem = (props: RadioProps): React.ReactElement<RadioProps> => {
    return (
      <RadioShowcase {...props}/>
    );
  };

  public render(): React.ReactNode {
    return (
      <Showcase
        showcase={radioShowcase}
        renderItem={this.renderItem}
      />
    );
  }
}
