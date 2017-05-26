import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  RkText,
  RkCard,
  RkButton, RkTextInput
} from 'react-native-ui-kitten';
import LinearGradient from 'react-native-linear-gradient';
import {Data} from '../../data';
import {KittenTheme} from '../../config/theme';
import {PasswordTextInput} from '../../components/passwordTextInput';
import {UIConstants} from '../../config/appConstants';

export class Cards extends React.Component {
  static navigationOptions = {
    title: 'Cards'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.data = Data.getCards();
    this.state = {modalVisible: false}
  }

  _getCardStyle(type) {
    switch (type) {
      case 'visa':
        return {
          gradient: KittenTheme.colors.gradients.visa,
          icon: require('../../assets/icons/visaIcon.png')
        };
      case 'mastercard':
        return {
          gradient: KittenTheme.colors.gradients.mastercard,
          icon: require('../../assets/icons/masterCardIcon.png')
        };
      case 'axp':
        return {
          gradient: KittenTheme.colors.gradients.axp,
          icon: require('../../assets/icons/americanExpressIcon.png')
        };
    }
  }

  _formatCurrency(amount, currency) {
    let symbol;
    switch (currency) {
      case 'usd':
        symbol = '$';
        break;
      case 'eur':
        symbol = '€';
        break;
    }
    return `${symbol}${amount}`;
  }

  _prepareCardNo(cardNo) {
    let re = /\*+/;
    let parts = cardNo.split(re);
    return {firstPart: parts[0], lastPart: parts[1]}
  }

  _renderFooter() {
    return (
      <View style={styles.footer}>
        <RkButton style={styles.button} rkType='circle'>
          <Image source={require('../../assets/icons/iconPlus.png')}/>
        </RkButton>
      </View>
    )
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _renderItem(info) {

    let {gradient, icon} = this._getCardStyle(info.item.type);
    let {firstPart, lastPart} = this._prepareCardNo(info.item.cardNo);

    return (
      <RkCard rkType='credit' style={styles.card}>
        <TouchableOpacity onPress={() => this._setModalVisible(true)}>
          <LinearGradient colors={gradient}
                          start={{x: 0.0, y: 0.5}}
                          end={{x: 1, y: 0.5}}
                          style={styles.background}>
            <View rkCardHeader>
              <RkText rkType='header4 overlayColor'>{info.item.bank}</RkText>
              <Image source={icon}/>
            </View>
            <View rkCardContent>
              <View style={styles.cardNoContainer}>
                <RkText style={styles.cardNo} rkType='header2 overlayColor'>{firstPart}</RkText>
                <RkText style={[styles.cardNo, styles.cardPlaceholder]} rkType='header2 overlayColor'>* * * *</RkText>
                <RkText style={[styles.cardNo, styles.cardPlaceholder]} rkType='header2 overlayColor'>* * * *</RkText>
                <RkText style={styles.cardNo} rkType='header2 overlayColor'>{lastPart}</RkText>
              </View>
              <RkText style={styles.date} rkType='header6 overlayColor'>{info.item.date}</RkText>
            </View>
            <View rkCardFooter>
              <View>
                <RkText rkType='header4 overlayColor'>{info.item.currency.toUpperCase()}</RkText>
                <RkText rkType='header6 overlayColor'>{info.item.name.toUpperCase()}</RkText>
              </View>
              <RkText
                rkType='header2 overlayColor'>{this._formatCurrency(info.item.amount, info.item.currency)}</RkText>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </RkCard>
    )
  }

  render() {
    return (
      <View>
        <FlatList style={styles.list}
                  showsVerticalScrollIndicator={false}
                  ListFooterComponent={() => this._renderFooter()}
                  keyExtractor={(item) => item.id}
                  data={this.data}
                  renderItem={(info) => this._renderItem(info)}/>
        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this._setModalVisible(false)}
          visible={this.state.modalVisible}>
          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <View style={styles.popupContent}>
                <RkText style={styles.popupHeader} rkType='header4'>Enter security code</RkText>
                <PasswordTextInput/>
              </View>
              <View style={styles.popupButtons}>
                <RkButton onPress={() => this._setModalVisible(false)}
                          style={styles.popupButton}
                          rkType='clear'>
                  <RkText rkType='light'>CANCEL</RkText>
                </RkButton>
                <View style={styles.separator}/>
                <RkButton onPress={() => this._setModalVisible(false)}
                          style={styles.popupButton}
                          rkType='clear'>
                  <RkText rkType=''>OK</RkText>
                </RkButton>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  list: {
    marginHorizontal: 16,
  },
  card: {
    marginVertical: 8,
  },
  background: {
    borderRadius: 7,
  },
  cardNoContainer: {
    flexDirection: 'row'
  },
  cardNo: {
    marginHorizontal: 8,
  },
  cardPlaceholder: {
    paddingTop: 4,
  },
  date: {
    marginTop: 20
  },
  footer: {
    marginTop: 8,
    marginBottom: 16,
    alignItems: 'center'
  },
  button: {
    height: 56,
    width: 56
  },
  popup: {
    backgroundColor: KittenTheme.colors.back.base,
    marginTop: 70,
    marginHorizontal: 37,
    borderRadius: 7
  },
  popupOverlay: {
    backgroundColor: KittenTheme.colors.back.overlay,
    flex: 1,
    marginTop: UIConstants.HeaderHeight
  },
  popupContent: {
    alignItems: 'center',
    margin: 16
  },
  popupHeader: {
    marginBottom: 45
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: KittenTheme.colors.border.underline
  },
  popupButton: {
    flex: 1,
    marginVertical: 16
  },
  separator: {
    backgroundColor: KittenTheme.colors.back.neutral,
    width: 1
  }
});