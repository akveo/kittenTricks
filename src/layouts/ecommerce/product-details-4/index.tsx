import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  ListRenderItemInfo,
  ScrollView,
  View,
} from 'react-native';
import { Button, Card, Icon, List, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { Product, ProductOption } from './extra/data';

const product: Product = Product.centralParkApartment();

export default (): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  const onBookButtonPress = (): void => {

  };

  const renderImageItem = (info: ListRenderItemInfo<ImageSourcePropType>): React.ReactElement => (
    <Image
      style={styles.imageItem}
      source={info.item}
    />
  );

  const renderOptionItemIcon = (style: ImageStyle, icon: string): React.ReactElement => (
    <Icon {...style} name={icon}/>
  );

  const renderOptionItem = (option: ProductOption, index: number): React.ReactElement => (
    <Button
      key={index}
      style={styles.optionItem}
      appearance='ghost'
      size='small'
      accessoryLeft={(style: ImageStyle) => renderOptionItemIcon(style, option.icon)}>
      {option.title}
    </Button>
  );

  const renderDetailItem = (detail: string, index: number): React.ReactElement => (
    <Button
      key={index}
      style={styles.detailItem}
      appearance='outline'
      size='tiny'>
      {detail}
    </Button>
  );

  const renderBookingFooter = (): React.ReactElement => (
    <View>
      <Text
        category='s1'>
        Facilities
      </Text>
      <View style={styles.detailsList}>
        {product.details.map(renderDetailItem)}
      </View>
      <View style={styles.optionList}>
        {product.options.map(renderOptionItem)}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <ImageOverlay
        style={styles.image}
        source={product.primaryImage}
      />
      <Card
        style={styles.bookingCard}
        appearance='filled'
        disabled={true}
        footer={renderBookingFooter}>
        <Text
          style={styles.title}
          category='h6'>
          {product.title}
        </Text>
        <Text
          style={styles.rentLabel}
          appearance='hint'
          category='p2'>
          Rent House
        </Text>
        <Text
          style={styles.priceLabel}
          category='h6'>
          {product.price.formattedValue}
          <Text>{product.price.formattedScale}</Text>
        </Text>
        <Button
          style={styles.bookButton}
          onPress={onBookButtonPress}>
          BOOK NOW
        </Button>
      </Card>
      <Text
        style={styles.sectionLabel}
        category='s1'>
        About
      </Text>
      <Text
        style={styles.description}
        appearance='hint'>
        {product.description}
      </Text>
      <Text
        style={styles.sectionLabel}
        category='s1'>
        Photos
      </Text>
      <List
        contentContainerStyle={styles.imagesList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={product.images}
        renderItem={renderImageItem}
      />
    </ScrollView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-2',
  },
  image: {
    height: 360,
  },
  bookingCard: {
    marginTop: -80,
    margin: 16,
  },
  title: {
    width: '65%',
  },
  rentLabel: {
    marginTop: 24,
  },
  priceLabel: {
    marginTop: 8,
  },
  bookButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  detailsList: {
    flexDirection: 'row',
    marginHorizontal: -4,
    marginVertical: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    borderRadius: 16,
  },
  optionList: {
    flexDirection: 'row',
    marginHorizontal: -4,
    marginVertical: 8,
  },
  optionItem: {
    marginHorizontal: 4,
    paddingHorizontal: 0,
  },
  description: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  sectionLabel: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  imagesList: {
    padding: 8,
    backgroundColor: 'background-basic-color-2',
  },
  imageItem: {
    width: 180,
    height: 120,
    borderRadius: 8,
    marginHorizontal: 8,
  },
});
