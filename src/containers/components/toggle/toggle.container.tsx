import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { ToggleProps } from '@kitten/ui';
import { ToggleShowcase } from '@src/containers/components';
import { Showcase } from '../common/showcase.component';
import { toggleShowcase } from './type';

export class ToggleContainer extends React.Component<NavigationScreenProps> {

  private renderItem = (props: ToggleProps): React.ReactElement<ToggleProps> => {
    return (
      <ToggleShowcase {...props} />
    );
  };

  public render(): React.ReactNode {
    return (
      <Showcase
        showcase={toggleShowcase}
        renderItem={this.renderItem}
      />
    );
  }
}
