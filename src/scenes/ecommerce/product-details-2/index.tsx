import React from 'react';
import { Image, ImageSourcePropType, ListRenderItemInfo, ScrollView } from 'react-native';
import { Button, Divider, Layout, List, StyleService, Text, TopNavigation, TopNavigationAction, useStyleSheet } from '@ui-kitten/components';
import { RateBar } from './extra/rate-bar.component';
import { DetailsList } from './extra/details-list.component';
import { CategoryList } from './extra/category-list.component';
import { ArrowIosBackIcon, BookmarkIcon, BookmarkOutlineIcon, SearchIcon } from './extra/icons';
import { useSafeArea } from './extra/3rd-party';
import { Product } from './extra/data';

const product: Product = Product.howToTrainYourDragonMovie();

export default ({ navigation }): React.ReactElement => {

  const safeArea = useSafeArea();
  const [bookmarked, setBookmarked] = React.useState<boolean>(false);
  const [rating, setRating] = React.useState<number>(product.rating);
  const styles = useStyleSheet(themedStyles);

  const onBuyButtonPress = (): void => {
    navigation && navigation.navigate('Payment');
  };

  const onBookmarkActionPress = (): void => {
    setBookmarked(!bookmarked);
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

  const renderBookmarkAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={bookmarked ? BookmarkIcon : BookmarkOutlineIcon}
      onPress={onBookmarkActionPress}
    />
  );

  const renderImageItem = (info: ListRenderItemInfo<ImageSourcePropType>): React.ReactElement => (
    <Image
      style={styles.imageItem}
      source={info.item}
    />
  );

  return (
    <Layout
      style={[styles.container, { paddingTop: safeArea.top }]}
      level='2'>
      <TopNavigation
        alignment='center'
        title='Product Details'
        leftControl={renderBackAction()}
        rightControls={[renderSearchAction(), renderBookmarkAction()]}
      />
      <Divider/>
      <ScrollView
        style={styles.scrollableContainer}
        contentContainerStyle={styles.contentContainer}>
        <Image
          style={styles.primaryImage}
          source={product.primaryImage}
        />
        <Text
          style={styles.titleLabel}
          category='h6'>
          {product.title}
        </Text>
        <Text
          style={styles.subtitleLabel}
          category='p2'>
          {product.subtitle}
        </Text>
        <CategoryList
          style={styles.categoryList}
          data={product.categories}
        />
        <RateBar
          style={styles.rateBar}
          value={rating}
          onValueChange={setRating}
        />
        <Divider/>
        <DetailsList
          style={styles.detailsList}
          data={product.details}
        />
        <Text
          style={styles.sectionLabel}
          category='s1'>
          About Movie
        </Text>
        <Text
          style={styles.descriptionLabel}
          appearance='hint'>
          {product.description}
        </Text>
        <Text
          style={styles.sectionLabel}
          category='s1'>
          Screenshots
        </Text>
        <List
          contentContainerStyle={styles.imagesList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={product.images}
          renderItem={renderImageItem}
        />
        <Button
          style={styles.buyButton}
          onPress={onBuyButtonPress}>
          BUY TICKET
        </Button>
      </ScrollView>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  scrollableContainer: {
    flex: 1,
    backgroundColor: 'background-basic-color-1',
  },
  contentContainer: {
    paddingVertical: 24,
  },
  primaryImage: {
    alignSelf: 'center',
    width: 256,
    height: 360,
    borderRadius: 8,
  },
  titleLabel: {
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 64,
    marginTop: 24,
  },
  subtitleLabel: {
    alignSelf: 'center',
    marginVertical: 8,
  },
  categoryList: {
    alignSelf: 'center',
    marginVertical: 8,
  },
  rateBar: {
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  detailsList: {
    alignSelf: 'center',
    marginVertical: 24,
  },
  descriptionLabel: {
    margin: 16,
  },
  imagesList: {
    overflow: 'hidden',
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: 'background-basic-color-1',
  },
  imageItem: {
    width: 180,
    height: 120,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  sectionLabel: {
    marginHorizontal: 16,
  },
  buyButton: {
    marginHorizontal: 16,
    marginTop: 24,
  },
});
