import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import {
  Button,
  ButtonProps,
} from '@kitten/ui';
import { Showcase } from '../common/showcase.component';
import { buttonShowcase } from './type';

export class ButtonContainer extends React.Component<NavigationScreenProps> {

  private renderItem = (props: ButtonProps): React.ReactElement<ButtonProps> => {
    return (
      <Button {...props}>BUTTON</Button>
    );
  };

  public render(): React.ReactNode {
    return (
      <Showcase
        showcase={buttonShowcase}
        renderItem={this.renderItem}
      />
    );
  }
}
