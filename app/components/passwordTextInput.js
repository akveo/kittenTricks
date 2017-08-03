import React from 'react';
import {
  RkButton,
  RkTextInput,
  RkText,
  RkStyleSheet
} from 'react-native-ui-kitten';
import {FontAwesome} from '../assets/icons';

export class PasswordTextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hidden: true}
  }

  render() {

    let button = (
      <RkButton style={styles.button} rkType='clear'
                onPress={() => {
                  this.setState({hidden: !this.state.hidden})
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