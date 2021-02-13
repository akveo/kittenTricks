import React from 'react';
import { Image, Platform, View } from 'react-native';
import { Button, Input, Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { KeyboardAvoidingView } from './extra/keyboard-avoiding-view.component';
import { RateBar } from './extra/rate-bar.component';
import { CommentList } from './extra/comment-list.component';
import { Product } from './extra/data';

const product: Product = Product.designSystemsBook();

const keyboardOffset = (height: number): number => Platform.select({
  android: 0,
  ios: height,
});

export default ({ navigation }): React.ReactElement => {

  const [inputComment, setInputComment] = React.useState<string>();
  const [rating, setRating] = React.useState<number>(product.rating);
  const styles = useStyleSheet(themedStyles);

  const onBuyButtonPress = (): void => {
    navigation && navigation.navigate('Payment');
  };

  const renderCategory = (category: string, index: number): React.ReactElement => (
    <Button
      key={index}
      style={styles.categoryItem}
      size='tiny'>
      {category}
    </Button>
  );

  const renderHeader = (): React.ReactElement => (
    <Layout level='1'>
      <View style={styles.header}>
        <Image
          style={styles.productImage}
          source={product.image}
        />
        <View style={styles.detailsContainer}>
          <Text category='s1'>
            {product.title}
          </Text>
          <Text
            style={styles.authorLabel}
            appearance='hint'
            category='c1'>
            {`Author: ${product.author}`}
          </Text>
          <View
            style={styles.categoryContainer}>
            {product.categories.map(renderCategory)}
          </View>
          <RateBar
            style={styles.rateBar}
            value={rating}
            onValueChange={setRating}
          />
          <Text
            style={styles.priceLabel}
            category='s1'>
            {product.price}
          </Text>
        </View>
      </View>
      <Button
        style={styles.buyButton}
        onPress={onBuyButtonPress}>
        BUY BOOK
      </Button>
      <Layout
        style={styles.descriptionContainer}
        level='2'>
        <Text
          style={styles.aboutLabel}
          category='s1'>
          About Book
        </Text>
        <Text
          appearance='hint'>
          {product.description}
        </Text>
      </Layout>
      <Input
        style={styles.commentInput}
        label={evaProps => <Text {...evaProps} style={styles.commentInputLabel}>Comments</Text>}
        placeholder='Write your comment'
        value={inputComment}
        onChangeText={setInputComment}
      />
    </Layout>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      offset={keyboardOffset}>
      <CommentList
        style={styles.commentList}
        data={product.comments}
        ListHeaderComponent={renderHeader()}
      />
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-1',
  },
  commentList: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    overflow: 'hidden',
    padding: 16,
  },
  detailsContainer: {
    marginHorizontal: 24,
  },
  productImage: {
    width: 140,
    height: 180,
  },
  authorLabel: {
    marginVertical: 4,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 12,
    marginHorizontal: -4,
  },
  categoryItem: {
    marginHorizontal: 4,
    borderRadius: 16,
  },
  rateBar: {
    marginHorizontal: -4,
  },
  priceLabel: {
    marginVertical: 16,
  },
  buyButton: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  aboutLabel: {
    marginBottom: 16,
  },
  commentInputLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: 'text-basic-color',
  },
  commentInput: {
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 20,
  },
});
