import React from 'react';
import {
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  RkText,
  RkCard,
  RkButton,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';
import { LinearGradient } from 'expo';
import { data } from '../../data';
import { PasswordTextInput } from '../../components/passwordTextInput';
import { UIConstants } from '../../config/appConstants';
import { scaleVertical } from '../../utils/scale';

export class Cards extends React.Component {
  static navigationOptions = {
    title: 'Cards'.toUpperCase(),
  };

  state = {
    data: data.getCards(),
    modalVisible: false,
  };

  getCardStyle = (type) => {
    switch (type) {
      case 'visa':
        return {
          gradient: RkTheme.current.colors.gradients.visa,
          icon: require('../../assets/icons/visaIcon.png'),
        };
      case 'mastercard':
        return {
          gradient: RkTheme.current.colors.gradients.mastercard,
          icon: require('../../assets/icons/masterCardIcon.png'),
        };
      case 'axp':
        return {
          gradient: RkTheme.current.colors.gradients.axp,
          icon: require('../../assets/icons/americanExpressIcon.png'),
        };
      default: return {};
    }
  };

  formatCurrency = (amount, currency) => {
    switch (currency) {
      case 'usd':
        return `$${amount}`;
      case 'eur':
        return `€${amount}`;
      default: return '';
    }
  };

  prepareCardNo = (cardNo) => {
    const re = /\*+/;
    const parts = cardNo.split(re);
    return {
      firstPart: parts[0],
      lastPart: parts[1],
    };
  };

  renderFooter = () => (
    <View style={styles.footer}>
      <RkButton style={styles.button} rkType='circle highlight'>
        <Image source={require('../../assets/icons/iconPlus.png')} />
      </RkButton>
    </View>
  );

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  onItemPressed = () => {
    this.setModalVisible(true);
  };

  extractItemKey = (item) => `${item.id}`;

  renderItem = ({ item }) => {
    const { gradient, icon } = this.getCardStyle(item.type);
    const { firstPart, lastPart } = this.prepareCardNo(item.cardNo);

    return (
      <RkCard rkType='credit' style={styles.card}>
        <TouchableOpacity
          delayPressIn={70}
          activeOpacity={0.8}
          onPress={this.onItemPressed}>
          <LinearGradient
            colors={gradient}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.background}>
            <View rkCardHeader>
              <RkText rkType='header4 inverseColor'>{item.bank}</RkText>
              <Image source={icon} />
            </View>
            <View rkCardContent>
              <View style={styles.cardNoContainer}>
                <RkText style={styles.cardNo} rkType='header2 inverseColor'>{firstPart}</RkText>
                <RkText style={[styles.cardNo, styles.cardPlaceholder]} rkType='header2 inverseColor'>* * * *</RkText>
                <RkText style={[styles.cardNo, styles.cardPlaceholder]} rkType='header2 inverseColor'>* * * *</RkText>
                <RkText style={styles.cardNo} rkType='header2 inverseColor'>{lastPart}</RkText>
              </View>
              <RkText style={styles.date} rkType='header6 inverseColor'>{item.date}</RkText>
            </View>
            <View rkCardFooter>
              <View>
                <RkText rkType='header4 inverseColor'>{item.currency.toUpperCase()}</RkText>
                <RkText rkType='header6 inverseColor'>{item.name.toUpperCase()}</RkText>
              </View>
              <RkText
                rkType='header2 inverseColor'>{this.formatCurrency(item.amount, item.currency)}
              </RkText>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </RkCard>
    );
  };

  render = () => (
    <View style={styles.root}>
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={this.renderFooter}
        keyExtractor={this.extractItemKey}
        data={this.state.data}
        renderItem={this.renderItem}
      />
      <Modal
        animationType="fade"
        transparent
        onRequestClose={() => this.setModalVisible(false)}
        visible={this.state.modalVisible}>
        <View style={styles.popupOverlay}>
          <View style={styles.popup}>
            <View style={styles.popupContent}>
              <RkText style={styles.popupHeader} rkType='header4'>Enter security code</RkText>
              <PasswordTextInput />
            </View>
            <View style={styles.popupButtons}>
              <RkButton
                onPress={() => this.setModalVisible(false)}
                style={styles.popupButton}
                rkType='clear'>
                <RkText rkType='light'>CANCEL</RkText>
              </RkButton>
              <View style={styles.separator} />
              <RkButton
                onPress={() => this.setModalVisible(false)}
                style={styles.popupButton}
                rkType='clear'>
                <RkText>OK</RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
  },
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
    flexDirection: 'row',
  },
  cardNo: {
    marginHorizontal: 8,
  },
  cardPlaceholder: {
    paddingTop: 4,
  },
  date: {
    marginTop: scaleVertical(20),
  },
  footer: {
    marginTop: 8,
    marginBottom: scaleVertical(16),
    alignItems: 'center',
  },
  button: {
    height: 56,
    width: 56,
  },
  popup: {
    backgroundColor: theme.colors.screen.base,
    marginTop: scaleVertical(70),
    marginHorizontal: 37,
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: theme.colors.screen.overlay,
    flex: 1,
    marginTop: UIConstants.HeaderHeight,
  },
  popupContent: {
    alignItems: 'center',
    margin: 16,
  },
  popupHeader: {
    marginBottom: scaleVertical(45),
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: theme.colors.border.base,
  },
  popupButton: {
    flex: 1,
    marginVertical: 16,
  },
  separator: {
    backgroundColor: theme.colors.border.base,
    width: 1,
  },
}));
