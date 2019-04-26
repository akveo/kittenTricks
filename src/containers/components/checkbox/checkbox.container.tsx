import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { CheckBoxProps } from '@kitten/ui';
import { CheckBoxShowcase } from './checkboxShowcase.component';
import { Showcase } from '../common/showcase.component';
import { checkboxShowcase } from './type';

export class CheckBoxContainer extends React.Component<NavigationScreenProps> {

  private renderItem = (props: CheckBoxProps): React.ReactElement<CheckBoxProps> => {
    return (
      <CheckBoxShowcase {...props}/>
    );
  };

  public render(): React.ReactNode {
    return (
      <Showcase
        showcase={checkboxShowcase}
        renderItem={this.renderItem}
      />
    );
  }
}
