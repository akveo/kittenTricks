import React from 'react';
import { ImageBackground, Platform, View } from 'react-native';
import { Button, Input, Layout, Radio, RadioGroup, StyleService, Text, TopNavigation, TopNavigationAction, useStyleSheet } from '@ui-kitten/components';
import { KeyboardAvoidingView } from './extra/keyboard-avoiding-view.component';
import { CommentList } from './extra/comment-list.component';
import { ArrowIosBackIcon, SearchIcon, ShoppingCartIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';
import { Product, ProductColor } from './extra/data';

const product: Product = Product.pinkChair();

const keyboardOffset = (height: number): number => Platform.select({
  android: 0,
  ios: height,
});

export default ({ navigation }): React.ReactElement => {

  const safeArea = useSafeArea();
  const [comment, setComment] = React.useState<string>();
  const [selectedColorIndex, setSelectedColorIndex] = React.useState<number>();
  const styles = useStyleSheet(themedStyles);

  const onBuyButtonPress = (): void => {
    navigation && navigation.navigate('Payment');
  };

  const onAddButtonPress = (): void => {
    navigation && navigation.navigate('ShoppingCart');
  };

  const onSearchActionPress = (): void => {
    navigation && navigation.navigate('ProductList');
  };

  const onCartActionPress = (): void => {
    navigation && navigation.navigate('ShoppingCart');
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

  const renderColorItem = (color: ProductColor, index: number): React.ReactElement => (
    <Radio
      key={index}
      style={styles.colorRadio}
      textStyle={{ color: color.value }}
      text={color.description.toUpperCase()}
    />
  );

  const renderHeader = (): React.ReactElement => (
    <Layout style={styles.header}>
      <ImageBackground
        style={styles.image}
        source={product.image}
      />
      <Layout
        style={styles.detailsContainer}
        level='1'>
        <Text
          category='h6'>
          {product.title}
        </Text>
        <Text
          style={styles.subtitle}
          appearance='hint'
          category='p2'>
          {product.subtitle}
        </Text>
        <Text
          style={styles.price}
          category='h4'>
          {product.price}
        </Text>
        <Text
          style={styles.description}
          appearance='hint'>
          {product.description}
        </Text>
        <Text
          style={styles.sectionLabel}
          category='h6'>
          Size:
        </Text>
        <Text
          style={styles.size}
          appearance='hint'>
          {product.size}
        </Text>
        <Text
          style={styles.sectionLabel}
          category='h6'>
          Color:
        </Text>
        <RadioGroup
          style={styles.colorGroup}
          selectedIndex={selectedColorIndex}
          onChange={setSelectedColorIndex}>
          {product.colors.map(renderColorItem)}
        </RadioGroup>
        <View style={styles.actionContainer}>
          <Button
            style={styles.actionButton}
            size='giant'
            onPress={onBuyButtonPress}>
            BUY
          </Button>
          <Button
            style={styles.actionButton}
            size='giant'
            status='control'
            onPress={onAddButtonPress}>
            ADD TO BAG
          </Button>
        </View>
      </Layout>
      <Input
        style={styles.commentInput}
        labelStyle={styles.commentInputLabel}
        label='Comments'
        placeholder='Write your comment'
        value={comment}
        onChangeText={setComment}
      />
    </Layout>
  );

  return (
    <KeyboardAvoidingView
      style={[styles.container, { paddingTop: safeArea.top }]}
      offset={keyboardOffset}>
      <TopNavigation
        alignment='center'
        title='Product Details'
        leftControl={renderBackAction()}
        rightControls={[renderSearchAction(), renderCartAction()]}
      />
      <CommentList
        style={styles.commentList}
        data={product.comments}
        ListHeaderComponent={renderHeader}
      />
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2',
  },
  commentList: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    marginBottom: 8,
  },
  image: {
    height: 340,
    width: '100%',
  },
  detailsContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  subtitle: {
    marginTop: 4,
  },
  price: {
    position: 'absolute',
    top: 24,
    right: 16,
  },
  description: {
    marginVertical: 16,
  },
  size: {
    marginBottom: 16,
  },
  colorGroup: {
    flexDirection: 'row',
    marginHorizontal: -8,
  },
  colorRadio: {
    marginHorizontal: 8,
  },
  actionContainer: {
    flexDirection: 'row',
    marginHorizontal: -8,
    marginTop: 24,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  sectionLabel: {
    marginVertical: 8,
  },
  commentInputLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: 'text-basic-color',
  },
  commentInput: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
});
