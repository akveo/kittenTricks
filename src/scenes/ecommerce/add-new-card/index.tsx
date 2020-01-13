import React from 'react';
import { View } from 'react-native';
import {
  Button,
  Datepicker,
  Divider,
  Input,
  Layout,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
} from '@ui-kitten/components';
import { ArrowIosBackIcon, SearchIcon, ShoppingCartIcon } from './extra/icons';
import { KeyboardAvoidingView, useSafeArea } from './extra/3rd-party';

export default ({ navigation }): React.ReactElement => {

  const safeArea = useSafeArea();
  const styles = StyleSheet.create();

  const [number, setNumber] = React.useState<string>();
  const [name, setName] = React.useState<string>();
  const [date, setDate] = React.useState<Date>();
  const [cvv, setCVV] = React.useState<string>();

  const onAddButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  const onCartActionPress = (): void => {
    navigation && navigation.navigate('ShoppingCart');
  };

  const onSearchActionPress = (): void => {
    navigation && navigation.navigate('ProductList');
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation && navigation.goBack}
    />
  );

  const renderSearchAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={SearchIcon}
      onPress={onSearchActionPress}
    />
  );

  const renderCartAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ShoppingCartIcon}
      onPress={onCartActionPress}
    />
  );

  return (
    <KeyboardAvoidingView style={[styles.container, { paddingTop: safeArea.top }]}>
      <TopNavigation
        alignment='center'
        title='Add New Card'
        leftControl={renderBackAction()}
        rightControls={[renderSearchAction(), renderCartAction()]}
      />
      <Divider/>
      <Layout style={styles.form}>
        <Input
          style={styles.input}
          label='CARD NUMBER'
          placeholder='1234 3456 5677 8907'
          keyboardType='numeric'
          maxLength={19}
          value={number}
          onChangeText={setNumber}
        />
        <Input
          style={styles.input}
          label='CARDHOLDER NAME'
          placeholder='Enter Name'
          value={name}
          onChangeText={setName}
        />
        <View style={styles.middleContainer}>
          <Datepicker
            style={[styles.input, styles.middleInput]}
            placeholder='09 / 20'
            date={date}
            onSelect={setDate}
          />
          <Input
            style={[styles.input, styles.middleInput]}
            placeholder='CVV'
            keyboardType='numeric'
            maxLength={3}
            value={cvv}
            onChangeText={setCVV}
          />
        </View>
      </Layout>
      <Button
        style={styles.addButton}
        size='giant'
        onPress={onAddButtonPress}>
        ADD NEW CARD
      </Button>
    </KeyboardAvoidingView>
  );
};

const StyleSheet = useStyleSheet({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
  },
  form: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 24,
  },
  input: {
    margin: 12,
  },
  middleContainer: {
    flexDirection: 'row',
  },
  middleInput: {
    width: 128,
  },
  addButton: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
});
