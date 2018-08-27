import React from 'react';
import {
  RkButton,
  RkTextInput,
  RkText,
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { FontAwesome } from '../assets/icons';

export class CardInput extends React.Component {
  state = {
    hidden: true,
    cardNumber: '',
  };

  formatCreditNumber = (number, isHidden) => (
    isHidden
      ? number.replace(/\D/g, '')
      : number.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()
  );

  onInputLabelPressed = () => {
    this.setState({
      hidden: !this.state.hidden,
      cardNumber: this.formatCreditNumber(this.state.cardNumber, !this.state.hidden),
    });
  };

  onInputChanged = (text) => {
    this.setState({
      cardNumber: this.formatCreditNumber(text, this.state.hidden),
    });
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
      onChangeText={this.onInputChanged}
      value={this.state.cardNumber}
      keyboardType='numeric'
      maxLength={19}
      {...this.props}
    />
  );
}

let styles = RkStyleSheet.create({
  icon: {
    fontSize: 24,
  },
  button: {
    right: 17,
  },
});
