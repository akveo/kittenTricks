import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { TextProps } from '@kitten/ui';
import { TextShowcase } from './textShowcase.component';
import { Showcase } from '../common/showcase.component';
import { textShowcase } from './type';

export class TextContainer extends React.Component<NavigationScreenProps> {

  private renderItem = (props: TextProps): React.ReactElement<TextProps> => {
    return (
      <TextShowcase {...props}/>
    );
  };

  public render(): React.ReactNode {
    return (
      <Showcase
        showcase={textShowcase}
        renderItem={this.renderItem}
      />
    );
  }
}
