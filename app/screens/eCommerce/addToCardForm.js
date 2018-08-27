import React from 'react';
import {
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkAvoidKeyboard,
} from 'react-native-ui-kitten';
import { GradientButton } from '../../components/';
import { PasswordTextInput } from '../../components/passwordTextInput';
import {
  DatePicker,
  DatePart,
} from '../../components/picker/datePicker';
import { CardInput } from '../../components/cardInput';
import { scale } from '../../utils/scale';
import NavigationType from '../../config/navigation/propTypes';

export class AddToCardForm extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Add Card'.toUpperCase(),
  };

  state = {
    nameOnCard: '',
    cardCode: '',
    expireYear: 2017,
    expireMonth: 8,
    pickerVisible: false,
  };

  onDatePickerConfirm = (date) => {
    this.setState({
      expireMonth: date.month.key,
      expireYear: date.year,
      pickerVisible: false,
    });
  };

  onDatePickerCancel = () => {
    this.setState({ pickerVisible: false });
  };

  onAddButtonPressed = () => {
    this.props.navigation.goBack();
  };

  render = () => (
    <RkAvoidKeyboard
      style={styles.screen}
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => Keyboard.dismiss()}>
      <View style={[styles.formContent]}>
        <View>
          <View>
            <View style={[styles.textRow]}>
              <RkText rkType='subtitle'>Card Number</RkText>
            </View>
            <CardInput />
          </View>

          <View style={[styles.content]}>
            <View style={[styles.textRow]}>
              <RkText rkType='subtitle'>Expire date</RkText>
            </View>
            <View style={[styles.expireDateBlock]}>
              <DatePicker
                onConfirm={this.onDatePickerConfirm}
                onCancel={this.onDatePickerCancel}
                selectedYear={this.state.expireYear}
                selectedMonth={this.state.expireMonth}
                visible={this.state.pickerVisible}
                customDateParts={[DatePart.YEAR, DatePart.MONTH]}
              />
              <View style={[styles.expireDateInput, styles.balloon]}>
                <TouchableOpacity onPress={() => this.setState({ pickerVisible: true })}>
                  <RkText rkType='medium' style={styles.expireDateInnerInput}>
                    {this.state.expireMonth}
                  </RkText>
                </TouchableOpacity>
              </View>
              <View style={[styles.expireDateDelimiter]} />
              <View style={[styles.expireDateInput, styles.balloon]}>
                <TouchableOpacity onPress={() => this.setState({ pickerVisible: true })}>
                  <RkText rkType='medium' style={styles.expireDateInnerInput}>
                    {this.state.expireYear}
                  </RkText>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[styles.content]}>
            <View style={[styles.textRow]}>
              <RkText rkType='subtitle'>Name On Card</RkText>
            </View>
            <RkTextInput
              rkType='rounded'
              onChangeText={(nameOnCard) => this.setState({ nameOnCard })}
              value={this.state.nameOnCard}
            />
          </View>

          <View style={[styles.content]}>
            <View style={[styles.textRow]}>
              <RkText rkType='subtitle'>Card Code</RkText>
            </View>
            <PasswordTextInput
              maxLength={3}
              keyboardType='numeric'
              onChangeText={(cardCode) => this.setState({ cardCode })}
              value={this.state.cardCode}
            />
          </View>
        </View>
        <View>
          <GradientButton
            rkType='large'
            text='ADD TO CARD'
            onPress={this.onAddButtonPressed}
          />
        </View>
      </View>
    </RkAvoidKeyboard>
  );
}

const styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 15,
    flex: 1,
    backgroundColor: theme.colors.screen.base,
  },
  content: {
    marginTop: 10,
  },
  formContent: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
  },
  textRow: {
    marginLeft: 20,
  },
  expireDateBlock: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  expireDateInput: {
    flex: 0.48,
    marginVertical: 10,
  },
  expireDateInnerInput: {
    textAlign: 'center',
  },
  expireDateDelimiter: {
    flex: 0.04,
  },
  balloon: {
    maxWidth: scale(250),
    padding: 15,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: theme.colors.border.solid,
  },
}));
