import React from 'react';
import { Image, ListRenderItemInfo, View } from 'react-native';
import {
  Button,
  Card,
  Layout,
  List,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import { CreditCardIcon, MoreVerticalIcon } from './extra/icons';
import { PaymentCard } from './extra/data';

const paymentCards: PaymentCard[] = [
  PaymentCard.emilyClarckVisa(),
];

export default ({ navigation }): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  const onBuyButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  const onPlaceholderCardPress = (): void => {
    navigation && navigation.navigate('AddNewCard');
  };

  const renderFooter = (): React.ReactElement => (
    <Card
      style={styles.placeholderCard}
      onPress={onPlaceholderCardPress}>
      <CreditCardIcon {...styles.creditCardIcon}/>
      <Text
        appearance='hint'
        category='s1'>
        Add New Card
      </Text>
    </Card>
  );

  const renderCardItem = (info: ListRenderItemInfo<PaymentCard>): React.ReactElement => (
    <View style={styles.cardItem}>
      <View style={styles.cardLogoContainer}>
        <Image
          style={styles.cardLogo}
          source={info.item.logo}
        />
        <Button
          style={styles.cardOptionsButton}
          appearance='ghost'
          status='control'
          accessoryLeft={MoreVerticalIcon}
        />
      </View>
      <Text
        style={styles.cardNumber}
        category='h6'
        status='control'>
        {info.item.number}
      </Text>
      <View style={styles.cardNameContainer}>
        <Text
          style={styles.cardDetailsLabel}
          category='p2'
          status='control'>
          Cardholder Name
        </Text>
        <Text
          category='s1'
          status='control'>
          {info.item.cardholderName}
        </Text>
      </View>
      <View style={styles.cardExpirationContainer}>
        <Text
          style={styles.cardDetailsLabel}
          category='p2'
          status='control'>
          Expire Date
        </Text>
        <Text
          category='s1'
          status='control'>
          {info.item.expireDate}
        </Text>
      </View>
    </View>
  );

  return (
    <React.Fragment>
      <List
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={paymentCards}
        renderItem={renderCardItem}
        ListFooterComponent={renderFooter}
      />
      <Layout style={styles.buyButtonContainer}>
        <Button
          size='giant'
          onPress={onBuyButtonPress}>
          BUY
        </Button>
      </Layout>
    </React.Fragment>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  cardItem: {
    margin: 8,
    height: 192,
    padding: 24,
    borderRadius: 4,
    backgroundColor: 'color-primary-default',
  },
  cardLogoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLogo: {
    height: 24,
    width: 75,
    tintColor: 'text-control-color',
  },
  cardOptionsButton: {
    position: 'absolute',
    right: -16,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  cardNumber: {
    marginVertical: 24,
  },
  cardDetailsLabel: {
    marginVertical: 4,
  },
  cardNameContainer: {
    position: 'absolute',
    left: 24,
    bottom: 24,
  },
  cardExpirationContainer: {
    position: 'absolute',
    right: 24,
    bottom: 24,
  },
  placeholderCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 192,
    margin: 8,
    backgroundColor: 'background-basic-color-3',
  },
  creditCardIcon: {
    alignSelf: 'center',
    width: 48,
    height: 48,
    tintColor: 'text-hint-color',
  },
  buyButtonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
