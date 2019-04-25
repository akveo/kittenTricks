import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ButtonGroupProps } from '@kitten/ui';
import { ButtonGroupShowcase } from './buttonGroupShowcase.component';
import { Showcase } from '../common/showcase.component';
import { buttonGroupShowcase } from './type';

export class ButtonGroupContainer extends React.Component<NavigationScreenProps> {

  private renderItem = (props: ButtonGroupProps): React.ReactElement<ButtonGroupProps> => {
    return (
      <ButtonGroupShowcase {...props}/>
    );
  };

  public render(): React.ReactNode {
    return (
      <Showcase
        showcase={buttonGroupShowcase}
        renderItem={this.renderItem}
      />
    );
  }
}
