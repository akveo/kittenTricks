import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { InputProps } from '@kitten/ui';
import { InputShowcase } from './inputShowcase.component';
import { Showcase } from '../common/showcase.component';
import { inputShowcase } from './type';

export class InputContainer extends React.Component<NavigationScreenProps> {

  private renderItem = (props: InputProps): React.ReactElement<InputProps> => {
    return (
      <InputShowcase
        style={styles.component}
        {...props}
      />
    );
  };

  public render(): React.ReactNode {
    return (
      <Showcase
        showcase={inputShowcase}
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
