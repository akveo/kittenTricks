import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { ButtonProps } from '@kitten/ui';
import { ButtonShowcase } from './buttonShowcase.component';
import { Showcase } from '../common/showcase.component';
import { buttonShowcase } from './type';

export class ButtonContainer extends React.Component<NavigationScreenProps> {

  private renderItem = (props: ButtonProps): React.ReactElement<ButtonProps> => {
    return (
      <ButtonShowcase
        style={styles.component}
        {...props}
      />
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

const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
});
