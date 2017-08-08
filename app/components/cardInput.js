import React from 'react';
import {
  RkButton,
  RkTextInput,
  RkText,
  RkStyleSheet
} from 'react-native-ui-kitten';
import {FontAwesome} from '../assets/icons';

export class CardInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      cardNumber: ''
    }
  }

  formatCreditNumber(cardNumber, hiddenFlag) {
    return hiddenFlag
      ? cardNumber.replace(/\D/g, '')
      : cardNumber.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  }

  render() {

    let button = (
      <RkButton style={styles.button} rkType='clear'
                onPress={() => {
                  this.setState({hidden: !this.state.hidden});
                  this.setState({cardNumber: this.formatCreditNumber(this.state.cardNumber, !this.state.hidden)})
                }}>
        <RkText style={styles.icon} rkType='awesome secondaryColor'>{FontAwesome.slashEye}</RkText>
      </RkButton>
    );

    let {
      ...inputProps
    } = this.props;

    return (
      <RkTextInput
        autoCapitalize='none'
        rkType='bordered rounded iconRight'
        autoCorrect={false}
        label={button}
        secureTextEntry={this.state.hidden}
        onChangeText={(cardNumber) => {
          this.setState({cardNumber: this.formatCreditNumber(cardNumber, this.state.hidden)})
        }}
        value={this.state.cardNumber}
        keyboardType='numeric'
        maxLength={19}
        {...inputProps}
      />
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  icon: {
    fontSize: 24
  },
  button: {
    right: 17
  }
}));