import React from 'react';
import {
  RkButton,
  RkTextInput,
  RkText,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { FontAwesome } from '../assets/icons';

export class PasswordTextInput extends React.Component {
  state = {
    hidden: true,
  };

  onInputLabelPressed = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  renderInputLabel = () => (
    <RkButton
      style={styles.button}
      rkType='clear'
      onPress={this.onInputLabelPressed}>
      <RkText style={styles.icon} rkType='awesome secondaryColor'>{FontAwesome.slashEye}</RkText>
    </RkButton>
  );

  render = () => (
    <RkTextInput
      autoCapitalize='none'
      rkType='bordered rounded iconRight'
      autoCorrect={false}
      label={this.renderInputLabel()}
      secureTextEntry={this.state.hidden}
      {...this.props}
    />
  );
}

const styles = RkStyleSheet.create({
  icon: {
    fontSize: 24,
  },
  button: {
    right: 17,
  },
});
