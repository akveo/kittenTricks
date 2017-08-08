import React from 'react';
import {
  View,
  Keyboard
} from 'react-native';
import {
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkAvoidKeyboard
} from 'react-native-ui-kitten';
import {GradientButton} from '../../components/';
import {PasswordTextInput} from '../../components/passwordTextInput';
import {CardInput} from '../../components/cardInput';

export class AddToCardForm extends React.Component {
  static navigationOptions = {
    title: 'Add To Card'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      expireMonth: '',
      expireYear: '',
      nameOnCard: '',
      cardCode: ''
    };
  }

  render() {
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={(e) => true}
        onResponderRelease={(e) => Keyboard.dismiss()}>
        <View style={[styles.formContent]}>
          <View>
            <View>
              <View style={[styles.textRow]}>
                <RkText rkType='subtitle'>Card Number</RkText>
              </View>
              <CardInput/>
            </View>

            <View style={[styles.content]}>
              <View style={[styles.textRow]}>
                <RkText rkType='subtitle'>Expire date</RkText>
              </View>
              <View style={[styles.expireDateBlock]}>
                <RkTextInput style={[styles.expireDateInput]}
                             inputStyle={[styles.expireDateInnerInput]}
                             rkType='rounded'
                             maxLength={2}
                             keyboardType='numeric'
                             onChangeText={(expireMonth) => this.setState({expireMonth})}
                             value={this.state.expireMonth}/>
                <View style={[styles.expireDateDelimiter]}/>
                <RkTextInput style={[styles.expireDateInput]}
                             inputStyle={[styles.expireDateInnerInput]}
                             rkType='rounded'
                             maxLength={4}
                             keyboardType='numeric'
                             onChangeText={(expireYear) => this.setState({expireYear})}
                             value={this.state.expireYear}/>
              </View>
            </View>

            <View style={[styles.content]}>
              <View style={[styles.textRow]}>
                <RkText rkType='subtitle'>Name On Card</RkText>
              </View>
              <RkTextInput rkType='rounded'
                           onChangeText={(nameOnCard) => this.setState({nameOnCard})}
                           value={this.state.nameOnCard}/>
            </View>

            <View style={[styles.content]}>
              <View style={[styles.textRow]}>
                <RkText rkType='subtitle'>Card Code</RkText>
              </View>
              <PasswordTextInput maxLength={3}
                                 keyboardType='numeric'
                                 onChangeText={(cardCode) => this.setState({cardCode})}
                                 value={this.state.cardCode}/>
            </View>
          </View>
          <View>
            <GradientButton rkType='large' text='ADD TO CARD' onPress={() => {
              this.props.navigation.goBack()
            }}/>
          </View>
        </View>
      </RkAvoidKeyboard>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 15,
    flex: 1,
    backgroundColor: theme.colors.screen.base
  },
  content: {
    marginTop: 10
  },
  formContent: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1
  },
  textRow: {
    marginLeft: 20
  },
  expireDateBlock: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  expireDateInput: {
    flex: 0.48
  },
  expireDateInnerInput: {
    textAlign: 'center'
  },
  expireDateDelimiter: {
    flex: 0.04
  },
}));